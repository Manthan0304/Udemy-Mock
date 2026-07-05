import React from 'react';
import TopNav from '../../components/TopNav';
import CourseCard from '../../components/CourseCard';

const IN_PROGRESS_COURSES = [
  {
    id: 1,
    title: 'The Complete Web Developer Bootcamp: HTML, CSS, JS & More',
    instructor: 'Angela Yu',
    rating: '4.7',
    reviewCount: '312,409',
    color: '#4f46e5',
    category: 'Development',
    progress: 62,
  },
  {
    id: 2,
    title: 'Python for Data Science and Machine Learning Bootcamp',
    instructor: 'Jose Portilla',
    rating: '4.6',
    reviewCount: '105,882',
    color: '#0891b2',
    category: 'Data Science',
    progress: 34,
  },
  {
    id: 3,
    title: 'UI/UX Design Bootcamp with Figma — Zero to Expert',
    instructor: 'Daniel Scott',
    rating: '4.8',
    reviewCount: '47,210',
    color: '#db2777',
    category: 'Design',
    progress: 80,
  },
];

const RECOMMENDED_COURSES = [
  {
    id: 4,
    title: 'JavaScript: The Advanced Concepts',
    instructor: 'Andrei Neagoie',
    rating: '4.7',
    reviewCount: '28,190',
    color: '#f59e0b',
    category: 'Development',
  },
  {
    id: 5,
    title: 'React — The Complete Guide (incl. React Router & Redux)',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.6',
    reviewCount: '193,005',
    color: '#06b6d4',
    category: 'Development',
  },
  {
    id: 6,
    title: 'Complete Photography Masterclass',
    instructor: 'Phil Ebiner',
    rating: '4.5',
    reviewCount: '55,832',
    color: '#84cc16',
    category: 'Photography',
  },
  {
    id: 7,
    title: 'Machine Learning A-Z: AI, Python & R in Data Science',
    instructor: 'Kirill Eremenko',
    rating: '4.5',
    reviewCount: '168,450',
    color: '#8b5cf6',
    category: 'Data Science',
  },
];

/**
 * Screen 5 — Child Home ("My Learning")
 */
export default function ChildHome({ viewMode, onSwitchView }) {
  return (
    <div className="min-h-screen bg-white">
      <TopNav
        viewMode={viewMode}
        onSwitchView={onSwitchView}
        showViewSwitcher={true}
        showProtectedBadge={true}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page heading */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-2xl font-bold text-udemy-dark">My learning</h1>
          <span className="text-xs bg-udemy-purple-light text-udemy-purple border border-purple-300 rounded-full px-3 py-1 font-semibold flex items-center gap-1">
            🛡 Protected Account
          </span>
        </div>

        {/* Subtabs (decorative) */}
        <div className="flex gap-6 border-b border-udemy-border mb-8">
          {['All courses', 'My lists', 'Wishlist', 'Archived'].map((tab, i) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium transition-colors ${
                i === 0
                  ? 'text-udemy-dark border-b-2 border-udemy-dark -mb-px'
                  : 'text-udemy-muted hover:text-udemy-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* In-progress courses */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-udemy-dark mb-4">Continue learning</h2>
          <div className="grid grid-cols-3 gap-5">
            {IN_PROGRESS_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>

        {/* Recommended row */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-udemy-dark">Recommended for you</h2>
            <button className="text-sm text-udemy-purple hover:underline font-medium">View all</button>
          </div>
          {/* DPDP note — reinforces protection ≠ worse experience */}
          <div className="dpdp-surface px-4 py-3 mb-4 flex items-center gap-2 text-sm">
            <span className="text-udemy-purple">🛡</span>
            <span className="text-udemy-purple font-medium">
              Recommendations are based on your learning history — fully DPDP-compliant for your protected account.
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
            {RECOMMENDED_COURSES.map((course) => (
              <div key={course.id} className="min-w-[240px] max-w-[260px] flex-shrink-0">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
