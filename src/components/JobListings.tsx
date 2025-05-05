import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ArrowRight, Briefcase, Calendar, ChevronLeft, ChevronRight, DollarSign, Filter, MapPin, Search, Star } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { motion } from 'framer-motion';
import { useState } from 'react';

const JobListings = () => {
  const allJobs = siteConfig.jobListings.jobs;
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter jobs based on active category and search term
  const filteredJobs = allJobs.filter(job => {
    const matchesCategory = activeCategory === 'all' || job.tag.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Get unique categories from jobs
  const categories = ['all', ...new Set(allJobs.map(job => job.tag.toLowerCase()))];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="job-listings-section">
      <Container>
        <div className="section-header text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              bg="primary" 
              className="mb-3 section-badge"
            >
              {siteConfig.jobListings.badge || 'Opportunities'}
            </Badge>
            <h2 className="section-title">{siteConfig.jobListings.title}</h2>
            <p className="section-subtitle">
              {siteConfig.jobListings.subtitle || 'Discover your next career move with our curated tech positions'}
            </p>
          </motion.div>
          
          {/* Search and Filter Bar */}
          <motion.div 
            className="search-filter-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search jobs..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-tabs">
              <Filter size={16} className="filter-icon" />
              <div className="category-tabs">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Job Cards */}
        <motion.div
          className="job-cards-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredJobs.length > 0 ? (
            <Row className="g-4">
              {filteredJobs.map((job) => (
                <Col key={job.id} lg={4} md={6} className="mb-4">
                  <motion.div variants={itemVariants}>
                    <Card className="job-card">
                      <div 
                        className="job-card-accent" 
                        style={{ backgroundColor: job.color || 'var(--primary-blue)' }}
                      ></div>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <Badge 
                            className="job-tag" 
                            style={{ backgroundColor: job.color || 'var(--primary-blue)' }}
                          >
                            {job.tag}
                          </Badge>
                          <Button variant="link" className="p-0 favorite-button">
                            <Star size={18} />
                          </Button>
                        </div>
                        
                        <h3 className="job-title mb-3">{job.title}</h3>
                        
                        <div className="job-meta mb-3">
                          <div className="job-meta-item">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="job-meta-item">
                            <DollarSign size={16} />
                            <span>{job.salary}</span>
                          </div>
                          <div className="job-meta-item">
                            <Briefcase size={16} />
                            <span>{job.type || 'Full-time'}</span>
                          </div>
                        </div>
                        
                        <p className="job-description">{job.description}</p>
                        
                        <div className="d-flex justify-content-between align-items-center mt-4">
                          <div className="job-posted">
                            <Calendar size={14} className="me-1" />
                            <span>{job.posted}</span>
                          </div>
                          <Button 
                            variant="primary" 
                            className="view-job-btn"
                            style={{ 
                              backgroundColor: job.color || 'var(--primary-blue)',
                              borderColor: job.color || 'var(--primary-blue)'
                            }}
                          >
                            Apply
                            <ArrowRight size={16} className="ms-2" />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          ) : (
            <motion.div 
              className="no-results-container text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="no-results-icon mb-3">
                <Search size={48} />
              </div>
              <h3>No matching jobs found</h3>
              <p>Try adjusting your search or filters to find what you're looking for</p>
              <Button 
                variant="outline-primary" 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
              >
                Reset filters
              </Button>
            </motion.div>
          )}
        </motion.div>
        
        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <motion.div 
            className="pagination-container mt-5 d-flex justify-content-between align-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline-secondary" className="pagination-btn">
              <ChevronLeft size={18} />
              <span>Previous</span>
            </Button>
            
            <div className="pagination-pages d-none d-md-flex">
              {[1, 2, 3].map(page => (
                <Button 
                  key={page} 
                  variant={page === 1 ? "primary" : "light"}
                  className="pagination-page"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button variant="outline-primary" className="pagination-btn">
              <span>Next</span>
              <ChevronRight size={18} />
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
};

export default JobListings;
