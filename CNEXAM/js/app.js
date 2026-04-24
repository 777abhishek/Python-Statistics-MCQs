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
  let hideAnswersOnSelect = false;
  let testElapsed    = 0;

  function setHideAnswers(value) {
    hideAnswersOnSelect = Boolean(value);
  }

  function normalizeText(value) {
    if (typeof value !== 'string') return value;
    return value.trim().replace(/\s+/g, ' ');
  }

  // ── Init ──────────────────────────────────────────
  function init() {
    const { questions, errors } = DataLoader.load();
    if (errors.length) console.warn('Data load warnings:', errors);
    allQuestions = questions;

    renderHomeStats();
    bindQuickLaunch();
  }

  function renderHomeStats() {
    const stats = DataLoader.getStats(allQuestions);
    const total = allQuestions.length;

    // Update header badge
    const badge = document.getElementById('totalBadge');
    if (badge) badge.textContent = `${total} Qs`;

    // Update hero stat
    const heroStats = document.getElementById('heroStats');
    if (heroStats) {
      const firstStat = heroStats.querySelector('.hero-stat-val');
      if (firstStat) firstStat.textContent = total;
    }

    // Update per-card counts
    const countMap = {
      'pyqs-count':     stats['PYQS']      || 0,
      'pyq2019-count':  stats['PYQ2019']   || 0,
      'pyq2019s2-count':stats['PYQ2019S2'] || 0,
      'nptelcn-count':  stats['NPTELCN']   || 0,
      'cnip-count':     stats['CNIP']      || 0,
      'mock-count':     stats['MOCK']      || 0,
      'all-count':      total,
    };

    Object.entries(countMap).forEach(([id, n]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = `${n} Questions`;
    });
  }

  function bindQuickLaunch() {
    // Count buttons
    document.querySelectorAll('.ql-btn').forEach(btn => {
      btn.classList.remove('active');
      if (parseInt(btn.dataset.count) === selectedCount) btn.classList.add('active');

      btn.addEventListener('click', () => {
        document.querySelectorAll('.ql-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCount = parseInt(btn.dataset.count);
      });
    });

    // Source filter buttons
    document.querySelectorAll('.ql-source-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.ql-source-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSource = btn.dataset.source;
      });
    });
  }

  // ── Start from card click ─────────────────────────
  function startFromCard(source, count) {
    // Handle week-specific sources like 'CNIP-W7'
    if (source.startsWith('CNIP-')) {
      const week = source.replace('CNIP-', ''); // e.g. 'W7'
      const pool = allQuestions.filter(q =>
        q.rawSource === 'CNIP' && q.rawId.startsWith(week)
      );
      _launchTest(pool, count);
    } else {
      selectedSource = source;
      selectedCount = count;
      start();
    }
  }

  // ── Start test ────────────────────────────────────
  function start() {
    const pool    = DataLoader.filter(allQuestions, selectedSource);
    _launchTest(pool, selectedCount);
  }

  function _launchTest(pool, count) {
    testQuestions = DataLoader.sample(pool, count);
    userAnswers   = {};

    if (testQuestions.length === 0) {
      alert('No questions available for the selected filter.');
      return;
    }

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
      const card = QuestionCard.create(q, i, onAnswer, hideAnswersOnSelect);
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
    const answered  = Object.keys(userAnswers).length;
    const total     = testQuestions.length;
    const remaining = total - answered;
    const progress  = Math.round((answered / total) * 100);

    const statsHtml = remaining > 0 ? `
      <div class="popup-stat answered">
        <div class="popup-stat-value">${answered}</div>
        <div class="popup-stat-label">Answered</div>
      </div>
      <div class="popup-stat remaining">
        <div class="popup-stat-value">${remaining}</div>
        <div class="popup-stat-label">Remaining</div>
      </div>
    ` : `
      <div class="popup-stat answered">
        <div class="popup-stat-value">${answered}</div>
        <div class="popup-stat-label">All Answered</div>
      </div>
    `;

    document.getElementById('popupAnswered').textContent = answered;
    document.getElementById('popupTotal').textContent = total;
    document.getElementById('popupProgress').style.width = `${progress}%`;
    document.getElementById('popupStats').innerHTML = statsHtml;

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

    testQuestions.forEach((q, i) => {
      if (!(i in userAnswers)) {
        const card = document.getElementById(`qcard-${i}`);
        if (card) QuestionCard.reveal(card, q, i, null);
      }
    });

    showResults();
  }

  // Results
  function showResults() {
    let correct = 0, incorrect = 0, skipped = 0;

    testQuestions.forEach((q, i) => {
      if (!(i in userAnswers)) {
        skipped++;
        return;
      }
      const userAnswer = userAnswers[i];
      const expected = normalizeText(q.correctAnswer);
      const actual = normalizeText(userAnswer);
      if (actual === expected) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = testQuestions.length;
    const pct = Math.round((correct / total) * 100);
    const answered = correct + incorrect;

    // Calculate performance metrics
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const avgTimePerQuestion = answered > 0 ? Math.round(testElapsed / answered) : 0;

    // Update subtitle based on performance
    let subtitle = '';
    if (pct >= 80) {
      subtitle = 'Outstanding performance! You\'ve mastered this material.';
    } else if (pct >= 60) {
      subtitle = 'Good job! Review the incorrect answers to improve further.';
    } else if (pct >= 40) {
      subtitle = 'Keep practicing. Focus on understanding the concepts better.';
    } else {
      subtitle = 'Don\'t give up! Review the material and try again.';
    }

    document.getElementById('resCorrect').textContent   = correct;
    document.getElementById('resIncorrect').textContent = incorrect;
    document.getElementById('resSkipped').textContent   = skipped;
    document.getElementById('resTime').textContent      = Timer.formatFriendly(testElapsed);
    document.getElementById('scorePct').textContent      = `${pct}%`;
    document.getElementById('resultsTitle').textContent =
      pct >= 80 ? 'Excellent Work!' :
      pct >= 60 ? 'Good Job!' :
      pct >= 40 ? 'Keep Practicing' : 'Keep Going!';
    document.getElementById('resultsSubtitle').textContent = subtitle;
    document.getElementById('perfAccuracy').textContent = `${accuracy}%`;
    document.getElementById('perfAvgTime').textContent = avgTimePerQuestion > 60 ? `${Math.floor(avgTimePerQuestion / 60)}m ${avgTimePerQuestion % 60}s` : `${avgTimePerQuestion}s`;

    const badge = document.getElementById('resultsBadge');
    badge.textContent = pct >= 60 ? 'PASSED' : 'NEEDS WORK';
    badge.className   = `results-badge ${pct >= 80 ? 'great' : pct >= 60 ? 'pass' : 'fail'}`;

    const ring = document.getElementById('ringFill');
    const circumference = 502;
    ring.style.strokeDashoffset = circumference - (pct / 100) * circumference;
    ring.className = `ring-fill ${pct >= 80 ? 'correct-great' : pct >= 60 ? 'correct-pass' : 'incorrect-fail'}`;

    showScreen('resultsScreen');
  }

  // Review
  function reviewAnswers() {
    Review.init(testQuestions, userAnswers);
    showScreen('reviewScreen');
    Review.render();
  }

  function backToResults() { showScreen('resultsScreen'); }

  // ── New test ──────────────────────────────────────
  function newTest() {
    Timer.reset();
    showScreen('homeScreen');
  }

  // ── Go Home ───────────────────────────────────────
  function goHome() {
    if (confirm('Are you sure you want to leave? Your progress will be lost.')) {
      Timer.reset();
      showScreen('homeScreen');
    }
  }

  // ── Screen management ─────────────────────────────
  function showScreen(id) {
    const screens = ['homeScreen', 'testScreen', 'resultsScreen', 'reviewScreen'];
    screens.forEach(s => {
      const el = document.getElementById(s);
      if (!el) return;
      if (s === id) {
        el.classList.remove('hidden');
        el.classList.add('entering');
        setTimeout(() => el.classList.remove('entering'), 400);
      } else {
        el.classList.add('hidden');
      }
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // ── Boot ──────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  return { start, startFromCard, submit, showSubmitPopup, hideSubmitPopup, confirmSubmit, reviewAnswers, backToResults, newTest, goHome, setHideAnswers };
})();
