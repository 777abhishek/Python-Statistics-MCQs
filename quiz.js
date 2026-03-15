/* ═══════════════════════════════════════════════
   PYTHON STATISTICS EXAM — SHARED QUIZ ENGINE
   ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── State ──
  let state   = {};   // qId → chosen index or null
  let correct = 0;
  let wrong   = 0;
  let answered = 0;
  let total   = 0;

  // ── Init ──
  function init() {
    let cards = document.querySelectorAll('.q-card[data-id]');
    
    // Shuffle questions logic
    const mainWrap = document.querySelector('.main-wrap');
    if (mainWrap && cards.length > 0) {
      // Hide section headers since questions will be mixed
      document.querySelectorAll('.section-header').forEach(h => h.style.display = 'none');
      
      const cardsArray = Array.from(cards);
      // Fisher-Yates shuffle
      for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
      }
      
      // Re-append in mixed order and update Q numbers
      cardsArray.forEach((card, index) => {
        const qNum = card.querySelector('.q-num');
        if (qNum) qNum.textContent = 'Q' + (index + 1);
        mainWrap.appendChild(card);
      });
      
      // Re-select cards in the new DOM order for consistency if needed
      cards = document.querySelectorAll('.q-card[data-id]');
    }

    total = cards.length;
    cards.forEach(card => {
      state[card.dataset.id] = null;
    });
    updateHUD();

    // Submit button
    document.getElementById('btn-submit')?.addEventListener('click', submitExam);
    // Restart
    document.getElementById('btn-restart')?.addEventListener('click', restartExam);
  }

  // ── Answer Selection ──
  window.pickAnswer = function (qId, chosen) {
    if (state[qId] !== null) return; // already answered

    const card       = document.getElementById('qcard-' + qId);
    const correctIdx = parseInt(card.dataset.correct, 10);
    const btns       = card.querySelectorAll('.opt');
    const expEl      = card.querySelector('.explanation');

    state[qId] = chosen;

    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === correctIdx) btn.classList.add('is-correct');
      if (i === chosen && chosen !== correctIdx) btn.classList.add('is-wrong');
    });

    expEl.classList.add('visible');

    if (chosen === correctIdx) {
      card.classList.add('state-correct');
      correct++;
    } else {
      card.classList.add('state-wrong');
      wrong++;
    }
    answered++;
    updateHUD();
  };

  // ── HUD ──
  function updateHUD() {
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    setEl('hud-correct', correct);
    setEl('hud-wrong',   wrong);
    setEl('hud-left',    total - answered);
    setEl('hud-done',    answered + '/' + total);
    setEl('hud-pct',     (answered > 0 ? pct + '%' : '—'));

    const fill = document.getElementById('hud-fill');
    if (fill) fill.style.width = ((answered / total) * 100) + '%';
  }

  // ── Submit ──
  function submitExam() {
    const skipped = total - answered;
    const pct     = Math.round((correct / total) * 100);

    setEl('res-correct', correct);
    setEl('res-wrong',   wrong);
    setEl('res-skip',    skipped);
    setEl('res-pct',     pct + '%');

    const scoreEl = document.getElementById('res-score-num');
    if (scoreEl) scoreEl.textContent = correct + '/' + total;

    const scoreColor = document.getElementById('res-score-pct');
    if (scoreColor) {
      scoreColor.textContent = pct + '%';
      scoreColor.style.color = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';
    }

    let emoji, title, msg;
    if      (pct >= 90) { emoji = '🏆'; title = 'Outstanding!';   msg = 'Exceptional performance. You are fully exam-ready!'; }
    else if (pct >= 75) { emoji = '🎯'; title = 'Great Job!';      msg = 'Strong result! Review wrong answers before exam.'; }
    else if (pct >= 60) { emoji = '📚'; title = 'Good Effort!';    msg = 'Decent base — focus on weaker topics and retry.'; }
    else if (pct >= 40) { emoji = '💪'; title = 'Keep Going!';     msg = 'Revise core concepts. You can score much higher!'; }
    else                { emoji = '😤'; title = 'Start Over!';     msg = 'Go back to notes, revise every topic, then retry.'; }

    setEl('res-emoji', emoji);
    setEl('res-title', title);
    setEl('res-message', msg);

    document.getElementById('result-modal')?.classList.add('open');
  }

  // ── Restart ──
  function restartExam() {
    document.getElementById('result-modal')?.classList.remove('open');
    // Reset state
    state = {}; correct = 0; wrong = 0; answered = 0;
    document.querySelectorAll('.q-card[data-id]').forEach(card => {
      state[card.dataset.id] = null;
      card.classList.remove('state-correct', 'state-wrong');
      card.querySelectorAll('.opt').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('is-correct', 'is-wrong');
      });
      card.querySelectorAll('.explanation').forEach(e => e.classList.remove('visible'));
    });
    updateHUD();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Util ──
  function setEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // ── Boot ──
  document.addEventListener('DOMContentLoaded', init);
})();
