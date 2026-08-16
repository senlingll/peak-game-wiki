const itemSearch = document.querySelector('#item-search');
const itemCards = [...document.querySelectorAll('.item-card')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const itemCount = document.querySelector('#item-count');
const emptyItems = document.querySelector('#empty-items');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

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

  if (itemCount) itemCount.textContent = `${visible} ${visible === 1 ? 'entry' : 'entries'}`;
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
      status.textContent = 'Copied';
    } catch {
      status.textContent = 'Select the note manually';
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
