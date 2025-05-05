import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

// This component displays partner company logos in a grid layout
// It uses the partners data from siteConfig.ts

const CompanyLogos = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="company-logos-section py-5">
      <Container>
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="light" 
              className="mb-3 section-badge"
              style={{ color: 'var(--primary-blue)' }}
            >
              {siteConfig.partners.title}
            </Button>
            <h2 className="section-title">{siteConfig.partners.title}</h2>
            <p className="section-subtitle">
              {siteConfig.partners.description}
            </p>
          </motion.div>
        </div>
        
        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            <motion.div 
              className="company-logos-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {siteConfig.partners.companies.map((company, index) => (
                <motion.div 
                  key={index}
                  className="company-logo-card"
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                >
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="img-fluid company-logo"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
        
        <div className="text-center mt-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              variant="outline-primary" 
              size="lg" 
              className="cta-button"
              href={siteConfig.partners.ctaUrl}
            >
              {siteConfig.partners.ctaText}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CompanyLogos;
