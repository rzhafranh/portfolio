import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import SpotifyPlayer from './components/SpotifyPlayer';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import ThemeToggle from './components/ThemeToggle';
import GlobalFooter from './components/GlobalFooter';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import WorksSection from './sections/WorksSection';
import Experiences from './sections/Experiences';
import Gallery from './sections/Gallery';
import Footer from './sections/Footer';
import WorksPage from './pages/Works';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

// Handles scroll-to-section on navigation from sub-pages
function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          // Clear history state to prevent scrolling again on reload or back navigation
          navigate('/', { replace: true, state: {} });
        }, 100);
      }
    }
  }, [location.state, navigate]);

  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <WorksSection />
        <Experiences />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <div className="text-zinc-900 dark:text-white min-h-screen selection:bg-neon-cyan/30 selection:text-white antialiased transition-colors duration-500">
      <GlobalBackground />
      <ThemeToggle />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <GlobalFooter />
      <SpotifyPlayer />
    </div>
  );
}

export default App;
