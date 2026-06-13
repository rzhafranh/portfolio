import { useState, useEffect } from 'react';

// sectionIds: the IDs to watch for scroll position
// navMap: optional map from sectionId → navItemId (to group multiple sections under one nav item)
export function useScrollSpy(sectionIds, offset = 100, navMap = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Find the last section that has been scrolled past
      let lastPassed = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            lastPassed = id;
          }
        }
      }

      // Apply navMap if provided (e.g. gallery → works, experiences → works)
      const mappedSection = navMap[lastPassed] || lastPassed;
      setActiveSection(mappedSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
