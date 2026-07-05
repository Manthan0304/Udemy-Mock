import React, { useState } from 'react';
import ParentNav from '../../components/ParentNav';
import Sidebar from '../../components/Sidebar';
import ToggleRow from '../../components/ToggleRow';
import DeletionConfirmationModal from './DeletionConfirmationModal';

const DATA_CATEGORIES = [
  {
    icon: '👤',
    label: 'Profile info',
    description: 'Name, email address, date of birth, and profile settings',
    detail: 'Last updated 2 days ago',
  },
  {
    icon: '📖',
    label: 'Course activity',
    description: 'Courses enrolled in, completion status, quiz scores, and notes',
    detail: '3 active courses',
  },
  {
    icon: '▶️',
    label: 'Watch history',
    description: 'Videos watched, timestamps, and playback preferences',
    detail: '47 videos this month',
  },
];

/**
 * Screen 7 — Data & Privacy Page (Parent)
 */
export default function ParentDataPrivacy({ learnerName, viewMode, onSwitchView, onNavigate, onDeletionDone, consents, onConsentChange }) {
  const [showDeletionModal, setShowDeletionModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeletionModal(true);
  };

  const handleDeletionDone = () => {
    setShowDeletionModal(false);
    onDeletionDone(); // returns to overview
  };

  return (
    <div className="min-h-screen bg-udemy-card">
      <ParentNav viewMode={viewMode} onSwitchView={onSwitchView} />

      <div className="flex">
        <Sidebar activeItem="data-privacy" onNavigate={onNavigate} learnerName={learnerName} />

        {/* Main content */}
        <main className="flex-1 px-8 py-8 max-w-3xl">
          <h1 className="text-2xl font-bold text-udemy-dark mb-1">Data & Privacy</h1>
          <p className="text-udemy-muted text-sm mb-8">
            See and control what data we hold for {learnerName}.
          </p>

          {/* Data categories held */}
          <div className="card-surface p-6 mb-6">
            <h2 className="text-base font-bold text-udemy-dark mb-1">Data we hold for {learnerName}</h2>
            <p className="text-sm text-udemy-muted mb-4">
              Under India's DPDP Act, you have the right to access and request deletion of this data.
            </p>

            <div className="divide-y divide-udemy-border">
              {DATA_CATEGORIES.map((category) => (
                <div key={category.label} className="py-4 flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{category.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-udemy-dark">{category.label}</p>
                    <p className="text-xs text-udemy-muted mt-0.5">{category.description}</p>
                    <p className="text-xs text-udemy-purple mt-1">{category.detail}</p>
                  </div>
                  <button className="text-xs text-udemy-purple hover:underline whitespace-nowrap self-start mt-1">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing emails toggle */}
          <div className="card-surface p-6 mb-6">
            <h2 className="text-base font-bold text-udemy-dark mb-1">Consent settings</h2>
            <p className="text-sm text-udemy-muted mb-2">
              Update {learnerName}'s consent at any time. Changes take effect immediately.
            </p>
            <ToggleRow
              label="Marketing emails"
              description="Receive course offers and promotional updates"
              checked={consents.marketing}
              onChange={(val) => onConsentChange('marketing', val)}
            />
          </div>

          {/* ⚠️ Destructive section — visually separated */}
          <div className="border-2 border-red-200 rounded-lg bg-red-50 p-6">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-udemy-destructive" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <h2 className="text-base font-bold text-udemy-destructive">Delete this account's data</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              This will permanently erase all of {learnerName}'s data within 48 hours. This action cannot be undone.
            </p>
            <button
              id="delete-all-data-btn"
              onClick={handleDeleteClick}
              className="btn-destructive"
            >
              Delete all data
            </button>
          </div>
        </main>
      </div>

      {/* Deletion confirmation modal */}
      {showDeletionModal && (
        <DeletionConfirmationModal
          learnerName={learnerName}
          onDone={handleDeletionDone}
        />
      )}
    </div>
  );
}
