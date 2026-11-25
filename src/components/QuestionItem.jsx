import React, { useState, useEffect } from 'react';
import { Check, CheckCircle2, ChevronDown, BookOpenCheck } from 'lucide-react';

/**
 * Interactive expandable question card with checklist toggle.
 * - Clicking the checkbox marks the question as "Done" (with e.stopPropagation()).
 * - Clicking anywhere else on the card smoothly expands/collapses the exam-ready answer.
 */
export default function QuestionItem({
  question,
  index,
  isChecked,
  onToggle,
  isHighlighted = false,
}) {
  const [isExpanded, setIsExpanded] = useState(isHighlighted);

  useEffect(() => {
    if (isHighlighted) {
      setIsExpanded(true);
    }
  }, [isHighlighted]);

  // Support both { id, question, answer } objects and plain string fallback
  const questionText =
    typeof question === 'string' ? question : question?.question ?? '';
  const answerText =
    typeof question === 'string' ? '' : question?.answer ?? '';

  const handleToggleExpand = () => {
    const selectedText = window.getSelection?.()?.toString();
    if (selectedText && selectedText.length > 0) {
      return;
    }
    if (answerText) {
      setIsExpanded((prev) => !prev);
    }
  };

  const handleCheckboxClick = (e) => {
    e.stopPropagation();
    onToggle();
  };

  const handleCheckboxKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      onToggle();
    }
  };

  return (
    <div
      id={`question-${index}`}
      onClick={handleToggleExpand}
      role="button"
      tabIndex={0}
      aria-expanded={answerText ? isExpanded : undefined}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          handleToggleExpand();
        }
      }}
      className={`group cursor-pointer rounded-xl border p-3.5 sm:p-4 transition-all duration-200 select-none focus:outline-none focus:ring-2 focus:ring-indigo-500/60 ${
        isHighlighted
          ? 'border-indigo-500 bg-indigo-500/10 ring-2 ring-indigo-500/40 dark:bg-indigo-500/15'
          : isChecked
          ? 'border-emerald-500/30 bg-emerald-500/[0.06] dark:border-emerald-500/25 dark:bg-emerald-500/[0.05]'
          : 'border-slate-200 bg-white hover:border-indigo-400/50 hover:bg-slate-50/80 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-500/40 dark:hover:bg-slate-800/70'
      }`}
    >
      {/* Question Header Row */}
      <div className="flex items-start gap-3.5">
        {/* Interactive Checkbox (isolated from accordion expand/collapse) */}
        <button
          type="button"
          role="checkbox"
          aria-checked={isChecked}
          aria-label={`Mark question ${index + 1} as ${isChecked ? 'not done' : 'done'}`}
          onClick={handleCheckboxClick}
          onKeyDown={handleCheckboxKeyDown}
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${
            isChecked
              ? 'border-emerald-500 bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
              : 'border-slate-300 bg-transparent hover:border-indigo-400 dark:border-slate-600 dark:hover:border-indigo-400'
          }`}
        >
          {isChecked && <Check className="h-4 w-4 stroke-[3]" />}
        </button>

        {/* Question Text & Badges */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide ${
                  isChecked
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                Q{index + 1}
              </span>

              {isChecked && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Done
                </span>
              )}
            </div>

            {answerText && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-400">
                <span className="hidden sm:inline">
                  {isExpanded ? 'Hide Answer' : 'View Answer'}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-indigo-500 dark:text-indigo-400' : ''
                  }`}
                />
              </span>
            )}
          </div>

          <p
            className={`mt-2 text-sm sm:text-[15px] leading-relaxed transition-colors duration-200 ${
              isChecked
                ? 'line-through text-slate-400 dark:text-slate-500'
                : 'font-medium text-slate-800 dark:text-slate-100'
            }`}
          >
            {questionText}
          </p>
        </div>
      </div>

      {/* Smoothly Expandable Exam Answer Accordion */}
      {answerText && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? 'mt-3.5 grid-rows-[1fr] opacity-100'
              : 'mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="cursor-text select-text rounded-xl border border-slate-200/80 border-l-4 border-l-indigo-500 bg-slate-50/90 p-3.5 sm:p-4 dark:border-slate-800 dark:border-l-indigo-400 dark:bg-slate-950/65">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                <BookOpenCheck className="h-3.5 w-3.5" />
                Exam-Ready Answer
              </div>
              <p className="whitespace-pre-line text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {answerText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
