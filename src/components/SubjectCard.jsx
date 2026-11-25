import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, HelpCircle } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { getSubjectIcon, getAccentStyle } from '../utils/subjectIcons';

/**
 * Dashboard card representing one of the 5 exam subjects.
 */
export default function SubjectCard({ subject, stats }) {
  const Icon = getSubjectIcon(subject.icon);
  const accent = getAccentStyle(subject.accent);

  return (
    <Link
      to={`/subject/${subject.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/90 dark:bg-slate-900/80 ${accent.ring}`}
    >
      {/* Subtle top-right ambient gradient */}
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${accent.glow} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60`}
      />

      <div>
        <div className="flex items-start justify-between gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${accent.iconBg}`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${accent.badge}`}
          >
            {subject.shortName}
          </span>
        </div>

        <h2 className="mt-4 text-lg font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
          {subject.name}
        </h2>

        <p className="mt-1.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
          {subject.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            {subject.units.length} Units
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-emerald-400" />
            {stats.total} Questions
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
        <ProgressBar
          completed={stats.completed}
          total={stats.total}
          size="md"
          barClass={accent.bar}
        />

        <div className="flex items-center justify-between text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          <span>{stats.completed > 0 ? 'Continue Studying' : 'Start Studying'}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
