"""通过 PEAK 官方 MediaWiki API 下载并校验物品图标。"""

from __future__ import annotations

import io
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image


API_URL = "https://peak.wiki.gg/api.php"
CATALOG_PATH = Path(__file__).with_name("items-catalog.mjs")
OUTPUT_DIR = Path(__file__).resolve().parents[1] / "public" / "media" / "items"
BATCH_SIZE = 50
TARGET_WIDTH = 128
USER_AGENT = "peak-game.wiki item icon downloader/1.0"


def load_item_names(catalog_path: Path) -> list[str]:
    """
    从物品目录模块读取全部英文官方物品名

    :param catalog_path: 物品目录模块路径
    :return: 物品英文名称列表
    """
    source = catalog_path.read_text(encoding="utf-8")
    match = re.search(
        r"export const itemsCatalog\s*=\s*(\[.*?\]);\s*(?:\r?\n)",
        source,
        re.DOTALL,
    )
    if not match:
        raise RuntimeError(f"无法从 {catalog_path} 找到 itemsCatalog 数组")

    items = json.loads(match.group(1))
    names = [item["name"] for item in items]
    if len(names) != 134:
        raise RuntimeError(f"物品目录数量应为 134，实际为 {len(names)}")
    if len(set(names)) != len(names):
        raise RuntimeError("物品目录中存在重复英文名称")
    return names


def normalize_filename(name: str) -> str:
    """
    将官方物品名规范化为 Windows 安全的小写连字符文件名

    :param name: 官方英文物品名
    :return: 不含扩展名的规范化文件名
    """
    if name == "Bugle?":
        return "bugle-question-mark"

    normalized = unicodedata.normalize("NFKC", name).lower()
    normalized = re.sub(r"[()]", " ", normalized)
    normalized = re.sub(r"[^a-z0-9' -]+", "-", normalized)
    normalized = re.sub(r"[ _-]+", "-", normalized).strip("-.")
    if not normalized:
        raise RuntimeError(f"无法为物品名生成文件名：{name}")
    return normalized


def build_title(name: str, use_underscores: bool = False) -> str:
    """
    按官方显示名构造 MediaWiki 文件标题

    :param name: 官方英文物品名
    :param use_underscores: 是否将空格替换为下划线
    :return: File 命名空间中的 PNG 标题
    """
    display_name = name.replace(" ", "_") if use_underscores else name
    return f"File:{display_name}.png"


def request_bytes(url: str, attempts: int = 4) -> bytes:
    """
    带重试下载 URL 的原始字节

    :param url: 待访问的 HTTPS URL
    :param attempts: 最大尝试次数
    :return: 下载得到的字节内容
    """
    last_error: Exception | None = None
    for attempt in range(1, attempts + 1):
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=45) as response:
                if response.status != 200:
                    raise RuntimeError(f"HTTP {response.status}: {url}")
                return response.read()
        except (urllib.error.URLError, TimeoutError, RuntimeError) as error:
            last_error = error
            if attempt < attempts:
                time.sleep(attempt * 1.5)
    raise RuntimeError(f"下载失败（已重试 {attempts} 次）：{url}") from last_error


def fetch_thumb_urls(names: list[str]) -> dict[str, str]:
    """
    分批查询官方 imageinfo API 并返回每个物品的缩略图 URL

    :param names: 官方英文物品名列表
    :return: 物品名到官方 128px 缩略图 URL 的映射
    """
    title_to_name = {build_title(name): name for name in names}
    result: dict[str, str] = {}

    for start in range(0, len(names), BATCH_SIZE):
        batch = names[start : start + BATCH_SIZE]
        params = {
            "action": "query",
            "titles": "|".join(build_title(name, use_underscores=True) for name in batch),
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": str(TARGET_WIDTH),
            "format": "json",
            "formatversion": "2",
        }
        url = f"{API_URL}?{urllib.parse.urlencode(params)}"
        payload = json.loads(request_bytes(url).decode("utf-8"))
        pages = payload.get("query", {}).get("pages", [])

        for page in pages:
            returned_title = page.get("title", "").replace("_", " ")
            name = title_to_name.get(returned_title)
            imageinfo = page.get("imageinfo") or []
            thumb_url = imageinfo[0].get("thumburl") if imageinfo else None
            if name and thumb_url:
                result[name] = thumb_url

        missing = [name for name in batch if name not in result]
        if missing:
            raise RuntimeError(
                f"第 {start // BATCH_SIZE + 1} 批缺少 imageinfo：{', '.join(missing)}"
            )
        print(f"API 第 {start // BATCH_SIZE + 1} 批完成：{len(batch)} 张")

    return result


