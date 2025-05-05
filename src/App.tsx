import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyLogos from './components/CompanyLogos';
import JobListings from './components/JobListings';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { siteConfig } from './config/siteConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // Load fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Set page title from siteConfig
    document.title = siteConfig.seo.title;
    
    // Apply theme colors to root variables
    document.documentElement.style.setProperty('--primary-blue', siteConfig.theme.primaryColor);
    document.documentElement.style.setProperty('--secondary-blue', siteConfig.theme.secondaryColor);
    document.documentElement.style.setProperty('--coral', siteConfig.theme.accentColor1);
    document.documentElement.style.setProperty('--light-yellow', siteConfig.theme.accentColor2);
    document.documentElement.style.setProperty('--light-blue', siteConfig.theme.lightBackground);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="app-container" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navbar (sticky, white) */}
      <Navbar />

      {/* Hero Section (blue background) */}
      <div style={{ background: siteConfig.theme.primaryColor }}>
        <HeroSection />
      </div>

      {/* Company Logos (white background) */}
      <div style={{ background: '#fff' }}>
        <CompanyLogos />
      </div>

      {/* Job Listings (light blue background) */}
      <div style={{ background: siteConfig.theme.lightBackground }}>
        <JobListings />
      </div>

      {/* Footer (blue background) */}
      <div style={{ background: siteConfig.theme.primaryColor }}>
        <Footer />
      </div>

      <BackToTop />
    </div>
  );
}

export default App;
