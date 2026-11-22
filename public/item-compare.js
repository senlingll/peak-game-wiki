const tool = document.querySelector('[data-item-comparison]');

if (tool) {
  const { records, stageLabels, duplicate } = JSON.parse(tool.querySelector('[data-compare-data]').textContent);
  const items = new Map(records.map((item) => [item.id, item]));
  const form = tool.querySelector('[data-compare-form]');
  const goal = form.querySelector('[data-compare-goal]');
  const result = tool.querySelector('[data-compare-result]');
  const columns = [...result.querySelectorAll('[data-compare-heading]')];
  const rows = [...result.querySelectorAll('[data-metric]')];
  const notes = result.querySelector('[data-compare-notes]');
  const slots = [...form.querySelectorAll('[data-compare-slot]')].map((slot) => ({
    item: slot.querySelector('[data-compare-item]'),
    stage: slot.querySelector('[data-compare-stage]'),
  }));

  function updateStages({ item, stage }) {
    const currentStage = stage.value;
    const available = Object.keys(items.get(item.value).stages);
    stage.replaceChildren(...available.map((key) => new Option(stageLabels[key], key)));
    stage.value = available.includes(currentStage) ? currentStage : available[0];
  }

  function highlightGoal() {
    rows.forEach((row) => row.classList.toggle('is-comparison-goal', row.dataset.metric === goal.value));
  }

  function clearComparison() {
    slots[1].item.setCustomValidity('');
    result.hidden = true;
  }

  for (const slot of slots) {
    updateStages(slot);
    slot.item.addEventListener('change', () => {
      updateStages(slot);
      clearComparison();
    });
    slot.stage.addEventListener('change', clearComparison);
  }
  goal.addEventListener('change', highlightGoal);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const [first, second] = slots;
    if (first.item.value === second.item.value && first.stage.value === second.stage.value) {
      second.item.setCustomValidity(duplicate);
      second.item.reportValidity();
      return;
    }
    const notesMarkup = [];
    slots.forEach(({ item, stage }, index) => {
      const record = items.get(item.value);
      const effects = record.stages[stage.value];
      const label = document.createElement('a');
      label.href = record.url;
      label.textContent = record.name;
      const preparation = document.createElement('small');
      preparation.textContent = stageLabels[stage.value];
      columns[index].replaceChildren(label, preparation);
      rows.forEach((row, rowIndex) => {
        row.cells[index + 1].textContent = effects.values[rowIndex];
      });
      if (effects.note) {
        const detail = document.createElement('li');
        const name = document.createElement('strong');
        name.textContent = record.name;
        detail.append(name, ' · ', effects.note);
        notesMarkup.push(detail);
      }
    });
    notes.replaceChildren(...notesMarkup);
    notes.hidden = notesMarkup.length === 0;
    highlightGoal();
    result.hidden = false;
    result.querySelector('h2').focus();
  });
  form.hidden = false;
}
