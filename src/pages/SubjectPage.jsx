import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  RotateCcw,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import subjectsData from '../data';
import ProgressBar from '../components/ProgressBar';
import UnitAccordion from '../components/UnitAccordion';
import { getSubjectIcon, getAccentStyle } from '../utils/subjectIcons';

/**
 * Subject Detail Page showing overall subject progress bar, quick unit pills,
 * and all 5 Units (Unit 1 to Unit 5) with interactive question checklists.
 */
export default function SubjectPage({
  isCompleted,
  onToggleQuestion,
  onToggleUnitAll,
  onResetSubject,
  getUnitStats,
  getSubjectStats,
}) {
  const { subjectId } = useParams();
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'pending' | 'done'

  const subject = subjectsData.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          Subject Not Found
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          The subject you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const Icon = getSubjectIcon(subject.icon);
  const accent = getAccentStyle(subject.accent);
  const stats = getSubjectStats(subject);

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
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
        <span className="font-semibold text-slate-900 dark:text-white">
          {subject.name}
        </span>
      </nav>

      {/* Subject Header & Dynamic Progress Bar */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/85">
        <div
          className={`pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gradient-to-br ${accent.glow} blur-3xl`}
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accent.iconBg}`}
            >
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}
              >
                {subject.units.length} Units · {stats.total} Questions
              </span>
              <h1 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {subject.name}
              </h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {subject.description}
              </p>
            </div>
          </div>

          {stats.completed > 0 && (
            <button
              type="button"
              onClick={() => onResetSubject(subject.id)}
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-500 dark:border-slate-700 dark:text-slate-300"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset Subject Progress
            </button>
          )}
        </div>

        {/* Dynamic Progress Bar */}
        <div className="relative mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
          <ProgressBar
            completed={stats.completed}
            total={stats.total}
            size="lg"
            barClass={accent.bar}
          />
        </div>

        {/* Quick Unit Navigation Pills */}
        <div className="relative mt-5 flex flex-wrap gap-2">
          {subject.units.map((unit) => {
            const uStats = getUnitStats(subject.id, unit);
            const unitDone = uStats.total > 0 && uStats.completed === uStats.total;
            return (
              <Link
                key={unit.id}
                to={`/subject/${subject.id}/unit/${unit.id}`}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5 ${
                  unitDone
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-500/40 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 dark:hover:text-indigo-400'
                }`}
              >
                {unitDone ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <BookOpen className="h-3.5 w-3.5 text-indigo-400" />
                )}
                <span>{unit.id.toUpperCase()}</span>
                <span className="opacity-70">
                  ({uStats.completed}/{uStats.total})
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Unit-Wise Question Bank
        </h2>

        <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900">
          {[
            { id: 'all', label: 'All Units' },
            { id: 'pending', label: 'In Progress' },
            { id: 'done', label: 'Completed' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterMode(tab.id)}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                filterMode === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 5 Unit Accordions */}
      <div className="space-y-4">
        {subject.units
          .filter((unit) => {
            const uStats = getUnitStats(subject.id, unit);
            if (filterMode === 'done') return uStats.completed === uStats.total;
            if (filterMode === 'pending') return uStats.completed < uStats.total;
            return true;
          })
          .map((unit, idx) => (
            <UnitAccordion
              key={unit.id}
              subject={subject}
              unit={unit}
              stats={getUnitStats(subject.id, unit)}
              isCompleted={isCompleted}
              onToggleQuestion={onToggleQuestion}
              onToggleUnitAll={onToggleUnitAll}
              defaultExpanded={idx === 0}
            />
          ))}
      </div>
    </div>
  );
}
