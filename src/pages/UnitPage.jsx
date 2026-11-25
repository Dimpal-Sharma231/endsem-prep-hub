import React, { useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCheck,
  RotateCcw,
} from 'lucide-react';
import subjectsData from '../data';
import ProgressBar from '../components/ProgressBar';
import QuestionItem from '../components/QuestionItem';
import { getAccentStyle } from '../utils/subjectIcons';

/**
 * Dedicated Unit Study Page (Home -> Subject -> Unit) with full question checklist,
 * unit syllabus topics, search highlight support, and Prev/Next Unit navigation.
 */
export default function UnitPage({
  isCompleted,
  onToggleQuestion,
  onToggleUnitAll,
  getUnitStats,
}) {
  const { subjectId, unitId } = useParams();
  const [searchParams] = useSearchParams();
  const highlightedQ = searchParams.get('q');
  const highlightedIndex = highlightedQ !== null ? Number(highlightedQ) : null;

  const subject = subjectsData.find((s) => s.id === subjectId);
  const unitIndex = subject ? subject.units.findIndex((u) => u.id === unitId) : -1;
  const unit = subject && unitIndex >= 0 ? subject.units[unitIndex] : null;

  // Scroll to highlighted question when arriving from global search
  useEffect(() => {
    if (highlightedIndex !== null && !Number.isNaN(highlightedIndex)) {
      const el = document.getElementById(`question-${highlightedIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [subjectId, unitId, highlightedIndex]);

  if (!subject || !unit) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          Unit Not Found
        </h1>
        <Link
          to={subject ? `/subject/${subject.id}` : '/'}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const accent = getAccentStyle(subject.accent);
  const stats = getUnitStats(subject.id, unit);
  const allDone = stats.total > 0 && stats.completed === stats.total;
  const prevUnit = unitIndex > 0 ? subject.units[unitIndex - 1] : null;
  const nextUnit =
    unitIndex < subject.units.length - 1 ? subject.units[unitIndex + 1] : null;

  return (
    <div className="space-y-6">
      {/* Breadcrumb: Home -> Subject -> Unit */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1 font-medium hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          <Home className="h-3.5 w-3.5" />
          Dashboard
        </Link>
        <ChevronRight className="h-4 w-4 text-slate-400" />
        <Link
          to={`/subject/${subject.id}`}
          className="font-medium hover:text-indigo-500 dark:hover:text-indigo-400"
        >
          {subject.shortName}
        </Link>
        <ChevronRight className="h-4 w-4 text-slate-400" />
        <span className="font-semibold text-slate-900 dark:text-white">
          {unit.name}
        </span>
      </nav>

      {/* Unit Header Card */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/85">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={`/subject/${subject.id}`}
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All Units
              </Link>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}
              >
                {subject.name}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {unit.name}
            </h1>

            {unit.topics && (
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Syllabus Topics:{' '}
                </span>
                {unit.topics}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() =>
              onToggleUnitAll(subject.id, unit.id, unit.questions.length, !allDone)
            }
            className={`inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors ${
              allDone
                ? 'border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
                : 'border-emerald-500/40 bg-emerald-500/15 text-emerald-700 hover:bg-emerald-500/25 dark:text-emerald-400'
            }`}
          >
            {allDone ? (
              <>
                <RotateCcw className="h-3.5 w-3.5" />
                Reset Unit
              </>
            ) : (
              <>
                <CheckCheck className="h-3.5 w-3.5" />
                Mark All Done
              </>
            )}
          </button>
        </div>

        <div className="mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
          <ProgressBar
            completed={stats.completed}
            total={stats.total}
            size="lg"
            barClass={accent.bar}
          />
        </div>
      </section>

      {/* Questions Checklist */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
            Important Questions ({unit.questions.length})
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Click a card for answer · Checkbox to mark Done
          </span>
        </div>

        <div className="space-y-3">
          {unit.questions.map((question, idx) => (
            <QuestionItem
              key={idx}
              index={idx}
              question={question}
              isChecked={isCompleted(subject.id, unit.id, idx)}
              isHighlighted={highlightedIndex === idx}
              onToggle={() => onToggleQuestion(subject.id, unit.id, idx)}
            />
          ))}
        </div>
      </section>

      {/* Prev / Next Unit Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
        {prevUnit ? (
          <Link
            to={`/subject/${subject.id}/unit/${prevUnit.id}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-indigo-500/40 hover:text-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span className="truncate">{prevUnit.name}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextUnit && (
          <Link
            to={`/subject/${subject.id}/unit/${nextUnit.id}`}
            className="inline-flex items-center justify-end gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
          >
            <span className="truncate">{nextUnit.name}</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
