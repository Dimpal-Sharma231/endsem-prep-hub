import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, CheckCircle2, ArrowRight } from 'lucide-react';
import subjectsData from '../data';
import { getAccentStyle } from '../utils/subjectIcons';

/**
 * Global search bar across all subjects, units, syllabus topics, and questions.
 */
export default function SearchBar({ isCompleted }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Keyboard shortcut: Ctrl+K or Cmd+K to focus search, Esc to close
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) return [];

    const matches = [];
    for (const subject of subjectsData) {
      for (const unit of subject.units) {
        const unitMatch =
          unit.name.toLowerCase().includes(trimmed) ||
          (unit.topics && unit.topics.toLowerCase().includes(trimmed));

        unit.questions.forEach((item, qIdx) => {
          const questionText =
            typeof item === 'string' ? item : item?.question ?? '';
          const answerText =
            typeof item === 'string' ? '' : item?.answer ?? '';

          if (
            questionText.toLowerCase().includes(trimmed) ||
            answerText.toLowerCase().includes(trimmed) ||
            (unitMatch && qIdx === 0)
          ) {
            matches.push({
              subject,
              unit,
              question: questionText,
              qIdx,
              done: isCompleted(subject.id, unit.id, qIdx),
            });
          }
        });
      }
    }
    return matches.slice(0, 14);
  }, [query, isCompleted]);

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/subject/${item.subject.id}/unit/${item.unit.id}?q=${item.qIdx}`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search questions or topics (Ctrl+K)..."
          aria-label="Search questions or topics across all subjects"
          className="w-full rounded-xl border border-slate-200 bg-slate-100/80 py-2 pl-9 pr-9 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-indigo-500 dark:focus:bg-slate-900"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label="Clear search"
            className="absolute right-2.5 rounded-md p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.trim().length >= 2 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              No matching questions or topics found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Top Matches ({results.length})
              </div>
              {results.map((item) => {
                const accent = getAccentStyle(item.subject.accent);
                return (
                  <button
                    key={`${item.subject.id}-${item.unit.id}-${item.qIdx}`}
                    type="button"
                    onClick={() => handleSelect(item)}
                    className="flex w-full items-start gap-3 rounded-xl p-2.5 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800/80"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${accent.badge}`}
                        >
                          {item.subject.shortName}
                        </span>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {item.unit.name} · Q{item.qIdx + 1}
                        </span>
                        {item.done && (
                          <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-emerald-500">
                            <CheckCircle2 className="h-3 w-3" />
                            Done
                          </span>
                        )}
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100">
                        {item.question}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
