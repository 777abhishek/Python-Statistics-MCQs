/**
 * data-loader.js
 * Normalizes all question sources into a unified format.
 * Does NOT modify the original data files.
 */
const DataLoader = (() => {

  /** Normalize a single question from any source */
  function normalize(q, source) {
    // Options: support both array and object formats
    let options;
    if (Array.isArray(q.options)) {
      options = q.options;
    } else {
      options = Object.values(q.options);
    }

    // Correct answer: support both string value and key (a/b/c/d)
    let correctAnswer;
    if (!Array.isArray(q.options) && q.correct_answer && q.correct_answer.length === 1) {
      // It's a key like 'a', 'b', 'c', 'd'
      correctAnswer = q.options[q.correct_answer];
    } else if (q.answer) {
      correctAnswer = q.answer;
    } else if (q.correct_answer) {
      correctAnswer = q.correct_answer;
    }

    return {
      id:            `${source}-${q.id}`,
      question:      q.question,
      options,
      correctAnswer,
      explanation:   q.explanation || '',
      topic:         q.topic       || '',
      paper:         q.paper       || '',
      source,
    };
  }

  function load() {
    const all = [];
    const errors = [];

    const sources = [
      { key: 'PYQS',       data: typeof PYQS_DATA       !== 'undefined' ? PYQS_DATA       : null },
      { key: 'PYQ2019',    data: typeof PYQ2019_DATA    !== 'undefined' ? PYQ2019_DATA    : null },
      { key: 'PYQ2019S2',  data: typeof PYQ2019S2_DATA  !== 'undefined' ? PYQ2019S2_DATA  : null },
      { key: 'CNIP',       data: typeof CNIP_DATA       !== 'undefined' ? CNIP_DATA       : null },
      { key: 'NPTELCN',    data: typeof NPTEL_CN_DATA    !== 'undefined' ? NPTEL_CN_DATA    : null },
    ];

    sources.forEach(({ key, data }) => {
      if (!data) {
        errors.push(`${key}: data not found`);
        return;
      }
      data.forEach(q => {
        try {
          all.push(normalize(q, key));
        } catch (e) {
          errors.push(`${key}[${q.id}]: ${e.message}`);
        }
      });
    });

    return { questions: all, errors };
  }

  /** Get counts per source */
  function getStats(questions) {
    const counts = {};
    questions.forEach(q => {
      counts[q.source] = (counts[q.source] || 0) + 1;
    });
    return counts;
  }

  /** Filter by source (or 'all') */
  function filter(questions, source) {
    if (!source || source === 'all') return [...questions];
    return questions.filter(q => q.source === source);
  }

  /** Shuffle and pick N questions */
  function sample(questions, n) {
    const arr = [...questions].sort(() => Math.random() - 0.5);
    return arr.slice(0, Math.min(n, arr.length));
  }

  return { load, getStats, filter, sample };
})();
