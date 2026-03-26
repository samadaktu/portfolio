import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import GroundsMaintenance from './pages/services/GroundsMaintenance';
import LandscapingServices from './pages/services/LandscapingServices';
import GardenMaintenance from './pages/services/GardenMaintenance';
import CommercialLandscaping from './pages/services/CommercialLandscaping';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Set page title
    document.title = "Donnybrook Landscape Co | Award-Winning Landscaping Dublin";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/grounds-maintenance" element={<GroundsMaintenance />} />
            <Route path="/services/landscaping" element={<LandscapingServices />} />
            <Route path="/services/garden-maintenance" element={<GardenMaintenance />} />
            <Route path="/services/commercial" element={<CommercialLandscaping />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
