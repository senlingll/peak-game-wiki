const tool = document.querySelector('[data-room-diagnostic]');

if (tool) {
  const form = tool.querySelector('[data-room-form]');
  const result = tool.querySelector('[data-room-result]');
  const title = tool.querySelector('[data-room-result-title]');
  const steps = tool.querySelector('[data-room-steps]');
  const copy = tool.querySelector('[data-room-copy]');
  const copyText = tool.querySelector('[data-room-copy-text]');
  const copyStatus = tool.querySelector('[data-room-copy-status]');
  const feedback = tool.querySelector('[data-room-feedback]');
  const voteStatus = tool.querySelector('[data-room-vote-status]');
  const voteButtons = [...feedback.querySelectorAll('[data-room-vote]')];
  const checklists = new Map([...tool.querySelectorAll('[data-room-case]')].map((check) => [check.dataset.roomCase, check]));
  const selections = [...form.querySelectorAll('select')];
  const completed = new Set();
  const votes = new Map();
  let current = null;

  function getCheck({ host, guest, method, symptom }) {
    if (symptom === 'photon' || symptom === 'voice') return symptom;
    const consoleInvolved = [host, guest].some((platform) => ['ps5', 'xbox', 'switch2'].includes(platform));
    if (consoleInvolved && (method === 'invite' || symptom === 'invite')) return 'useCode';
    return symptom;
  }

  function updateFeedback(vote) {
    voteButtons.forEach((button) => {
      button.disabled = Boolean(vote);
      button.setAttribute('aria-pressed', String(button.dataset.roomVote === vote));
    });
    voteStatus.textContent = vote ? feedback.dataset.recorded : '';
  }

  function clearResult() {
    current = null;
    result.hidden = true;
    copyText.hidden = true;
    copyText.value = '';
    copyStatus.textContent = '';
    updateFeedback();
  }

  form.hidden = false;
  form.addEventListener('change', clearResult);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const values = Object.fromEntries(selections.map((field) => [field.name, field.value]));
    const check = getCheck(values);
    const reference = checklists.get(check);
    if (!reference || selections.some((field) => !field.value)) return;

    clearResult();
    title.textContent = reference.querySelector('h3').textContent;
    steps.replaceChildren(...[...reference.querySelectorAll('li')].map((item) => item.cloneNode(true)));
    const key = [values.host, values.guest, values.method, values.symptom].join('/');
    const summary = selections.map((field) => {
      const label = field.labels[0].querySelector('span').textContent;
      return `${label} — ${field.selectedOptions[0].textContent}`;
    });
    current = {
      key,
      summary: [...summary, '', title.textContent, ...[...steps.children].map((item, index) => `${index + 1}. ${item.textContent}`)].join('\n'),
      analytics: {
        host_platform: values.host,
        guest_platform: values.guest,
        join_method: values.method,
        symptom: values.symptom,
        diagnosis: check,
      },
    };
    updateFeedback(votes.get(key));
    result.hidden = false;
    title.focus();

    if (!completed.has(key)) {
      completed.add(key);
      window.gtag?.('event', 'room_diagnosis_completed', current.analytics);
    }
  });

  copy.addEventListener('click', async () => {
    const diagnosis = current;
    if (!diagnosis) return;
    try {
      await navigator.clipboard.writeText(diagnosis.summary);
      if (current !== diagnosis) return;
      copyText.hidden = true;
      copyStatus.textContent = copy.dataset.copied;
    } catch {
      if (current !== diagnosis) return;
      copyText.hidden = false;
      copyText.value = diagnosis.summary;
      copyText.select();
      copyStatus.textContent = copy.dataset.manual;
    }
  });

  feedback.addEventListener('click', (event) => {
    const button = event.target.closest('[data-room-vote]');
    if (!current || !button || votes.has(current.key)) return;
    const outcome = button.dataset.roomVote;
    votes.set(current.key, outcome);
    updateFeedback(outcome);
    window.gtag?.('event', 'room_diagnosis_feedback', { ...current.analytics, outcome });
  });
}
