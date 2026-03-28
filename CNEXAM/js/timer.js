/**
 * timer.js
 * Manages the test timer display.
 */
const Timer = (() => {
  let startTime  = null;
  let intervalId = null;
  let elapsed    = 0; // seconds

  function start() {
    startTime = Date.now();
    elapsed   = 0;
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      elapsed = Math.floor((Date.now() - startTime) / 1000);
      render();
    }, 1000);
  }

  function stop() {
    clearInterval(intervalId);
    intervalId = null;
    return elapsed;
  }

  function reset() {
    stop();
    elapsed   = 0;
    startTime = null;
  }

  function getElapsed() { return elapsed; }

  function format(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function formatFriendly(secs) {
    if (secs < 60)  return `${secs}s`;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return s > 0 ? `${m}m ${s}s` : `${m}m`;
  }

  function render() {
    const el = document.getElementById('timerText');
    const wrap = document.getElementById('timerDisplay');
    if (!el || !wrap) return;

    el.textContent = format(elapsed);

    // Visual warning states
    wrap.classList.remove('warn', 'alert');
    if      (elapsed > 3600) wrap.classList.add('alert');
    else if (elapsed > 2400) wrap.classList.add('warn');
  }

  return { start, stop, reset, getElapsed, format, formatFriendly };
})();
