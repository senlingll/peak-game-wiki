const catalogSearch = document.querySelector('#items-search');
const catalogType = document.querySelector('#items-type');
const catalogBiome = document.querySelector('#items-biome');
const catalogRows = [...document.querySelectorAll('.items-catalog-row')];
const catalogSections = [...document.querySelectorAll('[data-items-section]')];
const catalogFilters = [...document.querySelectorAll('[data-catalog-category]')];
const catalogCount = document.querySelector('#items-result-count');
const catalogEmpty = document.querySelector('#items-empty');

function normalizeCatalogValue(value) {
  return String(value ?? '').trim().toLowerCase();
}

function updateCatalog() {
  const query = normalizeCatalogValue(catalogSearch?.value);
  const type = normalizeCatalogValue(catalogType?.value);
  const biome = normalizeCatalogValue(catalogBiome?.value);
  const category = document.querySelector('[data-catalog-category].is-active')?.dataset.catalogCategory ?? 'all';
  let visible = 0;

  catalogRows.forEach((row) => {
    const matchesQuery = !query || row.dataset.search.includes(query);
    const matchesType = !type || row.dataset.type.includes(type);
    const matchesBiome = !biome || row.dataset.biome.split(', ').includes(biome) || row.dataset.biome.includes(biome);
    const matchesCategory = category === 'all' || row.dataset.category === category;
    const matches = matchesQuery && matchesType && matchesBiome && matchesCategory;
    row.classList.toggle('is-hidden', !matches);
    if (matches) visible += 1;
  });

  catalogSections.forEach((section) => {
    section.classList.toggle('is-empty', !section.querySelector('.items-catalog-row:not(.is-hidden)'));
  });
  if (catalogCount) catalogCount.textContent = `${visible} ${catalogCount.dataset.resultLabel}`;
  if (catalogEmpty) catalogEmpty.hidden = visible !== 0;
}

catalogFilters.forEach((button) => {
  button.addEventListener('click', () => {
    catalogFilters.forEach((candidate) => candidate.classList.toggle('is-active', candidate === button));
    updateCatalog();
  });
});

catalogSearch?.addEventListener('input', updateCatalog);
catalogType?.addEventListener('change', updateCatalog);
catalogBiome?.addEventListener('change', updateCatalog);
updateCatalog();
