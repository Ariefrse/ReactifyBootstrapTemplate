import { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import { Bell, Briefcase, Building, ChevronDown, FileUp, Menu, PhoneCall, Search, User, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';

// This component can be customized for any project by modifying the siteConfig.ts file
// Icons can be changed by importing different ones from lucide-react or any other icon library


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.navbar-collapse') && !target.closest('.navbar-toggler-custom')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutsideDropdown = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (activeDropdown && !target.closest('.nav-item-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideDropdown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    };
  }, [activeDropdown]);
  
  // Handle window resize and close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 992;
      setIsDesktop(desktop);
      if (desktop && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);
  
  // Add padding to body when navbar is fixed and handle initial load
  useEffect(() => {
    const updateBodyPadding = () => {
      if (navbarRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        document.body.style.paddingTop = `${navbarHeight}px`;
      }
    };
    
    // Small delay to ensure the navbar has rendered correctly
    setTimeout(updateBodyPadding, 100);
    window.addEventListener('resize', updateBodyPadding);
    
    // Check scroll position on initial load
    const initialScroll = window.scrollY;
    if (initialScroll > 50) {
      setScrolled(true);
    }
    
    return () => {
      window.removeEventListener('resize', updateBodyPadding);
    };
  }, []);
  
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <div ref={navbarRef}>
      <BootstrapNavbar 
        expand="lg" 
        className={`modern-navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}
        expanded={mobileMenuOpen}
        fixed="top"
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Container>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="d-flex align-items-center"
          >
            <BootstrapNavbar.Brand href="#home" className="navbar-brand-modern">
              <span className="brand-text">{siteConfig.company.shortName}</span>
          
            </BootstrapNavbar.Brand>
          </motion.div>
          
          {/* Custom Toggle Button */}
          <motion.div 
            className="d-lg-none navbar-toggler-custom"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
          
          {/* Navigation */}
          <BootstrapNavbar.Collapse id="basic-navbar-nav" className="navbar-collapse-modern">
            {/* Main Navigation Links */}
            <Nav className="mx-auto main-nav py-2 py-lg-0">
              {/* Menu Item 1 */}
              <div className="nav-item-container">
                <div 
                  className={`nav-item-header ${activeDropdown === 'jobseekers' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('jobseekers')}
                >
                  <User size={18} className="nav-icon" />
                  <span>Menu 1</span>
                  <ChevronDown size={16} className={`dropdown-arrow ${activeDropdown === 'jobseekers' ? 'rotated' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {activeDropdown === 'jobseekers' && (
                    <motion.div 
                      className="nav-dropdown"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      {siteConfig.navigation.jobseekers.map((item, index) => (
                        <motion.a 
                          key={index} 
                          href={item.href}
                          className="dropdown-item"
                          whileHover={{ x: 5 }}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Menu Item 2 */}
              <div className="nav-item-container">
                <div 
                  className={`nav-item-header ${activeDropdown === 'employers' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('employers')}
                >
                  <Building size={18} className="nav-icon" />
                  <span>Menu 2</span>
                  <ChevronDown size={16} className={`dropdown-arrow ${activeDropdown === 'employers' ? 'rotated' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {activeDropdown === 'employers' && (
                    <motion.div 
                      className="nav-dropdown"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      {siteConfig.navigation.clients.map((item, index) => (
                        <motion.a 
                          key={index} 
                          href={item.href}
                          className="dropdown-item"
                          whileHover={{ x: 5 }}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Menu Item 3 */}
              <div className="nav-item-container">
                <div 
                  className={`nav-item-header ${activeDropdown === 'sectors' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('sectors')}
                >
                  <Briefcase size={18} className="nav-icon" />
                  <span>Menu 3</span>
                  <ChevronDown size={16} className={`dropdown-arrow ${activeDropdown === 'sectors' ? 'rotated' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {activeDropdown === 'sectors' && (
                    <motion.div 
                      className="nav-dropdown"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      {siteConfig.navigation.sectors.map((item, index) => (
                        <motion.a 
                          key={index} 
                          href={item.href}
                          className="dropdown-item"
                          whileHover={{ x: 5 }}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Menu Item 4 */}
              <div className="nav-item-container">
                <div 
                  className={`nav-item-header ${activeDropdown === 'resources' ? 'active' : ''}`}
                  onClick={() => toggleDropdown('resources')}
                >
                  <Search size={18} className="nav-icon" />
                  <span>Menu 4</span>
                  <ChevronDown size={16} className={`dropdown-arrow ${activeDropdown === 'resources' ? 'rotated' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div 
                      className="nav-dropdown"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      {siteConfig.navigation.resources.map((item, index) => (
                        <motion.a 
                          key={index} 
                          href={item.href}
                          className="dropdown-item"
                          whileHover={{ x: 5 }}
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Nav>
            
            {/* Action Buttons */}
            <div className="navbar-actions mt-3 mt-lg-0">
              {/* <motion.div 
                className="icon-button search-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={20} />
              </motion.div> */}
              
              <motion.div 
                className="icon-button notification-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell size={20} />
                <span className="notification-badge"></span>
              </motion.div>
              
              <motion.div
                className={isDesktop ? 'd-block' : 'd-none d-md-block'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline-primary"
                  className="action-button upload-button" 
                >
                  <FileUp size={18} className="me-2" />
                  <span>Action 1</span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="primary" 
                  className="action-button contact-button"
                >
                  <PhoneCall size={18} className="me-2" />
                  <span className="d-none d-md-inline">Action 2</span>
                </Button>
              </motion.div>
            </div>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
