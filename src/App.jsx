import React, { useState } from 'react';

// Screens (shared entry flow)
import Signup from './screens/Signup';
import AgeDetected from './screens/AgeDetected';
import ParentVerification from './screens/ParentVerification';
import ParentConsent from './screens/ParentConsent';

// Child view
import ChildHome from './views/child/ChildHome';

// Parent views
import ParentOverview from './views/parent/ParentOverview';
import ParentDataPrivacy from './views/parent/ParentDataPrivacy';

/**
 * App — root component
 * Drives navigation via a single `currentScreen` state string.
 * No router needed — this is a guided clickable demo.
 *
 * Screens:
 *   "signup"              → Screen 1
 *   "age-detected"        → Screen 2
 *   "parent-verification" → Screen 3
 *   "parent-consent"      → Screen 4
 *   "child-home"          → Screen 5
 *   "parent-overview"     → Screen 6
 *   "parent-data-privacy" → Screen 7
 *   (Screen 8 is a modal rendered inside ParentDataPrivacy)
 */
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('signup');
  const [viewMode, setViewMode] = useState(null); // "child" | "parent"

  const [learnerData, setLearnerData] = useState({
    fullName: 'Aarav Mehta',
    email: '',
    parentEmail: '',
  });

  const [consents, setConsents] = useState({
    recommendations: true,
    classmates: true,
    aiTraining: false,
    marketing: false,
  });

  const handleConsentChange = (key, value) => {
    setConsents((prev) => ({ ...prev, [key]: value }));
  };

  // ─── Navigation handlers ───────────────────────────────────────────

  const handleSignup = (formData) => {
    setLearnerData((prev) => ({
      ...prev,
      fullName: formData.fullName || prev.fullName,
      email: formData.email,
    }));
    // Always route to age-detected (minor path, hardcoded per spec)
    setCurrentScreen('age-detected');
  };

  const handleAgeDetected = (parentEmail) => {
    setLearnerData((prev) => ({ ...prev, parentEmail }));
    setCurrentScreen('parent-verification');
  };

  const handleParentVerified = () => {
    setCurrentScreen('parent-consent');
  };

  const handleConsentConfirmed = () => {
    setViewMode('child');
    setCurrentScreen('child-home');
  };

  // View switcher — can be called from any post-consent screen
  const handleSwitchView = (newMode) => {
    setViewMode(newMode);
    if (newMode === 'child') {
      setCurrentScreen('child-home');
    } else {
      setCurrentScreen('parent-overview');
    }
  };

  // Sidebar navigation (parent views only)
  const handleParentNavigate = (item) => {
    if (item === 'overview') setCurrentScreen('parent-overview');
    if (item === 'data-privacy') setCurrentScreen('parent-data-privacy');
  };

  // After deletion done — return to parent overview
  const handleDeletionDone = () => {
    setCurrentScreen('parent-overview');
  };

  // ─── Render ───────────────────────────────────────────────────────

  const learnerName = learnerData.fullName || 'Aarav';

  switch (currentScreen) {
    case 'signup':
      return <Signup onNext={handleSignup} />;

    case 'age-detected':
      return <AgeDetected learnerName={learnerName} onNext={handleAgeDetected} />;

    case 'parent-verification':
      return (
        <ParentVerification
          parentEmail={learnerData.parentEmail}
          onNext={handleParentVerified}
        />
      );

    case 'parent-consent':
      return (
        <ParentConsent
          learnerName={learnerName}
          consents={consents}
          onConsentChange={handleConsentChange}
          onConfirm={handleConsentConfirmed}
        />
      );

    case 'child-home':
      return (
        <ChildHome
          viewMode={viewMode}
          onSwitchView={handleSwitchView}
        />
      );

    case 'parent-overview':
      return (
        <ParentOverview
          learnerName={learnerName}
          viewMode={viewMode}
          onSwitchView={handleSwitchView}
          onNavigate={handleParentNavigate}
        />
      );

    case 'parent-data-privacy':
      return (
        <ParentDataPrivacy
          learnerName={learnerName}
          viewMode={viewMode}
          onSwitchView={handleSwitchView}
          onNavigate={handleParentNavigate}
          onDeletionDone={handleDeletionDone}
          consents={consents}
          onConsentChange={handleConsentChange}
        />
      );

    default:
      return <Signup onNext={handleSignup} />;
  }
}
