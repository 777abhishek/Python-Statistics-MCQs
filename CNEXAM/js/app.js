/**
 * app.js
 * Main application controller. Orchestrates all modules.
 */
const App = (() => {
  let allQuestions   = [];
  let testQuestions  = [];
  let userAnswers    = {};
  let selectedCount  = 50;
  let selectedSource = 'all';
  let testElapsed    = 0;

  // ── Init ──────────────────────────────────────────
  function init() {
    const { questions, errors } = DataLoader.load();

    if (errors.length) console.warn('Data load warnings:', errors);

    allQuestions = questions;
    renderSplashStats();
    bindSplashControls();
  }

  function renderSplashStats() {
    const stats   = DataLoader.getStats(allQuestions);
    const total   = allQuestions.length;
    const container = document.getElementById('splashStats');

    // Build stat cards with icons
    const statCards = [
      {
        value: total,
        label: 'Total Questions',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>'
      },
      ...Object.entries(stats).map(([src, n]) => ({
        value: n,
        label: src,
        icon: src === 'PYQS' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>' :
               src === 'CNIP' ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' :
               '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
      }))
    ];

    container.innerHTML = statCards.map((stat, i) =>
      `<div class="stat-card" style="animation-delay:${0.45 + i * 0.05}s">
        <div class="stat-icon">${stat.icon}</div>
        <div class="stat-info">
          <span class="stat-value">${stat.value}</span>
          <span class="stat-label">${stat.label}</span>
        </div>
      </div>`
    ).join('');
  }

  function bindSplashControls() {
    // Count buttons
    document.querySelectorAll('.config-btn').forEach(btn => {
      btn.classList.remove('active');
      if (parseInt(btn.dataset.count) === selectedCount) btn.classList.add('active');

      btn.addEventListener('click', () => {
        document.querySelectorAll('.config-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCount = parseInt(btn.dataset.count);
      });
    });

    // Source filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSource = btn.dataset.source;
      });
    });
  }

  // ── Start test ────────────────────────────────────
  function start() {
    const pool    = DataLoader.filter(allQuestions, selectedSource);
    testQuestions = DataLoader.sample(pool, selectedCount);
    userAnswers   = {};

    if (testQuestions.length === 0) {
      alert('No questions available for the selected filter.');
      return;
    }

    // Request fullscreen on mobile devices
    if (window.innerWidth <= 640 && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    showScreen('testScreen');
    renderTest();
    Timer.start();
  }

  function renderTest() {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';

    testQuestions.forEach((q, i) => {
      const card = QuestionCard.create(q, i, onAnswer);
      container.appendChild(card);
    });

    updateProgress();
    updateSubmitSummary();
  }

  function onAnswer(index, answer, isCorrect) {
    userAnswers[index] = answer;
    updateProgress();
    updateSubmitSummary();
  }

  function updateProgress() {
    const answered = Object.keys(userAnswers).length;
    const total    = testQuestions.length;
    const pct      = total > 0 ? (answered / total) * 100 : 0;

    document.getElementById('progressFill').style.width = `${pct}%`;
    document.getElementById('progressLabel').textContent = `${answered} / ${total} answered`;
  }

  function updateSubmitSummary() {
    const answered = Object.keys(userAnswers).length;
    const left     = testQuestions.length - answered;
    document.getElementById('summaryAnswered').textContent = answered;
    document.getElementById('summaryLeft').textContent     = left;
  }

  // ── Submit Popup ──────────────────────────────────
  function showSubmitPopup() {
    const answered = Object.keys(userAnswers).length;
    const total = testQuestions.length;
    const remaining = total - answered;
    const skipped = testQuestions.filter((q, i) => !userAnswers[i]).length;

    document.getElementById('popupAnswered').textContent = answered;
    document.getElementById('popupTotal').textContent = total;

    const popupStats = document.getElementById('popupStats');
    popupStats.innerHTML = `
      <div class="popup-stat answered">
        <span class="popup-stat-value">${answered}</span>
        <span class="popup-stat-label">Answered</span>
      </div>
      <div class="popup-stat remaining">
        <span class="popup-stat-value">${remaining}</span>
        <span class="popup-stat-label">Remaining</span>
      </div>
      ${skipped > 0 ? `
      <div class="popup-stat skipped">
        <span class="popup-stat-value">${skipped}</span>
        <span class="popup-stat-label">Skipped</span>
      </div>` : ''}
    `;

    document.getElementById('submitPopup').classList.remove('hidden');
  }

  function hideSubmitPopup() {
    document.getElementById('submitPopup').classList.add('hidden');
  }

  function confirmSubmit() {
    hideSubmitPopup();
    submit();
  }

  // ── Submit ────────────────────────────────────────
  function submit() {
    const unanswered = testQuestions.length - Object.keys(userAnswers).length;

    if (unanswered > 0) {
      if (!confirm(`${unanswered} question(s) unanswered. Submit anyway?`)) return;
    }

    testElapsed = Timer.stop();

    // Reveal all unanswered
    testQuestions.forEach((q, i) => {
      if (!userAnswers[i]) {
        const card = document.getElementById(`qcard-${i}`);
        if (card) QuestionCard.reveal(card, q, i, null);
      }
    });

    showResults();
  }

  // ── Results ───────────────────────────────────────
  function showResults() {
    let correct   = 0;
    let incorrect = 0;
    let skipped   = 0;

    testQuestions.forEach((q, i) => {
      const a = userAnswers[i];
      if (!a)                      skipped++;
      else if (a === q.correctAnswer) correct++;
      else                          incorrect++;
    });

    const total = testQuestions.length;
    const pct   = Math.round((correct / total) * 100);

    document.getElementById('scorePct').textContent   = `${pct}%`;
    document.getElementById('resCorrect').textContent  = correct;
    document.getElementById('resIncorrect').textContent = incorrect;
    document.getElementById('resSkipped').textContent  = skipped;
    document.getElementById('resTime').textContent     = Timer.formatFriendly(testElapsed);
    document.getElementById('resultsTitle').textContent =
      pct >= 80 ? '🎉 Excellent Work!' :
      pct >= 60 ? '✅ Good Job!' :
      pct >= 40 ? '📚 Keep Practicing' : '💪 Keep Going!';

    // Badge
    const badge = document.getElementById('resultsBadge');
    badge.textContent  = pct >= 60 ? 'PASSED' : 'NEEDS WORK';
    badge.className    = `results-badge ${pct >= 80 ? 'great' : pct >= 60 ? 'pass' : 'fail'}`;

    // Animate ring
    const ring = document.getElementById('ringFill');
    const circumference = 502;
    const offset = circumference - (pct / 100) * circumference;
    ring.style.strokeDashoffset = offset;
    ring.className = `ring-fill ${pct >= 80 ? 'correct-great' : pct >= 60 ? 'correct-pass' : 'incorrect-fail'}`;

    showScreen('resultsScreen');
  }

  // ── Review ────────────────────────────────────────
  function reviewAnswers() {
    Review.init(testQuestions, userAnswers);
    showScreen('reviewScreen');
    Review.render();
  }

  function backToResults() {
    showScreen('resultsScreen');
  }

  // ── New test ──────────────────────────────────────
  function newTest() {
    Timer.reset();
    showScreen('splashScreen');
  }

  // ── Go Home ───────────────────────────────────────
  function goHome() {
    if (confirm('Are you sure you want to leave? Your progress will be lost.')) {
      Timer.reset();
      showScreen('splashScreen');
    }
  }

  // ── Screen management ─────────────────────────────
  function showScreen(id) {
    const screens = ['splashScreen', 'testScreen', 'resultsScreen', 'reviewScreen'];
    screens.forEach(s => {
      const el = document.getElementById(s);
      if (s === id) {
        el.classList.remove('hidden');
        el.classList.add('entering');
        setTimeout(() => el.classList.remove('entering'), 400);
      } else {
        el.classList.add('hidden');
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ── Boot ──────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  return { start, submit, showSubmitPopup, hideSubmitPopup, confirmSubmit, reviewAnswers, backToResults, newTest, goHome };
})();
