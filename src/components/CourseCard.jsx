import React from 'react';

/**
 * CourseCard — used in Child Home (Screen 5)
 * Props:
 *   title       - course title
 *   instructor  - instructor name
 *   rating      - e.g. "4.6"
 *   reviewCount - e.g. "1,204"
 *   color       - thumbnail placeholder color (hex or tailwind bg)
 *   progress    - optional 0–100 (shows progress bar if present)
 *   category    - e.g. "Development"
 */
export default function CourseCard({ title, instructor, rating, reviewCount, color = '#A435F0', progress, category }) {
  return (
    <div className="card-surface rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer group flex flex-col">
      {/* Thumbnail */}
      <div
        className="w-full aspect-video flex items-center justify-center text-white text-xs font-semibold uppercase tracking-widest opacity-80"
        style={{ backgroundColor: color, minHeight: '140px' }}
      >
        {category}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-udemy-dark text-sm leading-snug line-clamp-2 group-hover:text-udemy-purple transition-colors">
          {title}
        </h3>
        <p className="text-udemy-muted text-xs mt-1">{instructor}</p>

        {/* Star rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-xs font-bold text-amber-600">{rating}</span>
          <div className="flex text-amber-400 text-xs">{'★'.repeat(Math.round(parseFloat(rating)))}</div>
          <span className="text-udemy-muted text-xs">({reviewCount})</span>
        </div>

        {/* Progress bar — shown only for in-progress courses */}
        {typeof progress === 'number' && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-udemy-muted mb-1">
              <span>In progress</span>
              <span>{progress}% complete</span>
            </div>
            <div className="w-full bg-udemy-border rounded-full h-1.5">
              <div
                className="bg-udemy-purple h-1.5 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
