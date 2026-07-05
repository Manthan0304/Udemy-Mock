import React from 'react';

/**
 * Screen 8 — Deletion Confirmation Modal
 * Props:
 *   learnerName - string
 *   onDone      - () => void  — closes modal and returns to overview
 */
export default function DeletionConfirmationModal({ learnerName, onDone }) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onDone(); }}
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center animate-in">
        {/* Green checkmark */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-udemy-dark mb-3">Data deletion requested</h2>

        <p className="text-udemy-muted text-sm leading-relaxed mb-2">
          We've received your request. <strong>{learnerName}</strong>'s data will be fully erased within{' '}
          <span className="font-semibold text-udemy-dark">48 hours</span>, in line with India's data protection law.
        </p>

        <p className="text-xs text-udemy-muted mb-6">
          You'll receive a confirmation email at your registered parent email address.
        </p>

        {/* DPDP Act reference */}
        <div className="dpdp-surface p-3 mb-6 text-left">
          <p className="text-xs text-udemy-purple font-medium">
            🛡 Under Section 12 of the Digital Personal Data Protection Act, 2023, data principals have the right to erasure of personal data. Udemy will comply within the statutory period.
          </p>
        </div>

        <button
          id="deletion-done-btn"
          onClick={onDone}
          className="btn-primary w-full"
        >
          Done
        </button>
      </div>
    </div>
  );
}
