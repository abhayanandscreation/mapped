import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CareerProvider } from './context/CareerContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { RoadmapsPage } from './pages/RoadmapsPage';
import { InteractiveRoadmapPage } from './pages/InteractiveRoadmapPage';
import { DashboardPage } from './pages/DashboardPage';
import { SkillGapPage } from './pages/SkillGapPage';
import { AIMentorPage } from './pages/AIMentorPage';
import { ProfilePage } from './pages/ProfilePage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout component to handle conditional footer on interactive canvas
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isInteractiveCanvas = location.pathname.startsWith('/roadmap/');

  return (
    <div className="min-h-screen flex flex-col bg-cream text-deep">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {!isInteractiveCanvas && <Footer />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CareerProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/roadmaps" element={<RoadmapsPage />} />
            <Route path="/roadmap/:id" element={<InteractiveRoadmapPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/skill-gap" element={<SkillGapPage />} />
            <Route path="/ai-mentor" element={<AIMentorPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* Fallback to home */}
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </CareerProvider>
  );
};

export default App;
