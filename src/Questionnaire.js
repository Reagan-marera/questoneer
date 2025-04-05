import React, { useState } from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    organizationType: '',
    currentChallenges: '',
    budget: '',
    timeline: '',
    contactMethod: 'email'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxWtMql5G_y_SU1d2Av8qVXHzKiCy50G75Mghe92EMZB07pRkkWApqk4HekgUrK2uxL/exec'; // Replace with your deployed URL
  
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  


  if (submitted) {
    return (
      <div className="questionnaire-thank-you">
        <h2>Thank You!</h2>
        <p>Your responses have been submitted successfully. Our team will review your information and contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="questionnaire-container">
      <h2>Help Us Understand Your Needs</h2>
      <p className="questionnaire-description">
        Please fill out this brief questionnaire so we can better understand your financial management needs
        and provide you with the most suitable solution.
      </p>

      <form onSubmit={handleSubmit} className="questionnaire-form">
        <div className="form-group">
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization Name*</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organizationType">Organization Type*</label>
          <select
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            required
          >
            <option value="">Select one...</option>
            <option value="school">School/Educational Institution</option>
            <option value="ngo">Non-Profit Organization</option>
            <option value="church">Church/Religious Organization</option>
            <option value="business">Business/For-Profit</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="currentChallenges">Current Financial Management Challenges*</label>
          <textarea
            id="currentChallenges"
            name="currentChallenges"
            value={formData.currentChallenges}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Estimated Budget for Solution</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select budget range...</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-plus">$25,000+</option>
            <option value="unsure">Unsure at this time</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Implementation Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline...</option>
            <option value="immediately">Immediately</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6-12months">6-12 months</option>
            <option value="12plus">12+ months</option>
            <option value="unsure">Unsure</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Contact Method*</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={handleChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={handleChange}
              />
              Phone Call
            </label>
          </div>
        </div>

        <div className="form-submit">
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit Questionnaire'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
