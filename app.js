(() => {
  if (!/^(www\.)?peak-game\.wiki$/.test(window.location.hostname)) return;
  const measurementId = 'G-8GDHLW3098';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
})();

const itemSearch = document.querySelector('#item-search');
const itemCards = [...document.querySelectorAll('.item-card')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
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
let itemsExpanded = false;

function updateItemResults() {
  const query = itemSearch?.value.trim().toLowerCase() ?? '';
  const activeFilter = document.querySelector('.filter-button.is-active')?.dataset.filter ?? 'all';
  const hasSearchOrFilter = Boolean(query) || activeFilter !== 'all';
  const itemGrid = document.querySelector('#item-grid');
  const itemToggle = document.querySelector('.item-toggle');
  const itemToggleLabel = itemToggle?.querySelector('.toggle-label');
  let visible = 0;

  itemCards.forEach((card) => {
    const matchesText = !query || card.dataset.search.includes(query);
    const matchesCategory = activeFilter === 'all' || card.dataset.category === activeFilter;
    const shouldShow = matchesText && matchesCategory && (itemsExpanded || hasSearchOrFilter || card.dataset.defaultVisible === 'true');
    card.classList.toggle('is-hidden', !shouldShow);
    if (shouldShow) visible += 1;
  });

  itemGrid?.classList.toggle('is-expanded', itemsExpanded || hasSearchOrFilter);
  if (itemToggle) itemToggle.setAttribute('aria-expanded', String(itemsExpanded));
  if (itemToggleLabel && itemToggle) itemToggleLabel.textContent = itemsExpanded ? itemToggle.dataset.browseFewer : itemToggle.dataset.browseAll;
  if (emptyItems) emptyItems.hidden = visible !== 0;
}

function bindLogoFallbacks() {
  document.querySelectorAll('.brand-mark img').forEach((image) => {
    image.addEventListener('error', () => image.closest('.brand-mark')?.classList.add('is-fallback'));
  });
}

function bindMenu() {
  if (!menuToggle || !siteNav) return;
  const tools = siteNav.querySelector('.tools-menu');
  const summary = tools?.querySelector('summary');

  function setMenuOpen(isOpen) {
    siteNav.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
    if (!isOpen && tools) tools.open = false;
  }

  menuToggle.addEventListener('click', () => setMenuOpen(!siteNav.classList.contains('is-open')));
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

  if (!tools || !summary) return;
  document.addEventListener('click', (event) => {
    if (tools.open && !tools.contains(event.target)) tools.open = false;
  });
  siteNav.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (tools.open) {
      tools.open = false;
      summary.focus();
    } else if (siteNav.classList.contains('is-open')) {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}

function bindFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((candidate) => candidate.classList.toggle('is-active', candidate === button));
      if (button.dataset.filter === 'all' && !itemSearch?.value.trim()) itemsExpanded = false;
      updateItemResults();
    });
  });

  itemSearch?.addEventListener('input', () => {
    if (!itemSearch.value.trim() && document.querySelector('.filter-button.is-active')?.dataset.filter === 'all') itemsExpanded = false;
    updateItemResults();
  });
  document.addEventListener('keydown', (event) => {
    const target = event.target;
    if (event.key === '/' && target instanceof HTMLElement && !['INPUT', 'TEXTAREA'].includes(target.tagName)) {
      event.preventDefault();
      itemSearch?.focus();
    }
  });
}

function bindUpdateToggle() {
  const button = document.querySelector('.update-toggle');
  const list = document.querySelector('#update-list');
  const label = button?.querySelector('.toggle-label');
  if (!button || !list || !label) return;

  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    list.classList.toggle('is-expanded', expanded);
    label.textContent = expanded ? button.dataset.showFewer : button.dataset.showAll;
  });
}

function bindItemToggle() {
  const button = document.querySelector('.item-toggle');
  const grid = document.querySelector('#item-grid');
  const label = button?.querySelector('.toggle-label');
  if (!button || !grid || !label) return;

  button.addEventListener('click', () => {
    itemsExpanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(itemsExpanded));
    grid.classList.toggle('is-expanded', itemsExpanded);
    label.textContent = itemsExpanded ? button.dataset.browseFewer : button.dataset.browseAll;
    updateItemResults();
  });
}

