import React from 'react';
import ParentNav from '../../components/ParentNav';
import Sidebar from '../../components/Sidebar';

const MOCK_COURSES = [
  { name: 'The Complete Web Developer Bootcamp', progress: 62 },
  { name: 'Python for Data Science and ML', progress: 34 },
  { name: 'UI/UX Design Bootcamp with Figma', progress: 80 },
];

/**
 * Screen 6 — Parent Dashboard (Overview)
 */
export default function ParentOverview({ learnerName, viewMode, onSwitchView, onNavigate }) {
  return (
    <div className="min-h-screen bg-udemy-card">
      <ParentNav viewMode={viewMode} onSwitchView={onSwitchView} />

      <div className="flex">
        <Sidebar activeItem="overview" onNavigate={onNavigate} learnerName={learnerName} />

        {/* Main content */}
        <main className="flex-1 px-8 py-8">
          <h1 className="text-2xl font-bold text-udemy-dark mb-1">
            Parent Dashboard — {learnerName}'s account
          </h1>
          <p className="text-udemy-muted text-sm mb-8">
            Manage and monitor your child's learning account
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-5 mb-8">
            <div className="card-surface p-5">
              <p className="text-udemy-muted text-xs font-medium uppercase tracking-wide mb-1">Account Status</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-udemy-dark">Protected</span>
                <span className="text-green-500 text-xl">✓</span>
              </div>
              <p className="text-xs text-udemy-muted mt-1">DPDP-compliant protections active</p>
            </div>

            <div className="card-surface p-5">
              <p className="text-udemy-muted text-xs font-medium uppercase tracking-wide mb-1">Courses in Progress</p>
              <span className="text-2xl font-bold text-udemy-dark">{MOCK_COURSES.length}</span>
              <p className="text-xs text-udemy-muted mt-1">Active learning this month</p>
            </div>

            <div className="card-surface p-5">
              <p className="text-udemy-muted text-xs font-medium uppercase tracking-wide mb-1">Data Requests</p>
              <span className="text-2xl font-bold text-udemy-dark">0</span>
              <p className="text-xs text-udemy-muted mt-1">No pending requests</p>
            </div>
          </div>

          {/* Courses in progress */}
          <div className="card-surface p-6 mb-5">
            <h2 className="text-base font-bold text-udemy-dark mb-4">Courses in progress</h2>
            <div className="space-y-4">
              {MOCK_COURSES.map((course, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded flex-shrink-0"
                    style={{ background: ['#4f46e5', '#0891b2', '#db2777'][i] }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-udemy-dark truncate">{course.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-udemy-border rounded-full h-1.5">
                        <div
                          className="bg-udemy-purple h-1.5 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-udemy-muted whitespace-nowrap">{course.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick action */}
          <div className="dpdp-surface p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-udemy-purple mb-1">Data & Privacy controls available</p>
              <p className="text-sm text-udemy-muted">View, update, or request deletion of {learnerName}'s data.</p>
            </div>
            <button
              id="go-to-data-privacy-btn"
              onClick={() => onNavigate('data-privacy')}
              className="btn-secondary whitespace-nowrap"
            >
              Manage Data & Privacy →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
