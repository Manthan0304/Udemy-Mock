import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

/**
 * Screen 1 — Signup Page
 */
export default function Signup({ onNext }) {
  const [form, setForm] = useState({
    fullName: 'Aarav Mehta',
    email: 'aarav.mehta@student.com',
    password: '••••••••',
    dob: '2011-03-15', // 15 years old
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-udemy-card flex flex-col items-center justify-center py-10 px-4">
      {/* Logo above card */}
      <div className="flex items-center gap-1 mb-6">
        <span className="text-3xl font-black text-udemy-dark tracking-tight">udemy</span>
        <span className="w-2.5 h-2.5 bg-udemy-purple rounded-full -mt-4 ml-0.5" />
      </div>

      <div className="card-surface w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-udemy-dark mb-6">Sign up and start learning</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-udemy-dark mb-1" htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              className="form-input"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-udemy-dark mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-udemy-dark mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Password"
            />
            <p className="text-xs text-udemy-muted mt-1">Use 8 or more characters with a mix of letters, numbers & symbols.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-udemy-dark mb-1" htmlFor="dob">Date of birth</label>
            <input
              id="dob"
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              className="form-input"
            />
            <p className="text-xs text-udemy-muted mt-1">Used to verify your age. Pre-filled for demo (user is 15 years old).</p>
          </div>
        </div>

        <div className="mt-6">
          <PrimaryButton id="signup-btn" onClick={() => onNext(form)}>
            Sign up
          </PrimaryButton>
        </div>

        <p className="text-center text-xs text-udemy-muted mt-4">
          By signing up, you agree to our{' '}
          <span className="text-udemy-purple cursor-pointer hover:underline">Terms of Use</span> and{' '}
          <span className="text-udemy-purple cursor-pointer hover:underline">Privacy Policy</span>.
        </p>

        <p className="text-center text-sm text-udemy-muted mt-4">
          Already have an account?{' '}
          <span className="text-udemy-purple font-medium cursor-pointer hover:underline">Log in</span>
        </p>
      </div>
    </div>
  );
}
