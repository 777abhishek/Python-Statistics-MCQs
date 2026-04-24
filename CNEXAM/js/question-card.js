/**
 * question-card.js
 * Builds and manages individual question card DOM elements.
 */
const QuestionCard = (() => {

  const OPTION_KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

  /**
   * Create a question card element.
   * @param {Object} q                  - Normalized question object
   * @param {number} index              - 0-based index in test
   * @param {Function} onAnswer         - Callback(index, answer, isCorrect)
   * @param {boolean} hideAnswersOnSelect - If true, suppress correct/wrong reveal on option select
   */
  function create(q, index, onAnswer, hideAnswersOnSelect = false) {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `qcard-${index}`;
    card.style.animationDelay = `${Math.min(index * 0.04, 0.6)}s`;

    card.innerHTML = `
      <div class="q-meta">
        <span class="q-num">Q${index + 1}</span>
        ${q.isAssignment ? `<span class="q-assignment-badge">WEEKLY ASSIGNMENT</span>` : ''}
        <span class="q-source">${q.source}</span>
        ${q.topic ? `<span class="q-topic">${q.topic}</span>` : ''}
        <span class="q-result-badge" id="badge-${index}"></span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="q-options" id="opts-${index}">
        ${q.options.map((opt, i) => `
          <label class="q-option" id="opt-${index}-${i}" tabindex="0">
            <input type="radio" name="q-${index}" value="${escapeAttr(opt)}">
            <span class="q-option-dot"></span>
            <span class="q-option-label">${escapeHtml(opt)}</span>
            <span class="q-option-key">${OPTION_KEYS[i] || i+1}</span>
          </label>
        `).join('')}
      </div>
      <div class="q-actions">
        <button class="btn-show-answer" id="showAns-${index}" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Show Answer
        </button>
      </div>
      <div class="q-explanation" id="expl-${index}">${escapeHtml(q.explanation)}</div>
    `;

    // Attach event listeners after injecting HTML
    const opts = card.querySelectorAll('.q-option');
    opts.forEach((label, i) => {
      const input = label.querySelector('input');

      label.addEventListener('click', () => {
        if (label.classList.contains('locked')) return;
        input.checked = true;
        handleAnswer(card, q, index, i, onAnswer, hideAnswersOnSelect);
      });

      label.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && !label.classList.contains('locked')) {
          e.preventDefault();
          input.checked = true;
          handleAnswer(card, q, index, i, onAnswer, hideAnswersOnSelect);
        }
      });
    });

    // Show Answer button
    const showAnsBtn = card.querySelector(`#showAns-${index}`);
    showAnsBtn.addEventListener('click', () => {
      showAnswer(card, q, index);
      showAnsBtn.disabled = true;
      showAnsBtn.classList.add('disabled');
      showAnsBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Answer Revealed`;
    });

    return card;
  }

  function normalizeText(value) {
    if (typeof value !== 'string') return value;
    return value.trim().replace(/\s+/g, ' ');
  }

  function showAnswer(card, q, index) {
    const opts = card.querySelectorAll('.q-option');

    // Mark correct answer with highlight (but don't lock)
    opts.forEach((o, i) => {
      if (normalizeText(q.options[i]) === normalizeText(q.correctAnswer)) {
        o.classList.add('answer-revealed');
      }
    });

    // If the user has already selected a wrong option, mark it as wrong
    const selectedOption = Array.from(opts).find(o => o.querySelector('input')?.checked);
    if (selectedOption && !selectedOption.classList.contains('answer-revealed')) {
      const selectedIndex = Array.from(opts).indexOf(selectedOption);
      if (normalizeText(q.options[selectedIndex]) !== normalizeText(q.correctAnswer)) {
        selectedOption.classList.add('wrong-pick');
      }
    }

    // Show explanation
    const expl = card.querySelector('.q-explanation');
    if (q.explanation) expl.classList.add('visible');

    // Show badge
    showBadge(card, index, 'revealed');
  }

  function handleAnswer(card, q, index, selectedIndex, onAnswer, hideAnswersOnSelect) {
    const opts = card.querySelectorAll('.q-option');
    const selected = opts[selectedIndex];
    const selectedValue = q.options[selectedIndex];
    const isCorrect = normalizeText(selectedValue) === normalizeText(q.correctAnswer);

    // Lock all options
    opts.forEach(o => o.classList.add('locked'));

    if (hideAnswersOnSelect) {
      selected.classList.add('selected');
      onAnswer(index, selectedValue, isCorrect);
      return;
    }

    // Mark correct answer
    opts.forEach((o, i) => {
      if (normalizeText(q.options[i]) === normalizeText(q.correctAnswer)) {
        o.classList.add('correct');
      }
    });

    // Mark selected (only if wrong — correct is already styled)
    selected.classList.add('selected');
    if (!isCorrect) {
      selected.classList.add('wrong-pick');
    }

    // Show explanation
    const expl = card.querySelector('.q-explanation');
    if (q.explanation) expl.classList.add('visible');

    // Show badge
    showBadge(card, index, isCorrect ? 'correct' : 'wrong');

    onAnswer(index, selectedValue, isCorrect);
  }

  function showBadge(card, index, type) {
    const badge = card.querySelector(`#badge-${index}`);
    if (!badge) return;
    if (type === 'correct') {
      badge.className = 'q-result-badge show-correct';
      badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Correct`;
    } else if (type === 'wrong') {
      badge.className = 'q-result-badge show-wrong';
      badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg> Wrong`;
    } else if (type === 'revealed') {
      badge.className = 'q-result-badge show-revealed';
      badge.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> Revealed`;
    } else {
      badge.className = 'q-result-badge show-skip';
      badge.textContent = 'Skipped';
    }
  }

  /** Reveal correct answer on submit without user having answered */
  function reveal(card, q, index, userAnswer) {
    const opts = card.querySelectorAll('.q-option');

    opts.forEach((o, i) => {
      o.classList.add('locked');
      if (normalizeText(q.options[i]) === normalizeText(q.correctAnswer)) o.classList.add('correct');
    });

    if (userAnswer) {
      opts.forEach((o, i) => {
        if (normalizeText(q.options[i]) === normalizeText(userAnswer) && normalizeText(userAnswer) !== normalizeText(q.correctAnswer)) {
          o.classList.add('selected', 'wrong-pick');
        }
      });
    }

    const expl = card.querySelector('.q-explanation');
    if (q.explanation) expl.classList.add('visible');

    if (!userAnswer) showBadge(card, index, 'skip');
  }

  /** Create a read-only review card */
  function createReview(q, index, userAnswer) {
    const isCorrect = normalizeText(userAnswer) === normalizeText(q.correctAnswer);
    const isSkipped = !userAnswer;

    const card = document.createElement('div');
    card.className = 'q-card answered';
    card.dataset.status = isSkipped ? 'skipped' : (isCorrect ? 'correct' : 'wrong');

    card.innerHTML = `
      <div class="q-meta">
        <span class="q-num">Q${index + 1}</span>
        ${q.isAssignment ? `<span class="q-assignment-badge">WEEKLY ASSIGNMENT</span>` : ''}
        <span class="q-source">${q.source}</span>
        ${q.topic ? `<span class="q-topic">${q.topic}</span>` : ''}
        <span class="q-result-badge ${isSkipped ? 'show-skip' : isCorrect ? 'show-correct' : 'show-wrong'}">
          ${isSkipped ? 'Skipped' : isCorrect ? '✓ Correct' : '✗ Wrong'}
        </span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="q-options">
        ${q.options.map((opt, i) => {
          let cls = 'q-option locked';
          if (normalizeText(opt) === normalizeText(q.correctAnswer)) cls += ' correct';
          else if (normalizeText(opt) === normalizeText(userAnswer)) cls += ' selected wrong-pick';
          return `
            <div class="${cls}">
              <span class="q-option-dot"></span>
              <span class="q-option-label">${escapeHtml(opt)}</span>
              <span class="q-option-key">${OPTION_KEYS[i] || i+1}</span>
            </div>`;
        }).join('')}
      </div>
      ${q.explanation ? `<div class="q-explanation visible">${escapeHtml(q.explanation)}</div>` : ''}
    `;

    return card;
  }

  // ── Helpers ──
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeAttr(str) {
    return String(str).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  }

  return { create, reveal, createReview };
})();
