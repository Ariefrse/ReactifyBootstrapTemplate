import { Container, Row, Col, Button, Form, InputGroup, Badge } from 'react-bootstrap';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { motion } from 'framer-motion';

const Footer = () => {
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
  
  // Map icon names to Lucide React components
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Facebook': return <Facebook size={20} />;
      case 'Instagram': return <Instagram size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="modern-footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <Container>
          <motion.div 
            className="newsletter-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <Badge 
                  bg="light" 
                  className="mb-3 footer-badge"
                  style={{ color: 'var(--primary-blue)' }}
                >
                  Stay Updated
                </Badge>
                <h3 className="newsletter-title">Get the latest tech job alerts</h3>
                <p className="newsletter-text">Join our newsletter and receive personalized job recommendations and industry insights</p>
              </Col>
              <Col lg={6}>
                <div className="newsletter-form">
                  <InputGroup>
                    <Form.Control
                      placeholder="Your email address"
                      aria-label="Email address"
                      className="newsletter-input"
                    />
                    <Button variant="primary" className="newsletter-button">
                      Subscribe
                      <ArrowRight size={16} className="ms-2" />
                    </Button>
                  </InputGroup>
                  <div className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </div>
      
      {/* Main Footer */}
      <div className="footer-main">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Row className="footer-content">
              {/* Company Info */}
              <Col lg={4} md={6} className="mb-5 mb-lg-0">
                <motion.div variants={itemVariants}>
                  <div className="footer-brand mb-4">{siteConfig.company.name}</div>
                  <p className="footer-description mb-4">{siteConfig.company.description}</p>
                  
                  <div className="footer-contact">
                    {siteConfig.company.address && (
                      <div className="contact-item">
                        <MapPin size={16} />
                        <span>{siteConfig.company.address}</span>
                      </div>
                    )}
                    {siteConfig.company.phone && (
                      <div className="contact-item">
                        <Phone size={16} />
                        <span>{siteConfig.company.phone}</span>
                      </div>
                    )}
                    {siteConfig.company.email && (
                      <div className="contact-item">
                        <Mail size={16} />
                        <span>{siteConfig.company.email}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </Col>
              
              {/* Quick Links */}
              <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
                <motion.div variants={itemVariants}>
                  <h6 className="footer-heading">Explore</h6>
                  <ul className="footer-links">
                    {siteConfig.footer.quickLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
              
              {/* Sectors */}
              <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
                <motion.div variants={itemVariants}>
                  <h6 className="footer-heading">Sectors</h6>
                  <ul className="footer-links">
                    {siteConfig.footer.sectors.map((sector, index) => (
                      <li key={index}>
                        <a href={sector.href}>{sector.label}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
              
              {/* Social Media */}
              <Col lg={4} md={6}>
                <motion.div variants={itemVariants}>
                  <h6 className="footer-heading">Connect with us</h6>
                  <div className="social-links">
                    {siteConfig.footer.social.map((social, index) => (
                      <a key={index} href={social.href} className="social-link" aria-label={social.icon}>
                        {getSocialIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="footer-tagline">Connecting tech talent with exceptional opportunities</p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
          
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
            </div>
            <div className="legal-links">
              {siteConfig.footer.legal.map((item, index) => (
                <a key={index} href={item.href}>{item.label}</a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
