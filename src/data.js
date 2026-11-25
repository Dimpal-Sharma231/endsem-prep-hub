/**
 * EndSem Prep Hub — Curriculum & Question Bank Data
 * Extracted from the SPPU Second Year (2024 Pattern) syllabus & Super 30 Question Bank PDF,
 * enriched with concise, point-wise, exam-oriented answers for every question.
 *
 * Structure:
 * subjectsData: Array<{
 *   id: string,
 *   name: string,
 *   shortName: string,
 *   icon: string (Lucide icon component name),
 *   accent: string (color theme key),
 *   description: string,
 *   units: Array<{
 *     id: string,
 *     name: string,
 *     topics?: string,
 *     questions: Array<{
 *       id: string,
 *       question: string,
 *       answer: string
 *     }>
 *   }>
 * }>
 */

import aiSubject from './subjectsData/ai.js';
import deldSubject from './subjectsData/deld.js';
import osSubject from './subjectsData/os.js';
import uhvSubject from './subjectsData/uhv.js';
import dfSubject from './subjectsData/df.js';

const subjectsData = [
  aiSubject,
  deldSubject,
  osSubject,
  uhvSubject,
  dfSubject,
];

export default subjectsData;
