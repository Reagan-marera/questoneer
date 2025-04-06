import React, { useState, useEffect } from 'react';
import './YoumingApp.css';
import { FaChartLine, FaCalculator, FaFileInvoice, FaBalanceScale, FaSchool, FaArrowRight, FaTimes } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Questionnaire from './Questionnaire';

const YoumingApp = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="youming-app">
      {/* Questionnaire Modal */}
      {showQuestionnaire && (
        <motion.div
          className="questionnaire-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="close-button"
              onClick={() => setShowQuestionnaire(false)}
            >
              <FaTimes />
            </button>
            <Questionnaire />
            <button
              className="cancel-button"
              onClick={() => setShowQuestionnaire(false)}
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Banner */}
      <motion.div
  className="hero-banner"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{
    backgroundImage: `url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`
  }}
>
  <div className="hero-overlay">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Youming Technologies
    </motion.h1>
    <motion.h2
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      Building the Future of Financial Management
    </motion.h2>
    <motion.div
      className="hero-buttons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
     
    </motion.div>
  </div>
</motion.div>
      {/* Navigation */}
      <motion.nav
        className="main-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-logo">YOUMING</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </motion.nav>

      {/* Featured Solutions - Netflix-style row */}
      <motion.section
        className="solution-row"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Our Financial Solutions</motion.h2>
        <div className="row-container">
          <motion.div
            className="solution-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-icon"><FaChartLine /></div>
            <h3>Financial Planning</h3>
            <p>Comprehensive tools for budgeting and financial strategy</p>
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Financial Planning"
              className="card-image"
            />
          </motion.div>
          <motion.div
            className="solution-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-icon"><FaCalculator /></div>
            <h3>Transaction Recording</h3>
            <p>Automated journals for all financial activities</p>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Transaction Recording"
              className="card-image"
            />
          </motion.div>
          <motion.div
            className="solution-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-icon"><FaFileInvoice /></div>
            <h3>Financial Reporting</h3>
            <p>Automated generation of key financial statements</p>
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Financial Reporting"
              className="card-image"
            />
          </motion.div>
          <motion.div
            className="solution-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-icon"><FaBalanceScale /></div>
            <h3>GAAP Compliance</h3>
            <p>Adherence to accounting standards and principles</p>
            <img
              src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="GAAP Compliance"
              className="card-image"
            />
          </motion.div>
          <motion.div
            className="solution-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="card-icon"><FaSchool /></div>
            <h3>School Solutions</h3>
            <p>Specialized financial systems for educational institutions</p>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="School Solutions"
              className="card-image"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section
        className="value-proposition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="prop-content">
          <h2>Why Choose Youming Technologies?</h2>
          <motion.div
            className="prop-grid"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.div
              className="prop-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-container">💡</div>
              <h3>Innovation</h3>
              <p>We push boundaries to deliver cutting-edge financial solutions</p>
            </motion.div>
            <motion.div
              className="prop-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-container">🎓</div>
              <h3>Expertise</h3>
              <p>Seasoned professionals with deep industry knowledge</p>
            </motion.div>
            <motion.div
              className="prop-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-container">⚡</div>
              <h3>Efficiency</h3>
              <p>Streamlined workflows that save time and resources</p>
            </motion.div>
            <motion.div
              className="prop-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="icon-container">🤝</div>
              <h3>Support</h3>
              <p>Dedicated customer service and training resources</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Client Testimonials */}
      <motion.section
        className="testimonials"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <motion.div
            className="testimonial-card"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="quote-mark">"</div>
            <p>Youming's financial system transformed our school's accounting processes, saving us countless hours.</p>
            <div className="client-info">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Client"
                className="client-image"
              />
              <div>
                <strong>School Administrator</strong>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="testimonial-card"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="quote-mark">"</div>
            <p>The automated reporting features have given us real-time insights into our financial health.</p>
            <div className="client-info">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client"
                className="client-image"
              />
              <div>
                <strong>NGO Director</strong>
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <h2>Ready to Transform Your Financial Management?</h2>
          <p>Contact us today to learn how Youming Technologies can streamline your financial processes.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuestionnaire(true)}
          >
            Get in Touch <FaArrowRight />
          </motion.button>
        </div>
        <div className="cta-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Financial Management"
            className="cta-main-image"
          />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">YOUMING TECHNOLOGIES</div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#schools">For Schools</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Youming Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default YoumingApp;