function bindTodayMapCarousels() {
  document.querySelectorAll('[data-today-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-carousel-track]');
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    const dots = [...carousel.querySelectorAll('[data-carousel-index]')];
    const previous = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    if (!track || slides.length < 2) return;

    let activeIndex = 0;
    let timerId;

    const setSlide = (value) => {
      activeIndex = (value + slides.length) % slides.length;
      track.style.transform = 'translate3d(-' + (activeIndex * 100) + '%, 0, 0)';
      slides.forEach((slide, index) => {
        const active = index === activeIndex;
        slide.classList.toggle('is-active', active);
        slide.setAttribute('aria-hidden', String(!active));
        slide.querySelectorAll('a').forEach((link) => { link.tabIndex = active ? 0 : -1; });
      });
      dots.forEach((dot, index) => {
        const active = index === activeIndex;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-pressed', String(active));
      });
    };

    const stop = () => {
      window.clearInterval(timerId);
      timerId = undefined;
    };

    const start = () => {
      stop();
      timerId = window.setInterval(() => setSlide(activeIndex + 1), 5000);
    };

    previous?.addEventListener('click', () => {
      setSlide(activeIndex - 1);
      start();
    });
    next?.addEventListener('click', () => {
      setSlide(activeIndex + 1);
      start();
    });
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setSlide(index);
        start();
      });
    });

    carousel.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      setSlide(activeIndex + (event.key === 'ArrowRight' ? 1 : -1));
      start();
    });
    carousel.addEventListener('focusin', stop);
    carousel.addEventListener('focusout', (event) => {
      if (!carousel.contains(event.relatedTarget)) start();
    });

    setSlide(0);
    start();
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

function bindDailyMaps() {
  const summaries = document.querySelectorAll('[data-daily-map]');
  if (!summaries.length) return;
  const interval = 24 * 60 * 60 * 1000;
  const language = document.documentElement.lang;
  const localDay = new Intl.DateTimeFormat(language, { dateStyle: 'long' });
  const localTime = new Intl.DateTimeFormat(language, {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    hourCycle: 'h23', timeZoneName: 'shortOffset',
  });
  const dateParts = new Intl.DateTimeFormat('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  summaries.forEach((summary) => {
    const day = summary.querySelector('[data-map-date]');
    const reset = summary.querySelector('[data-map-reset]');
    const route = summary.querySelector('[data-map-route]');
    const status = summary.querySelector('[data-map-status]');
    const countdown = summary.querySelector('[data-map-countdown]');
    const share = summary.querySelector('[data-map-share]');
    const shareText = summary.querySelector('[data-map-share-text]');
    const shareStatus = summary.querySelector('.copy-status');
    const updated = summary.querySelector('[data-map-updated]');
    const reference = summary.id === 'today-map' ? document.querySelector('[data-map-reference]') : null;
    const expiry = Date.parse(summary.dataset.mapValidUntil);
    const initialReset = Date.parse(summary.dataset.mapNextReset);
    let current = Number.isFinite(expiry);

    if (updated) updated.textContent = localTime.format(Date.parse(updated.dateTime));
    const refresh = () => {
      const now = Date.now();
      if (current && now >= expiry) {
        current = false;
        route.textContent = summary.dataset.mapWaiting;
        status.textContent = summary.dataset.mapWaiting;
        summary.querySelectorAll('[data-map-current]').forEach((element) => { element.hidden = true; });
        summary.querySelectorAll('[data-map-pending]').forEach((element) => { element.hidden = false; });
        if (reference) reference.hidden = true;
        if (shareText) {
          shareText.hidden = true;
          shareText.value = '';
        }
      }
      const parts = Object.fromEntries(dateParts.formatToParts(now).map(({ type, value }) => [type, value]));
      const date = parts.year + '-' + parts.month + '-' + parts.day;
      if (day.dateTime !== date) {
        day.dateTime = date;
        day.textContent = localDay.format(now);
      }

      const elapsedIntervals = now < initialReset ? 0 : Math.floor((now - initialReset) / interval) + 1;
      const nextReset = initialReset + elapsedIntervals * interval;
      const resetIso = new Date(nextReset).toISOString();
      const resetLabel = localTime.format(nextReset);
      if (reset.dateTime !== resetIso || reset.textContent !== resetLabel) {
        reset.dateTime = resetIso;
        reset.textContent = resetLabel;
      }
      if (countdown) {
        const seconds = Math.ceil((nextReset - now) / 1000);
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds / 60) % 60;
        countdown.textContent = [hours, minutes, seconds % 60].map((part) => String(part).padStart(2, '0')).join(':');
      }
    };

    refresh();
    const countdownRow = summary.querySelector('[data-map-countdown-row]');
    if (countdownRow) countdownRow.hidden = false;
    window.setInterval(refresh, 1000);
    window.addEventListener('pageshow', refresh);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) refresh();
    });

    if (!share) return;
    share.hidden = false;
    share.addEventListener('click', async () => {
      refresh();
      const value = [
        day.closest('.daily-map-date').textContent.trim(),
        route.dataset.copyLabel + ' — ' + route.textContent + (current ? ' (' + status.textContent + ')' : ''),
        reset.dataset.copyLabel + ' — ' + reset.textContent + ' (' + reset.dateTime.slice(0, 10) + ' ' + reset.dateTime.slice(11, 16) + ' UTC)',
      ].join('\n');
      try {
        await navigator.clipboard.writeText(value);
        shareText.hidden = true;
        shareStatus.textContent = copy.copied;
      } catch {
        shareText.hidden = false;
        shareText.value = value;
        shareText.select();
        shareStatus.textContent = copy.manual;
      }
    });
  });
}

bindLogoFallbacks();
bindMenu();
bindFilters();
bindUpdateToggle();
bindItemToggle();
bindDailyMaps();
bindTodayMapCarousels();
bindCopyAction();
updateItemResults();
