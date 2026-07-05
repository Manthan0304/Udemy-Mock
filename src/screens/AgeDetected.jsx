import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

/**
 * Screen 2 — Age Detected / Parent Verification Needed
 */
export default function AgeDetected({ learnerName, onNext }) {
  const [parentEmail, setParentEmail] = useState('parent.mehta@gmail.com');

  return (
    <div className="min-h-screen bg-udemy-card flex flex-col items-center justify-center py-10 px-4">
      {/* Logo */}
      <div className="flex items-center gap-1 mb-6">
        <span className="text-3xl font-black text-udemy-dark tracking-tight">udemy</span>
        <span className="w-2.5 h-2.5 bg-udemy-purple rounded-full -mt-4 ml-0.5" />
      </div>

      <div className="card-surface w-full max-w-md p-8 text-center">
        {/* Shield icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-udemy-purple-light flex items-center justify-center">
            <svg className="w-8 h-8 text-udemy-purple" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4a3 3 0 110 6 3 3 0 010-6zm0 13c-2.67 0-5.02-1.37-6.41-3.44C7.08 13.03 10.5 12 12 12s4.92 1.03 6.41 2.56C16.02 16.63 13.67 18 12 18z" />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-bold text-udemy-dark mb-3">
          We need a parent or guardian to confirm this account
        </h1>

        <p className="text-udemy-muted text-sm mb-6 leading-relaxed">
          Because you're under 18, India's <strong>Digital Personal Data Protection Act</strong> requires a parent or guardian to verify and consent before you can start using Udemy.
        </p>

        <div className="text-left mb-6">
          <label className="block text-sm font-medium text-udemy-dark mb-1" htmlFor="parent-email">
            Parent or guardian's email
          </label>
          <input
            id="parent-email"
            type="email"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            className="form-input"
            placeholder="parent@email.com"
          />
        </div>

        <PrimaryButton id="send-verification-btn" onClick={() => onNext(parentEmail)}>
          Send verification
        </PrimaryButton>

        <p className="text-xs text-udemy-muted mt-4 leading-relaxed">
          We'll send a one-time code to the parent's email. The parent must have an existing adult Udemy account.
        </p>
      </div>
    </div>
  );
}
