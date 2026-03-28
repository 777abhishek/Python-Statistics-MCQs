/**
 * review.js
 * Manages the answer review screen.
 */
const Review = (() => {
  let _questions   = [];
  let _userAnswers = {};

  function init(questions, userAnswers) {
    _questions   = questions;
    _userAnswers = userAnswers;
  }

  function render() {
    const container = document.getElementById('reviewContainer');
    container.innerHTML = '';

    _questions.forEach((q, index) => {
      const card = QuestionCard.createReview(q, index, _userAnswers[index]);
      container.appendChild(card);
    });
  }

  function filter(type, btn) {
    // Update active button
    document.querySelectorAll('.rfilt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('#reviewContainer .q-card');
    cards.forEach(card => {
      const status = card.dataset.status;
      if (type === 'all') {
        card.style.display = '';
      } else if (type === 'wrong') {
        card.style.display = status === 'wrong' ? '' : 'none';
      } else if (type === 'skipped') {
        card.style.display = status === 'skipped' ? '' : 'none';
      }
    });
  }

  return { init, render, filter };
})();
