import React from 'react';

/**
 * Sidebar — Parent dashboard left sidebar
 * Props:
 *   activeItem  - "overview" | "data-privacy"
 *   onNavigate  - (item) => void
 *   learnerName - string
 */
export default function Sidebar({ activeItem, onNavigate, learnerName }) {
  const items = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'courses', label: 'Courses', icon: '📖', disabled: true },
    { id: 'data-privacy', label: 'Data & Privacy', icon: '🔒' },
    { id: 'settings', label: 'Settings', icon: '⚙️', disabled: true },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-udemy-border min-h-screen">
      {/* Learner info header */}
      <div className="px-4 py-5 border-b border-udemy-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-udemy-purple text-white font-bold flex items-center justify-center text-lg">
            {learnerName ? learnerName[0].toUpperCase() : 'A'}
          </div>
          <div>
            <p className="font-bold text-udemy-dark text-sm">{learnerName}</p>
            <p className="text-xs text-udemy-muted">Learner account</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 rounded px-2 py-1 w-fit">
          <span>🛡</span>
          <span className="font-medium">Protected by DPDP</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="px-2 py-3">
        {items.map((item) => (
          <button
            key={item.id}
            id={`sidebar-${item.id}`}
            onClick={() => !item.disabled && onNavigate(item.id)}
            className={`w-full text-left mb-1 ${
              activeItem === item.id
                ? 'sidebar-item-active'
                : item.disabled
                ? 'sidebar-item opacity-40 cursor-not-allowed'
                : 'sidebar-item'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.disabled && (
              <span className="ml-auto text-udemy-disabled-text text-xs">—</span>
            )}
          </button>
        ))}
      </nav>

      {/* Back to child view hint */}
      <div className="px-4 mt-4 pt-4 border-t border-udemy-border">
        <p className="text-xs text-udemy-muted leading-relaxed">
          You're viewing {learnerName}'s account from the Parent Dashboard.
        </p>
      </div>
    </aside>
  );
}
