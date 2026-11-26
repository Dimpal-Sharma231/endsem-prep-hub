import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import DashboardPage from './pages/DashboardPage';
import SubjectPage from './pages/SubjectPage';
import UnitPage from './pages/UnitPage';
import { useTheme } from './hooks/useTheme';
import { useProgress } from './hooks/useProgress';

/**
 * Root application component configuring routing (Home -> Subject -> Unit),
 * theme state, and LocalStorage-backed checklist progress.
 */
export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const {
    isCompleted,
    toggleQuestion,
    setUnitCompletion,
    resetSubjectProgress,
    getUnitStats,
    getSubjectStats,
    getOverallStats,
  } = useProgress();

  return (
    <BrowserRouter>
      <Layout
        isDark={isDark}
        toggleTheme={toggleTheme}
        isCompleted={isCompleted}
        getSubjectStats={getSubjectStats}
        getOverallStats={getOverallStats}
      >
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                getSubjectStats={getSubjectStats}
                getOverallStats={getOverallStats}
              />
            }
          />
          <Route
            path="/subject/:subjectId"
            element={
              <SubjectPage
                isCompleted={isCompleted}
                onToggleQuestion={toggleQuestion}
                onToggleUnitAll={setUnitCompletion}
                onResetSubject={resetSubjectProgress}
                getUnitStats={getUnitStats}
                getSubjectStats={getSubjectStats}
              />
            }
          />
          <Route
            path="/subject/:subjectId/unit/:unitId"
            element={
              <UnitPage
                isCompleted={isCompleted}
                onToggleQuestion={toggleQuestion}
                onToggleUnitAll={setUnitCompletion}
                getUnitStats={getUnitStats}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Analytics />
    </BrowserRouter>
  );
}
