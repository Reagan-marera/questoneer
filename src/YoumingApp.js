import React from 'react';
import './YoumingApp.css';
import { FaChartLine, FaCalculator, FaFileInvoice, FaBalanceScale, FaSchool } from 'react-icons/fa';

const YoumingApp = () => {
  return (
    <div className="youming-app">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay">
          <h1>Youming Technologies</h1>
          <h2>Building the Future of Financial Management</h2>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-logo">YOUMING</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Featured Solutions - Netflix-style row */}
      <section className="solution-row">
        <h2>Our Financial Solutions</h2>
        <div className="row-container">
          <div className="solution-card">
            <div className="card-icon"><FaChartLine /></div>
            <h3>Financial Planning</h3>
            <p>Comprehensive tools for budgeting and financial strategy</p>
          </div>
          <div className="solution-card">
            <div className="card-icon"><FaCalculator /></div>
            <h3>Transaction Recording</h3>
            <p>Automated journals for all financial activities</p>
          </div>
          <div className="solution-card">
            <div className="card-icon"><FaFileInvoice /></div>
            <h3>Financial Reporting</h3>
            <p>Automated generation of key financial statements</p>
          </div>
          <div className="solution-card">
            <div className="card-icon"><FaBalanceScale /></div>
            <h3>GAAP Compliance</h3>
            <p>Adherence to accounting standards and principles</p>
          </div>
          <div className="solution-card">
            <div className="card-icon"><FaSchool /></div>
            <h3>School Solutions</h3>
            <p>Specialized financial systems for educational institutions</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="value-proposition">
        <div className="prop-content">
          <h2>Why Choose Youming Technologies?</h2>
          <div className="prop-grid">
            <div className="prop-item">
              <h3>Innovation</h3>
              <p>We push boundaries to deliver cutting-edge financial solutions</p>
            </div>
            <div className="prop-item">
              <h3>Expertise</h3>
              <p>Seasoned professionals with deep industry knowledge</p>
            </div>
            <div className="prop-item">
              <h3>Efficiency</h3>
              <p>Streamlined workflows that save time and resources</p>
            </div>
            <div className="prop-item">
              <h3>Support</h3>
              <p>Dedicated customer service and training resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Youming's financial system transformed our school's accounting processes, saving us countless hours."</p>
            <div className="client-info">
              <strong>School Administrator</strong>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"The automated reporting features have given us real-time insights into our financial health."</p>
            <div className="client-info">
              <strong>NGO Director</strong>
              <span>Kampala, Uganda</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Transform Your Financial Management?</h2>
        <p>Contact us today to learn how Youming Technologies can streamline your financial processes.</p>
        <button className="cta-button">Get in Touch</button>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-logo">YOUMING TECHNOLOGIES</div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#schools">For Schools</a></li>
                <li><a href="#ngos">For NGOs</a></li>
                <li><a href="#churches">For Churches</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#support">Support</a></li>
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
