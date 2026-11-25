import React from 'react';

/**
 * Dynamic progress bar displaying completion ratio and percentage.
 */
export default function ProgressBar({
  completed = 0,
  total = 0,
  size = 'md',
  barClass = 'from-indigo-500 via-indigo-400 to-emerald-400',
  showText = true,
  labelSuffix = 'Questions Completed',
}) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const heightClass =
    size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3.5' : 'h-2.5';

  return (
    <div className="w-full">
      {showText && (
        <div className="mb-1.5 flex items-center justify-between gap-2 text-xs sm:text-sm">
          <span className="font-medium text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">
              {completed}/{total}
            </span>{' '}
            {labelSuffix}
          </span>
          <span
            className={`font-bold tabular-nums ${
              percentage === 100
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-indigo-600 dark:text-indigo-400'
            }`}
          >
            {percentage}%
          </span>
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800/90 ${heightClass}`}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barClass} transition-all duration-500 ease-out ${
            percentage > 0 ? 'shadow-[0_0_10px_rgba(52,211,153,0.35)]' : ''
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
