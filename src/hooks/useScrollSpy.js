import { useState, useEffect, useRef } from 'react';

// sectionIds: the IDs to watch for scroll position
// navMap: optional map from sectionId → navItemId (to group multiple sections under one nav item)
export function useScrollSpy(sectionIds, offset = 100, navMap = {}) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const navMapRef = useRef(navMap);

  // Keep navMap ref up to date on every render without re-registering the scroll listener
  useEffect(() => {
    navMapRef.current = navMap;
  }, [navMap]);

  useEffect(() => {
    const handleScroll = () => {
      // Use viewport-relative detection: section is "active" when its top crosses
      // the middle of the viewport. This works correctly even with very tall sections
      // (like auto-scroll galleries) where a fixed offset would fail.
      const threshold = Math.max(offset, window.innerHeight / 2);

      let lastPassed = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold) {
            lastPassed = id;
          }
        }
      }

      // Apply navMap if provided (e.g. gallery → works, experiences → works)
      const mappedSection = navMapRef.current[lastPassed] || lastPassed;
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
