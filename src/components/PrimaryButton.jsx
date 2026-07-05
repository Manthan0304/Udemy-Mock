import React from 'react';

export default function PrimaryButton({ children, onClick, className = '', disabled = false, id }) {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`btn-primary w-full text-base ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
