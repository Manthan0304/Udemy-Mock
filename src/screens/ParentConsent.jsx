import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import ToggleRow from '../components/ToggleRow';

/**
 * Screen 4 — Parent Consent Screen (THE critical screen)
 * Props:
 *   learnerName - string
 *   onConfirm   - () => void — navigates to child home + sets viewMode = "child"
 */
export default function ParentConsent({ learnerName, consents, onConsentChange, onConfirm }) {
  const toggle = (key) => (val) => {
    onConsentChange(key, val);
  };

  return (
    <div className="min-h-screen bg-udemy-card flex flex-col items-center justify-center py-10 px-4">
      {/* Logo */}
      <div className="flex items-center gap-1 mb-6">
        <span className="text-3xl font-black text-udemy-dark tracking-tight">udemy</span>
        <span className="w-2.5 h-2.5 bg-udemy-purple rounded-full -mt-4 ml-0.5" />
      </div>

      <div className="card-surface w-full max-w-lg p-8">
        {/* DPDP banner */}
        <div className="dpdp-surface p-3 mb-6 flex items-center gap-2">
          <span className="text-udemy-purple text-lg">🛡</span>
          <span className="text-sm font-medium text-udemy-purple">
            DPDP-Compliant Parental Consent — India's Digital Personal Data Protection Act
          </span>
        </div>

        <h1 className="text-2xl font-bold text-udemy-dark mb-2">
          Set up {learnerName}'s protections
        </h1>
        <p className="text-udemy-muted text-sm mb-6 leading-relaxed">
          Review what {learnerName}'s account can and can't do. You can change these anytime from your{' '}
          <span className="text-udemy-purple font-medium">Parent Dashboard</span>.
        </p>

        {/* Toggle rows */}
        <div className="mb-6">
          <ToggleRow
            label="Course recommendations"
            description="Use activity to suggest relevant courses"
            checked={consents.recommendations}
            onChange={toggle('recommendations')}
          />
          <ToggleRow
            label="Connect with classmates"
            description="Match with peers from the same school or college"
            checked={consents.classmates}
            onChange={toggle('classmates')}
          />
          {/* AI toggle — PERMANENTLY DISABLED */}
          <div className="py-4 border-b border-udemy-border">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <p className="font-semibold text-sm text-udemy-disabled-text">AI model training</p>
                <p className="text-sm mt-0.5 text-udemy-disabled-text">
                  Use activity to help train Udemy's AI models
                </p>
                <p className="text-xs mt-1 text-udemy-disabled-text italic">
                  Not available for accounts under 18, by law
                </p>
              </div>
              {/* Visual: grayed toggle stuck at OFF */}
              <div
                className="relative inline-flex h-6 w-11 flex-shrink-0 rounded-full bg-udemy-disabled cursor-not-allowed"
                title="Not available for accounts under 18"
              >
                <span className="inline-block h-5 w-5 transform rounded-full bg-white shadow mt-0.5 translate-x-0.5" />
              </div>
            </div>
            {/* Visible "off" badge */}
            <div className="mt-2">
              <span className="inline-flex items-center gap-1 bg-gray-100 border border-gray-300 text-gray-400 text-xs rounded px-2 py-0.5 font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Locked — under-18 protection applies
              </span>
            </div>
          </div>
          <ToggleRow
            label="Marketing emails"
            description="Receive course offers and updates"
            checked={consents.marketing}
            onChange={toggle('marketing')}
          />
        </div>

        <PrimaryButton id="confirm-activate-btn" onClick={onConfirm}>
          Confirm and activate account
        </PrimaryButton>

        <p className="text-xs text-udemy-muted mt-4 text-center leading-relaxed">
          These settings are governed by India's DPDP Act. You can update them anytime from the Parent Dashboard.
        </p>
      </div>
    </div>
  );
}
