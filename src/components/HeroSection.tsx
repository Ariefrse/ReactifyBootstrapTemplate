import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, ListGroup } from 'react-bootstrap';
import { ChevronRight, Code, Search, Server, Shield, ArrowRight, Briefcase, Users, Building } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('jobseekers'); // 'jobseekers' or 'employers'
  
  // Sample suggestions based on search term and active tab
  const getSuggestions = (term: string) => {
    if (!term) return [];
    
    const jobSeekerSuggestions = [
      'React Developer', 'React Native', 'React.js Expert',
      'DevOps Engineer', 'DevOps Specialist', 'DevSecOps',
      'Cloud Engineer', 'Cloud Architect', 'Cloud Security',
      'Software Engineer', 'Software Developer', 'Software Architect',
      'Frontend Developer', 'Backend Developer', 'Full Stack Developer'
    ];
    
    const employerSuggestions = [
      'Hire React Developer', 'Hire DevOps Engineer', 'Hire Cloud Architect',
      'Tech Recruitment', 'IT Staffing', 'Software Team Building',
      'Contract Developers', 'Remote Tech Teams', 'Engineering Talent'
    ];
    
    const suggestions = activeTab === 'jobseekers' ? jobSeekerSuggestions : employerSuggestions;
    
    return suggestions.filter(item => 
      item.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 5);
  };
  
  const suggestions = getSuggestions(searchTerm);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Map icon names to Lucide React components
  const getIconComponent = (iconName: string, size = 18) => {
    switch (iconName) {
      case 'Code': return <Code size={size} />;
      case 'Server': return <Server size={size} />;
      case 'Shield': return <Shield size={size} />;
      case 'Briefcase': return <Briefcase size={size} />;
      case 'Users': return <Users size={size} />;
      case 'Building': return <Building size={size} />;
      default: return null;
    }
  };
  
  // Features for each tab
  const features = {
    jobseekers: [
      { icon: 'Briefcase', title: 'Exclusive Jobs', description: 'Access to exclusive tech positions not found elsewhere' },
      { icon: 'Code', title: 'Tech Focused', description: 'Specialized in software and tech roles' },
      { icon: 'Shield', title: 'Career Growth', description: 'Support throughout your career journey' }
    ],
    employers: [
      { icon: 'Users', title: 'Top Talent', description: 'Access to pre-vetted tech professionals' },
      { icon: 'Building', title: 'Industry Expertise', description: 'Specialized recruitment for tech companies' },
      { icon: 'Server', title: 'Fast Placement', description: 'Efficient hiring process with quality matches' }
    ]
  };

  return (
    <section className="hero-section">
      <div className="hero-shape-left"></div>
      <div className="hero-shape-right"></div>
      <div className="hero-shape-bottom"></div>
      <Container className="py-5">
        {/* Hero Header with Tab Selection */}
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="company-info mb-4">
            <div className="company-badge">
              Since {siteConfig.company.founded}
            </div>
            <h1 className="company-name">{siteConfig.company.name}</h1>
            <p className="company-tagline">{siteConfig.company.description}</p>
          </div> */}
          <h1 className="display-3 fw-bold text-white mb-3">
            <span className="hero-title-gradient">Find Your Perfect</span> {activeTab === 'jobseekers' ? 'Tech Role' : 'Tech Talent'}
          </h1>
          <p className="lead text-yellow-100 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            {activeTab === 'jobseekers' ? 
              'Discover opportunities that match your skills and career goals with top tech companies' : 
              'Connect with exceptional tech talent to build your dream engineering team'}
          </p>
          
          {/* Tab Selector */}
          <div className="d-flex justify-content-center mb-5">
            <div className="hero-tabs-container">
              <button 
                className={`hero-tab ${activeTab === 'jobseekers' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobseekers')}
              >
                <Briefcase size={18} className="me-2" />
                For Job Seekers
              </button>
              <button 
                className={`hero-tab ${activeTab === 'employers' ? 'active' : ''}`}
                onClick={() => setActiveTab('employers')}
              >
                <Building size={18} className="me-2" />
                For Employers
              </button>
            </div>
          </div>
        </motion.div>
        
        <Row className="align-items-center">
          <Col lg={6} className="text-white mb-5 mb-lg-0">
            {/* Search Box */}
            <motion.div 
              className="mb-4 position-relative"
              ref={searchRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="search-container">
                <InputGroup className="shadow-lg">
                  <Form.Control
                    placeholder={activeTab === 'jobseekers' ? 'Search for tech jobs...' : 'Search for tech talent...'}
                    aria-label={activeTab === 'jobseekers' ? 'Search jobs' : 'Search talent'}
                    className="search-input py-3"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      if (e.target.value) {
                        setShowSuggestions(true);
                      } else {
                        setShowSuggestions(false);
                      }
                    }}
                    onFocus={() => {
                      if (searchTerm) {
                        setShowSuggestions(true);
                      }
                    }}
                  />
                  <Button variant="primary" className="search-button">
                    <Search size={18} className="me-2" />
                    Search
                  </Button>
                </InputGroup>
                
                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div 
                      className="position-absolute w-100 mt-2 z-3"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ListGroup className="shadow-lg rounded-3 overflow-hidden">
                        {suggestions.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                          >
                            <ListGroup.Item 
                              action 
                              className="border-0 py-3 d-flex justify-content-between align-items-center"
                              onClick={() => {
                                setSearchTerm(suggestion);
                                setShowSuggestions(false);
                              }}
                            >
                              <div className="d-flex align-items-center">
                                <Search size={16} className="me-3 text-primary" />
                                {suggestion}
                              </div>
                              <ChevronRight size={16} className="text-muted" />
                            </ListGroup.Item>
                          </motion.div>
                        ))}
                        <ListGroup.Item 
                          action
                          className="border-0 py-2 text-primary fw-bold text-center"
                          onClick={() => setShowSuggestions(false)}
                        >
                          View all results
                        </ListGroup.Item>
                      </ListGroup>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            
            {/* Feature Cards */}
            <div className="feature-cards-container mt-5">
              <Row>
                {features[activeTab as keyof typeof features].map((feature, index) => (
                  <Col md={4} key={index}>
                    <motion.div 
                      className="feature-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="feature-icon">
                        {getIconComponent(feature.icon, 24)}
                      </div>
                      <h5 className="feature-title">{feature.title}</h5>
                      <p className="feature-description">{feature.description}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
            
            {/* Call to Action */}
            <motion.div 
              className="mt-5 d-flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                variant="light" 
                size="lg" 
                className="cta-button primary-cta"
                style={{ backgroundColor: 'var(--light-yellow)', color: '#000' }}
              >
                {activeTab === 'jobseekers' ? 'Browse Jobs' : 'Post a Job'}
                <ArrowRight size={18} className="ms-2" />
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="cta-button secondary-cta"
              >
                {activeTab === 'jobseekers' ? 'Upload CV' : 'Contact Us'}
              </Button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="d-flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {siteConfig.hero.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="d-flex align-items-center text-white-75"
                  whileHover={{ 
                    scale: 1.05,
                    color: '#ffffff',
                    transition: { duration: 0.2 }
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {getIconComponent(stat.icon, 18)} 
                  <span className="ms-2">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </Col>
          
          {/* Hero Image */}
          <Col lg={6} className="d-flex justify-content-center">
            <motion.div
              className="position-relative hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                delay: 0.4
              }}
            >
              <motion.div 
                className="hero-image-glow" 
                animate={{ 
                  opacity: [0.6, 0.8, 0.6],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="hero-image-shape" 
                animate={{ 
                  rotate: [0, 10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src={siteConfig.hero.backgroundImage}
                alt="Professional looking for opportunities"
                className="hero-image"
                width={500}
                height={500}
                loading="eager"
                decoding="async"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="floating-element floating-element-1"
                animate={{ 
                  y: ['-10px', '10px', '-10px'],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Code size={24} />
                <span>React</span>
              </motion.div>
              
              <motion.div 
                className="floating-element floating-element-2"
                animate={{ 
                  y: ['10px', '-10px', '10px'],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Server size={24} />
                <span>DevOps</span>
              </motion.div>
              
              <motion.div 
                className="floating-element floating-element-3"
                animate={{ 
                  y: ['-5px', '15px', '-5px'],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Shield size={24} />
                <span>Security</span>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;