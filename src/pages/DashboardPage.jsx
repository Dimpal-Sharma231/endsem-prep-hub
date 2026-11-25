import React from 'react';
import { Sparkles, CheckCircle2, BookOpenCheck, Flame } from 'lucide-react';
import subjectsData from '../data';
import SubjectCard from '../components/SubjectCard';
import ProgressBar from '../components/ProgressBar';

/**
 * Home Dashboard landing page displaying overall exam readiness
 * and cards for all 5 subjects.
 */
export default function DashboardPage({ getSubjectStats, getOverallStats }) {
  const overall = getOverallStats(subjectsData);
  const completedSubjectsCount = subjectsData.filter((sub) => {
    const s = getSubjectStats(sub);
    return s.total > 0 && s.completed === s.total;
  }).length;

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/90 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/60">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              SPPU End-Sem Preparation Tracker
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Master Your 5 Subjects,{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-emerald-400 bg-clip-text text-transparent">
                Unit by Unit.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Check off important exam questions as you revise. Your progress is
              automatically saved locally so you can pick up right where you
              left off.
            </p>
          </div>

          {/* Quick Stats Pill Panel */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3.5 text-center dark:border-slate-800 dark:bg-slate-950/70">
              <BookOpenCheck className="mx-auto h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              <div className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {subjectsData.length}
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Subjects
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3.5 text-center dark:border-slate-800 dark:bg-slate-950/70">
              <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-500 dark:text-emerald-400" />
              <div className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {overall.completed}
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Done
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3.5 text-center dark:border-slate-800 dark:bg-slate-950/70">
              <Flame className="mx-auto h-5 w-5 text-amber-500 dark:text-amber-400" />
              <div className="mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {completedSubjectsCount}/5
              </div>
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Mastered
              </div>
            </div>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="relative mt-6 border-t border-slate-200/80 pt-5 dark:border-slate-800/80">
          <ProgressBar
            completed={overall.completed}
            total={overall.total}
            size="lg"
            labelSuffix="Total Questions Completed Across All Subjects"
          />
        </div>
      </section>

      {/* Subject Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Your Exam Subjects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Select a subject to browse all 5 units and track important questions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {subjectsData.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              stats={getSubjectStats(subject)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
