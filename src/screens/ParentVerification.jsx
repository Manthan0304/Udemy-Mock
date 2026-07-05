import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

/**
 * Screen 3 — Parent Verification (OTP)
 */
export default function ParentVerification({ parentEmail, onNext }) {
  // Pre-filled OTP for demo
  const [otp, setOtp] = useState(['4', '8', '2', '9', '1', '7']);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Auto-focus next box
    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      if (prev) prev.focus();
    }
  };

  const maskedEmail = parentEmail
    ? parentEmail.replace(/(.{2}).*(@.*)/, '$1•••$2')
    : 'parent@email.com';

  return (
    <div className="min-h-screen bg-udemy-card flex flex-col items-center justify-center py-10 px-4">
      {/* Logo */}
      <div className="flex items-center gap-1 mb-6">
        <span className="text-3xl font-black text-udemy-dark tracking-tight">udemy</span>
        <span className="w-2.5 h-2.5 bg-udemy-purple rounded-full -mt-4 ml-0.5" />
      </div>

      <div className="card-surface w-full max-w-md p-8 text-center">
        {/* Lock icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-udemy-purple-light flex items-center justify-center">
            <svg className="w-8 h-8 text-udemy-purple" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-bold text-udemy-dark mb-2">Verify it's you</h1>

        <p className="text-udemy-muted text-sm mb-6 leading-relaxed">
          We've sent a 6-digit code to <span className="font-medium text-udemy-dark">{maskedEmail}</span>.
          Enter it below to confirm you're this learner's parent or guardian.
        </p>

        {/* OTP input boxes */}
        <div className="flex gap-2 justify-center mb-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-xl font-bold border-2 border-udemy-border rounded-lg text-udemy-dark focus:outline-none focus:border-udemy-purple transition-colors"
            />
          ))}
        </div>

        <p className="text-xs text-udemy-muted mb-6">
          Verifying confirms you're an existing, adult Udemy account holder.
        </p>

        <PrimaryButton id="verify-otp-btn" onClick={onNext}>
          Verify
        </PrimaryButton>

        <p className="text-xs text-udemy-muted mt-4">
          Didn't receive it?{' '}
          <span className="text-udemy-purple cursor-pointer hover:underline">Resend code</span>
        </p>
      </div>
    </div>
  );
}
