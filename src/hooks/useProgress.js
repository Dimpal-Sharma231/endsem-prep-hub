import { useState, useEffect, useCallback } from 'react';

const PROGRESS_STORAGE_KEY = 'endsem-prep-hub-progress-v1';

/**
 * Generates a deterministic unique key for each question.
 */
export function makeQuestionKey(subjectId, unitId, questionIndex) {
  return `${subjectId}:${unitId}:${questionIndex}`;
}

/**
 * Manages interactive question checklist progress persisted in LocalStorage.
 */
export function useProgress() {
  const [completedMap, setCompletedMap] = useState(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          return parsed;
        }
      }
    } catch {
      // Fallback to empty progress if storage is corrupted or unavailable
    }
    return {};
  });

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(completedMap));
    } catch {
      // Ignore quota / private browsing write errors
    }
  }, [completedMap]);

  const isCompleted = useCallback(
    (subjectId, unitId, questionIndex) => {
      return Boolean(completedMap[makeQuestionKey(subjectId, unitId, questionIndex)]);
    },
    [completedMap]
  );

  const toggleQuestion = useCallback((subjectId, unitId, questionIndex) => {
    const key = makeQuestionKey(subjectId, unitId, questionIndex);
    setCompletedMap((prev) => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  }, []);

  const setUnitCompletion = useCallback((subjectId, unitId, questionCount, markDone) => {
    setCompletedMap((prev) => {
      const next = { ...prev };
      for (let i = 0; i < questionCount; i++) {
        const key = makeQuestionKey(subjectId, unitId, i);
        if (markDone) {
          next[key] = true;
        } else {
          delete next[key];
        }
      }
      return next;
    });
  }, []);

  const resetSubjectProgress = useCallback((subjectId) => {
    const prefix = `${subjectId}:`;
    setCompletedMap((prev) => {
      const next = {};
      for (const [key, val] of Object.entries(prev)) {
        if (!key.startsWith(prefix)) {
          next[key] = val;
        }
      }
      return next;
    });
  }, []);

  const getUnitStats = useCallback(
    (subjectId, unit) => {
      const total = unit.questions.length;
      let completed = 0;
      for (let i = 0; i < total; i++) {
        if (completedMap[makeQuestionKey(subjectId, unit.id, i)]) {
          completed += 1;
        }
      }
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, percentage };
    },
    [completedMap]
  );

  const getSubjectStats = useCallback(
    (subject) => {
      let completed = 0;
      let total = 0;
      for (const unit of subject.units) {
        const stats = getUnitStats(subject.id, unit);
        completed += stats.completed;
        total += stats.total;
      }
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, percentage };
    },
    [getUnitStats]
  );

  const getOverallStats = useCallback(
    (subjects) => {
      let completed = 0;
      let total = 0;
      for (const subject of subjects) {
        const stats = getSubjectStats(subject);
        completed += stats.completed;
        total += stats.total;
      }
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { completed, total, percentage };
    },
    [getSubjectStats]
  );

  return {
    completedMap,
    isCompleted,
    toggleQuestion,
    setUnitCompletion,
    resetSubjectProgress,
    getUnitStats,
    getSubjectStats,
    getOverallStats,
  };
}
