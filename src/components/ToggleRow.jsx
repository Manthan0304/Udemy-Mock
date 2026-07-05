import React from 'react';

/**
 * ToggleRow — used in Screen 4 (Parent Consent) and Screen 7 (Data & Privacy)
 * Props:
 *   label       - main toggle label
 *   description - secondary description text
 *   checked     - boolean
 *   disabled    - if true, renders grayed out and non-interactive
 *   onChange    - callback (newValue) => void
 *   disabledCaption - small caption text shown when disabled
 */
export default function ToggleRow({ label, description, checked, disabled = false, onChange, disabledCaption }) {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`flex items-start justify-between py-4 border-b border-udemy-border last:border-b-0 ${disabled ? 'opacity-70' : ''}`}>
      <div className="flex-1 pr-4">
        <p className={`font-semibold text-sm ${disabled ? 'text-udemy-disabled-text' : 'text-udemy-dark'}`}>
          {label}
        </p>
        <p className={`text-sm mt-0.5 ${disabled ? 'text-udemy-disabled-text' : 'text-udemy-muted'}`}>
          {description}
        </p>
        {disabled && disabledCaption && (
          <p className="text-xs mt-1 text-udemy-disabled-text italic">{disabledCaption}</p>
        )}
      </div>

      {/* Toggle switch */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
          disabled
            ? 'bg-udemy-disabled cursor-not-allowed'
            : checked
            ? 'bg-udemy-purple cursor-pointer'
            : 'bg-gray-300 cursor-pointer'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ease-in-out mt-0.5 ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </button>
    </div>
  );
}
