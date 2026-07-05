import React, { useState, useEffect, useRef } from 'react';

/**
 * TopNav — Udemy-style top navigation bar
 * Props:
 *   viewMode        - "child" | "parent" | null
 *   onSwitchView    - (newMode) => void
 *   showViewSwitcher - boolean — whether the view-switcher is visible
 *   showProtectedBadge - boolean — show "Protected Account" pill (child view)
 */
export default function TopNav({ viewMode, onSwitchView, showViewSwitcher = false, showProtectedBadge = false }) {
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
    <nav className="w-full bg-white border-b border-udemy-border h-16 flex items-center px-6 gap-4 sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-1 flex-shrink-0 cursor-pointer">
        <span className="text-xl font-black text-udemy-dark tracking-tight">udemy</span>
        <span className="w-2 h-2 bg-udemy-purple rounded-full -mt-3 ml-0.5" />
      </div>

      {/* Category label */}
      <button className="text-sm font-medium text-udemy-dark hover:text-udemy-purple whitespace-nowrap hidden lg:block px-2 py-1 border border-udemy-border rounded-full">
        Explore ▾
      </button>

      {/* Search bar */}
      <div className="flex-1 max-w-2xl mx-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {/* Magnifying glass icon */}
            <svg className="w-4 h-4 text-udemy-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for anything"
            readOnly
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-udemy-border rounded-full bg-white placeholder-udemy-muted focus:outline-none focus:border-udemy-dark cursor-text"
          />
        </div>
      </div>

      {/* Right side links */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <span className="nav-link hidden md:block whitespace-nowrap">My learning</span>

        {/* Cart icon */}
        <button className="relative p-1">
          <svg className="w-6 h-6 text-udemy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 8M7 13l2.5 8m0 0h8m-8 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        </button>

        {/* Profile avatar */}
        <div className="relative">
          <button className="w-8 h-8 rounded-full bg-udemy-purple text-white text-sm font-bold flex items-center justify-center">
            A
          </button>
          {showProtectedBadge && (
            <div className="absolute -top-1 -right-1 bg-udemy-purple text-white text-xs rounded-full px-1.5 py-0.5 font-bold leading-none whitespace-nowrap" style={{ fontSize: '9px' }}>
              ✓
            </div>
          )}
        </div>

        {showProtectedBadge && (
          <span className="text-xs bg-udemy-purple-light text-udemy-purple border border-purple-300 rounded-full px-2 py-0.5 font-semibold whitespace-nowrap hidden lg:block">
            🛡 Protected Account
          </span>
        )}

        {/* View switcher — demo affordance */}
        {showViewSwitcher && (
          <div ref={switcherRef} className="relative ml-2 border-l border-udemy-border pl-4">
            <div className="text-gray-400 text-xs mb-1 whitespace-nowrap">Prototype demo — switch persona</div>
            <div className="relative">
              <button
                id="view-switcher-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-udemy-card border border-udemy-border rounded px-3 py-1.5 text-sm font-medium text-udemy-dark hover:border-udemy-purple transition-colors whitespace-nowrap"
              >
                <span>{viewMode === 'child' ? '👦 Child View' : '👨 Parent View'}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-udemy-border rounded shadow-lg z-50 min-w-[160px]">
                  <button
                    id="switch-to-child"
                    onClick={() => handleSwitch('child')}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-udemy-card transition-colors flex items-center gap-2 ${viewMode === 'child' ? 'font-bold text-udemy-purple' : 'text-udemy-dark'}`}
                  >
                    👦 Child View
                    {viewMode === 'child' && <span className="ml-auto text-udemy-purple">✓</span>}
                  </button>
                  <button
                    id="switch-to-parent"
                    onClick={() => handleSwitch('parent')}
                    className={`w-full text-left px-4 py-2.5 text-sm hover:bg-udemy-card transition-colors flex items-center gap-2 ${viewMode === 'parent' ? 'font-bold text-udemy-purple' : 'text-udemy-dark'}`}
                  >
                    👨 Parent View
                    {viewMode === 'parent' && <span className="ml-auto text-udemy-purple">✓</span>}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
