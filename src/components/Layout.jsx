import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  GraduationCap,
  LayoutDashboard,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import subjectsData from '../data';
import { getSubjectIcon, getAccentStyle } from '../utils/subjectIcons';
import SearchBar from './SearchBar';
import ProgressBar from './ProgressBar';

/**
 * Responsive application shell with top navigation bar, collapsible mobile drawer,
 * persistent desktop subject sidebar, global search, and dark/light theme toggle.
 */
export default function Layout({
  children,
  isDark,
  toggleTheme,
  isCompleted,
  getSubjectStats,
  getOverallStats,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const overall = getOverallStats(subjectsData);

  const SidebarContent = () => (
    <div className="flex h-full flex-col justify-between p-4">
      <div className="space-y-6">
        {/* Main Navigation */}
        <div>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Overview
          </p>
          <nav className="mt-2 space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-500/15 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                }`
              }
            >
              <LayoutDashboard className="h-4 w-4 shrink-0" />
              <span>Subject Dashboard</span>
            </NavLink>
          </nav>
        </div>

        {/* 5 Subjects List */}
        <div>
          <p className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Subjects (5)
          </p>
          <nav className="mt-2 space-y-1.5">
            {subjectsData.map((subject) => {
              const Icon = getSubjectIcon(subject.icon);
              const accent = getAccentStyle(subject.accent);
              const stats = getSubjectStats(subject);

              return (
                <NavLink
                  key={subject.id}
                  to={`/subject/${subject.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-500/15 text-indigo-700 ring-1 ring-indigo-500/30 dark:bg-indigo-500/15 dark:text-white'
                        : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/70'
                    }`
                  }
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${accent.iconBg}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="truncate">{subject.shortName}</span>
                  </div>

                  <span
                    className={`shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-semibold tabular-nums ${
                      stats.completed === stats.total && stats.total > 0
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                    }`}
                  >
                    {stats.completed}/{stats.total}
                  </span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Overall Progress Summary Card */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/90">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="h-3.5 w-3.5" />
          Overall Readiness
        </div>
        <ProgressBar
          completed={overall.completed}
          total={overall.total}
          size="sm"
          labelSuffix="Total Done"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          {/* Left: Hamburger + Brand */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 lg:hidden dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-slate-950 shadow-md shadow-indigo-500/20">
                <GraduationCap className="h-5 w-5 stroke-[2.2]" />
              </div>
              <div className="hidden sm:block">
                <span className="block text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                  EndSem Prep Hub
                </span>
                <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  SPPU Exam Tracker
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Global Search */}
          <div className="flex flex-1 justify-center px-1 sm:px-4">
            <SearchBar isCompleted={isCompleted} />
          </div>

          {/* Right: Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/70 text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-amber-300 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Main Body: Desktop Sidebar + Content */}
      <div className="mx-auto flex max-w-7xl">
        {/* Desktop Persistent Sidebar */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-slate-200/80 bg-white/50 lg:block dark:border-slate-800/80 dark:bg-slate-950/60">
          <SidebarContent />
        </aside>

        {/* Mobile Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <aside className="relative z-10 flex h-full w-72 max-w-[85vw] flex-col overflow-y-auto border-r border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white">
                  EndSem Prep Hub
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1">
                <SidebarContent />
              </div>
            </aside>
          </div>
        )}

        {/* Main Page Content */}
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
