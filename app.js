const itemSearch = document.querySelector('#item-search');
const itemCards = [...document.querySelectorAll('.item-card')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const itemCount = document.querySelector('#item-count');
const emptyItems = document.querySelector('#empty-items');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const locale = document.documentElement.dataset.locale || 'en';

const dynamicCopy = {
  en: { entry: 'entry', entries: 'entries', copied: 'Copied', manual: 'Select the note manually' },
  zh: { entry: '\u6761\u8bb0\u5f55', entries: '\u6761\u8bb0\u5f55', copied: '\u5df2\u590d\u5236', manual: '\u8bf7\u624b\u52a8\u9009\u62e9\u5907\u6ce8' },
  es: { entry: 'entrada', entries: 'entradas', copied: 'Copiado', manual: 'Selecciona la nota manualmente' },
  ja: { entry: '\u4ef6', entries: '\u4ef6', copied: '\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f', manual: '\u30ce\u30fc\u30c8\u3092\u624b\u52d5\u3067\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044' },
  fr: { entry: 'entr\u00e9e', entries: 'entr\u00e9es', copied: 'Copi\u00e9', manual: 'S\u00e9lectionnez la note manuellement' },
  de: { entry: 'Eintrag', entries: 'Eintr\u00e4ge', copied: 'Kopiert', manual: 'Notiz manuell ausw\u00e4hlen' },
  pt: { entry: 'entrada', entries: 'entradas', copied: 'Copiado', manual: 'Selecione a nota manualmente' },
  ko: { entry: '\ud56d\ubaa9', entries: '\ud56d\ubaa9', copied: '\ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4', manual: '\ub178\ud2b8\ub97c \uc218\ub3d9\uc73c\ub85c \uc120\ud0dd\ud558\uc138\uc694' },
  it: { entry: 'voce', entries: 'voci', copied: 'Copiato', manual: 'Seleziona la nota manualmente' },
};

const copy = dynamicCopy[locale] ?? dynamicCopy.en;

function updateItemResults() {
  const query = itemSearch?.value.trim().toLowerCase() ?? '';
  const activeFilter = document.querySelector('.filter-button.is-active')?.dataset.filter ?? 'all';
  let visible = 0;

  itemCards.forEach((card) => {
    const matchesText = !query || card.dataset.search.includes(query);
    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const shouldShow = matchesText && matchesCategory;
    card.classList.toggle('is-hidden', !shouldShow);
    if (shouldShow) visible += 1;
  });

  if (itemCount) itemCount.textContent = `${visible} ${visible === 1 ? copy.entry : copy.entries}`;
  if (emptyItems) emptyItems.hidden = visible !== 0;
}

function bindLogoFallbacks() {
  document.querySelectorAll('.brand-mark img').forEach((image) => {
    image.addEventListener('error', () => image.closest('.brand-mark')?.classList.add('is-fallback'));
  });
}

function bindMenu() {
  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}

function bindFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((candidate) => candidate.classList.toggle('is-active', candidate === button));
      updateItemResults();
    });
  });

  itemSearch?.addEventListener('input', updateItemResults);
  document.addEventListener('keydown', (event) => {
    const target = event.target;
    if (event.key === '/' && target instanceof HTMLElement && !['INPUT', 'TEXTAREA'].includes(target.tagName)) {
      event.preventDefault();
      itemSearch?.focus();
    }
  });
}

function bindCopyAction() {
  const copyButton = document.querySelector('[data-copy]');
  const status = document.querySelector('.copy-status');
  if (!copyButton || !status) return;

  copyButton.addEventListener('click', async () => {
    const value = copyButton.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(value);
      status.textContent = copy.copied;
    } catch {
      status.textContent = copy.manual;
    }
    window.setTimeout(() => {
      status.textContent = '';
    }, 2200);
  });
}

bindLogoFallbacks();
bindMenu();
bindFilters();
bindCopyAction();
updateItemResults();
