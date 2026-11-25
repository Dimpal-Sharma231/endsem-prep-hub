import {
  BrainCircuit,
  Cpu,
  Settings,
  HeartHandshake,
  Landmark,
  BookOpen,
} from 'lucide-react';

/**
 * Maps icon string keys from data.js to Lucide React icon components.
 */
export const ICON_MAP = {
  BrainCircuit,
  Cpu,
  Settings,
  HeartHandshake,
  Landmark,
};

export function getSubjectIcon(iconName) {
  return ICON_MAP[iconName] || BookOpen;
}

/**
 * Accent style tokens per subject for consistent dark/light academic styling.
 */
export const ACCENT_STYLES = {
  indigo: {
    badge: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    iconBg: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/30',
    ring: 'hover:border-indigo-500/50',
    glow: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    bar: 'from-indigo-500 to-emerald-400',
  },
  emerald: {
    badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    iconBg: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/30',
    ring: 'hover:border-emerald-500/50',
    glow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    bar: 'from-emerald-500 to-teal-400',
  },
  cyan: {
    badge: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
    iconBg: 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-500/30',
    ring: 'hover:border-cyan-500/50',
    glow: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    bar: 'from-cyan-500 to-emerald-400',
  },
  rose: {
    badge: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
    iconBg: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 ring-1 ring-rose-500/30',
    ring: 'hover:border-rose-500/50',
    glow: 'from-rose-500/20 via-rose-500/5 to-transparent',
    bar: 'from-rose-500 to-amber-400',
  },
  amber: {
    badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
    iconBg: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/30',
    ring: 'hover:border-amber-500/50',
    glow: 'from-amber-500/20 via-amber-500/5 to-transparent',
    bar: 'from-amber-500 to-emerald-400',
  },
};

export function getAccentStyle(accent) {
  return ACCENT_STYLES[accent] || ACCENT_STYLES.indigo;
}
