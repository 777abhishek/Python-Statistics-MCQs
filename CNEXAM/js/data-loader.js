/**
 * data-loader.js
 * Normalizes all question sources into a unified format.
 * Does NOT modify the original data files.
 */
const DataLoader = (() => {

  /** Normalize a single question from any source */
  function normalizeKeyToIndex(key) {
    const map = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5 };
    if (!key || typeof key !== 'string') return undefined;
    return map[key.toLowerCase()];
  }

  function normalize(q, source) {
    // Options: support both array and object formats
    let options;
    if (Array.isArray(q.options)) {
      options = q.options;
    } else if (q.options && typeof q.options === 'object') {
      options = Object.values(q.options);
    } else {
      throw new Error('Options must be an array or object');
    }

    // Correct answer: support both string value and key (a/b/c/d)
    let correctAnswer;
    const keyIndex = q.correct_answer ? normalizeKeyToIndex(q.correct_answer) : undefined;
    if (keyIndex !== undefined && options[keyIndex] !== undefined) {
      correctAnswer = options[keyIndex];
    } else if (q.answer) {
      correctAnswer = q.answer;
    } else if (q.correct_answer) {
      correctAnswer = q.correct_answer;
    }

    if (typeof correctAnswer === 'string') {
      correctAnswer = correctAnswer.trim();
    }
    if (!correctAnswer) {
      throw new Error('Missing or invalid correct answer');
    }

    const isAssignment = String(q.id).startsWith('W');

    return {
      id:            `${source}-${q.id}`,
      rawId:         String(q.id),
      rawSource:     source,
      question:      q.question,
      options,
      correctAnswer,
      explanation:   q.explanation || '',
      topic:         q.topic       || '',
      paper:         q.paper       || '',
      isAssignment,
      source:        source === 'CNIP' ? 'Jan 2026 course' : source,
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
      { key: 'MOCK',       data: typeof MOCK_DATA       !== 'undefined' ? MOCK_DATA       : null },
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

  /** Get counts per source (uses rawSource key for matching) */
  function getStats(questions) {
    const counts = {};
    questions.forEach(q => {
      const key = q.rawSource || q.source;
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }

  /** Filter by source (or 'all') */
  function filter(questions, source) {
    if (!source || source === 'all') return [...questions];
    return questions.filter(q => q.rawSource === source);
  }

  /** Pick N questions, optionally shuffle */
  function sample(questions, n, shuffle = true) {
    let arr = [...questions];
    if (shuffle) {
      arr.sort(() => Math.random() - 0.5);
    }
    return arr.slice(0, Math.min(n, arr.length));
  }

  return { load, getStats, filter, sample };
})();
