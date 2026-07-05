import React, { useState, useEffect, useRef } from 'react';

/**
 * ParentNav — dark top bar for parent dashboard views
 * Includes the prototype persona view-switcher dropdown.
 */
export default function ParentNav({ viewMode, onSwitchView }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const switcherRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  const handleSwitch = (mode) => {
    onSwitchView(mode);
    setDropdownOpen(false);
  };

  return (
    <nav className="w-full bg-udemy-dark border-b border-gray-700 h-16 flex items-center px-6 gap-4 sticky top-0 z-50">
      <div className="flex items-center gap-1 flex-shrink-0">
        <span className="text-xl font-black text-white tracking-tight">udemy</span>
        <span className="w-2 h-2 bg-udemy-purple rounded-full -mt-3 ml-0.5" />
        <span className="ml-3 text-gray-300 text-sm font-medium">Parent Dashboard</span>
      </div>
      <div className="flex-1" />

      <div ref={switcherRef} className="relative border-l border-gray-600 pl-4">
        <div className="text-gray-500 text-xs mb-1 whitespace-nowrap">Prototype demo — switch persona</div>
        <div className="relative">
          <button
            id="parent-view-switcher-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-sm font-medium text-white hover:border-udemy-purple transition-colors whitespace-nowrap"
          >
            <span>{viewMode === 'child' ? '👦 Child View' : '👨 Parent View'}</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-1 bg-gray-800 border border-gray-700 rounded shadow-lg z-50 min-w-[160px]">
              <button
                id="parent-switch-child"
                onClick={() => handleSwitch('child')}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-700 transition-colors flex items-center gap-2 ${viewMode === 'child' ? 'font-bold text-udemy-purple' : 'text-gray-200'}`}
              >
                👦 Child View
                {viewMode === 'child' && <span className="ml-auto text-udemy-purple">✓</span>}
              </button>
              <button
                id="parent-switch-parent"
                onClick={() => handleSwitch('parent')}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-700 transition-colors flex items-center gap-2 ${viewMode === 'parent' ? 'font-bold text-udemy-purple' : 'text-gray-200'}`}
              >
                👨 Parent View
                {viewMode === 'parent' && <span className="ml-auto text-udemy-purple">✓</span>}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
