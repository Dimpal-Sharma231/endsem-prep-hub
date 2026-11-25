import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ArrowUpRight,
  CheckCheck,
  RotateCcw,
  BookOpen,
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import QuestionItem from './QuestionItem';
import { getAccentStyle } from '../utils/subjectIcons';

/**
 * Expandable Unit accordion showing unit progress, syllabus topics,
 * quick "Mark All Done" action, and the list of important questions.
 */
export default function UnitAccordion({
  subject,
  unit,
  stats,
  isCompleted,
  onToggleQuestion,
  onToggleUnitAll,
  defaultExpanded = false,
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const accent = getAccentStyle(subject.accent);
  const allDone = stats.total > 0 && stats.completed === stats.total;

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800/90 dark:bg-slate-900/75">
      {/* Accordion Header */}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="flex flex-1 items-start gap-3 text-left focus:outline-none"
          >
            <span
              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${accent.iconBg}`}
            >
              {unit.id.toUpperCase()}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                {unit.name}
              </h3>
              {unit.topics && (
                <p className="mt-1 line-clamp-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Syllabus:
                  </span>{' '}
                  {unit.topics}
                </p>
              )}
            </div>
            <ChevronDown
              className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                expanded ? 'rotate-180 text-indigo-400' : ''
              }`}
            />
          </button>
        </div>

        {/* Progress + Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="flex-1 max-w-md">
            <ProgressBar
              completed={stats.completed}
              total={stats.total}
              size="sm"
              barClass={accent.bar}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleUnitAll(subject.id, unit.id, unit.questions.length, !allDone)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                allDone
                  ? 'border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
                  : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-400'
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

            <Link
              to={`/subject/${subject.id}/unit/${unit.id}`}
              className="inline-flex items-center gap-1 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-500/20 dark:text-indigo-400"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Open Unit Page
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Expandable Questions List */}
      {expanded && (
        <div className="border-t border-slate-200 bg-slate-50/70 p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/40">
          <div className="space-y-3">
            {unit.questions.map((question, idx) => (
              <QuestionItem
                key={idx}
                index={idx}
                question={question}
                isChecked={isCompleted(subject.id, unit.id, idx)}
                onToggle={() => onToggleQuestion(subject.id, unit.id, idx)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