def convert_to_webp(image_bytes: bytes, destination: Path) -> None:
    """
    将下载图片转换为宽度固定 128px 的透明无损 WebP

    :param image_bytes: 原始图片字节
    :param destination: WebP 输出路径
    :return: 无返回值
    """
    with Image.open(io.BytesIO(image_bytes)) as source:
        source.load()
        image = source.convert("RGBA")
        if image.width != TARGET_WIDTH:
            height = max(1, round(image.height * TARGET_WIDTH / image.width))
            image = image.resize((TARGET_WIDTH, height), Image.Resampling.LANCZOS)
        image.save(destination, format="WEBP", lossless=True, method=6)


def download_icons(names: list[str], thumb_urls: dict[str, str]) -> dict[str, str]:
    """
    下载全部缩略图并保存为规范化的本地 WebP 文件

    :param names: 官方英文物品名列表
    :param thumb_urls: 物品名到官方缩略图 URL 的映射
    :return: 物品名到本地文件名的映射
    """
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    filename_map = {name: f"{normalize_filename(name)}.webp" for name in names}
    if len(set(filename_map.values())) != len(filename_map):
        raise RuntimeError("规范化后的本地文件名发生冲突")

    for index, name in enumerate(names, start=1):
        destination = OUTPUT_DIR / filename_map[name]
        image_bytes = request_bytes(thumb_urls[name])
        convert_to_webp(image_bytes, destination)
        print(f"[{index:03d}/{len(names)}] {name} -> {destination.name}")
    return filename_map


def verify_icons(names: list[str], filename_map: dict[str, str]) -> tuple[int, int]:
    """
    校验图标数量、格式、宽度、透明通道与完整解码状态

    :param names: 官方英文物品名列表
    :param filename_map: 物品名到本地文件名的映射
    :return: 已校验文件数量与总字节数
    """
    expected_paths = {OUTPUT_DIR / filename_map[name] for name in names}
    actual_paths = set(OUTPUT_DIR.glob("*.webp"))
    missing = expected_paths - actual_paths
    extras = actual_paths - expected_paths
    if missing or extras:
        raise RuntimeError(
            f"文件集合不一致，缺少 {len(missing)} 张，多出 {len(extras)} 张"
        )

    total_bytes = 0
    for path in sorted(expected_paths):
        with Image.open(path) as image:
            image.load()
            if image.format != "WEBP":
                raise RuntimeError(f"格式不是 WEBP：{path.name}")
            if image.width != TARGET_WIDTH:
                raise RuntimeError(f"宽度不是 {TARGET_WIDTH}px：{path.name}")
            if "A" not in image.getbands():
                raise RuntimeError(f"缺少透明通道：{path.name}")
        total_bytes += path.stat().st_size
    return len(expected_paths), total_bytes


def main() -> int:
    """
    执行物品图标查询、下载、转换与完整性校验

    :return: 进程退出码，成功为 0
    """
    names = load_item_names(CATALOG_PATH)
    thumb_urls = fetch_thumb_urls(names)
    filename_map = download_icons(names, thumb_urls)
    count, total_bytes = verify_icons(names, filename_map)
    print(f"校验通过：{count} 张 WebP，宽度均为 {TARGET_WIDTH}px")
    print(f"总大小：{total_bytes / 1024:.1f} KiB")
    print("特殊映射：Bugle? -> bugle-question-mark.webp")
    return 0


if __name__ == "__main__":
    sys.exit(main())
