import React, { useState } from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    full_names: '',
    date_of_birth: '',
    county_of_residence: '',
    town: '',
    email_address: '',
    phone_number: '',
    whatsapp_number: '',
    bio: '',
    educational_background: [
      {
        level_of_academic: '',
        major: '',
        institution_attended: '',
        duration_from: '',
        duration_to: ''
      }
    ],
    work_experience: [
      {
        nature_of_work: '',
        designation: '',
        employer_entity: '',
        duration_from: '',
        duration_to: ''
      }
    ],
    computer_literacy: [
      {
        level_of_computer_literacy: '',
        course_name: '',
        institution_attended: '',
        duration_from: '',
        duration_to: ''
      }
    ]
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setFormData((prev) => {
      const updatedSection = [...prev[section]];
      updatedSection[index] = {
        ...updatedSection[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: updatedSection
      };
    });
  };

  const addSectionItem = (section) => {
    setFormData((prev) => ({
      ...prev,
      [section]: [
        ...prev[section],
        {
          level_of_academic: '',
          major: '',
          institution_attended: '',
          duration_from: '',
          duration_to: ''
        }
      ]
    }));
  };

  const removeSectionItem = (section, index) => {
    setFormData((prev) => {
      const updatedSection = prev[section].filter((_, i) => i !== index);
      return {
        ...prev,
        [section]: updatedSection
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send form data to Flask backend
      const response = await fetch('https://backquestioneer-4.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit the form.');
      }

      // If successful, mark as submitted
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error.message);
      alert(`There was an error submitting your form: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="questionnaire-thank-you">
        <h2>Thank You!</h2>
        <p>
          Your responses have been submitted successfully. Our team will review your information and contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="questionnaire-container">
      <h2 className="fade-in">Pre-Admission Questionnaire</h2>
      <p className="questionnaire-description fade-in">
        Please fill out this questionnaire so we can better understand your background and qualifications.
      </p>

      <form onSubmit={handleSubmit} className="questionnaire-form">
        {/* Personal Information */}
        <div className="form-group fade-in">
          <label htmlFor="full_names">Full Name*</label>
          <input
            type="text"
            id="full_names"
            name="full_names"
            value={formData.full_names}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="date_of_birth">Date of Birth*</label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="county_of_residence">County of Residence*</label>
          <input
            type="text"
            id="county_of_residence"
            name="county_of_residence"
            value={formData.county_of_residence}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="town">Town*</label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="email_address">Email Address*</label>
          <input
            type="email"
            id="email_address"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="phone_number">Phone Number*</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="whatsapp_number">WhatsApp Number*</label>
          <input
            type="text"
            id="whatsapp_number"
            name="whatsapp_number"
            value={formData.whatsapp_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group fade-in">
          <label htmlFor="bio">Bio*</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        {/* Educational Background */}
        <h3 className="fade-in">Educational Background</h3>
        {formData.educational_background.map((item, index) => (
          <div key={index} className="form-section slide-in">
            <div className="form-group">
              <label htmlFor={`level_of_academic-${index}`}>Level of Academic*</label>
              <input
                type="text"
                id={`level_of_academic-${index}`}
                value={item.level_of_academic}
                onChange={(e) =>
                  handleArrayChange('educational_background', index, 'level_of_academic', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`major-${index}`}>Major*</label>
              <input
                type="text"
                id={`major-${index}`}
                value={item.major}
                onChange={(e) => handleArrayChange('educational_background', index, 'major', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`institution_attended-${index}`}>Institution Attended*</label>
              <input
                type="text"
                id={`institution_attended-${index}`}
                value={item.institution_attended}
                onChange={(e) =>
                  handleArrayChange('educational_background', index, 'institution_attended', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_from-${index}`}>Duration From*</label>
              <input
                type="date"
                id={`duration_from-${index}`}
                value={item.duration_from}
                onChange={(e) =>
                  handleArrayChange('educational_background', index, 'duration_from', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_to-${index}`}>Duration To*</label>
              <input
                type="date"
                id={`duration_to-${index}`}
                value={item.duration_to}
                onChange={(e) =>
                  handleArrayChange('educational_background', index, 'duration_to', e.target.value)
                }
                required
              />
            </div>

            <button
              type="button"
              className="remove-button"
              onClick={() => removeSectionItem('educational_background', index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={() => addSectionItem('educational_background')}>
          Add Another Educational Background
        </button>

        {/* Work Experience */}
        <h3 className="fade-in">Work Experience</h3>
        {formData.work_experience.map((item, index) => (
          <div key={index} className="form-section slide-in">
            <div className="form-group">
              <label htmlFor={`nature_of_work-${index}`}>Nature of Work*</label>
              <input
                type="text"
                id={`nature_of_work-${index}`}
                value={item.nature_of_work}
                onChange={(e) =>
                  handleArrayChange('work_experience', index, 'nature_of_work', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`designation-${index}`}>Designation*</label>
              <input
                type="text"
                id={`designation-${index}`}
                value={item.designation}
                onChange={(e) => handleArrayChange('work_experience', index, 'designation', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`employer_entity-${index}`}>Employer Entity*</label>
              <input
                type="text"
                id={`employer_entity-${index}`}
                value={item.employer_entity}
                onChange={(e) =>
                  handleArrayChange('work_experience', index, 'employer_entity', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_from-${index}`}>Duration From*</label>
              <input
                type="date"
                id={`duration_from-${index}`}
                value={item.duration_from}
                onChange={(e) => handleArrayChange('work_experience', index, 'duration_from', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_to-${index}`}>Duration To*</label>
              <input
                type="date"
                id={`duration_to-${index}`}
                value={item.duration_to}
                onChange={(e) => handleArrayChange('work_experience', index, 'duration_to', e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className="remove-button"
              onClick={() => removeSectionItem('work_experience', index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={() => addSectionItem('work_experience')}>
          Add Another Work Experience
        </button>

        {/* Computer Literacy */}
        <h3 className="fade-in">Computer Literacy</h3>
        {formData.computer_literacy.map((item, index) => (
          <div key={index} className="form-section slide-in">
            <div className="form-group">
              <label htmlFor={`level_of_computer_literacy-${index}`}>Level of Computer Literacy*</label>
              <input
                type="text"
                id={`level_of_computer_literacy-${index}`}
                value={item.level_of_computer_literacy}
                onChange={(e) =>
                  handleArrayChange('computer_literacy', index, 'level_of_computer_literacy', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`course_name-${index}`}>Course Name*</label>
              <input
                type="text"
                id={`course_name-${index}`}
                value={item.course_name}
                onChange={(e) => handleArrayChange('computer_literacy', index, 'course_name', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`institution_attended-${index}`}>Institution Attended*</label>
              <input
                type="text"
                id={`institution_attended-${index}`}
                value={item.institution_attended}
                onChange={(e) =>
                  handleArrayChange('computer_literacy', index, 'institution_attended', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_from-${index}`}>Duration From*</label>
              <input
                type="date"
                id={`duration_from-${index}`}
                value={item.duration_from}
                onChange={(e) => handleArrayChange('computer_literacy', index, 'duration_from', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor={`duration_to-${index}`}>Duration To*</label>
              <input
                type="date"
                id={`duration_to-${index}`}
                value={item.duration_to}
                onChange={(e) => handleArrayChange('computer_literacy', index, 'duration_to', e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className="remove-button"
              onClick={() => removeSectionItem('computer_literacy', index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={() => addSectionItem('computer_literacy')}>
          Add Another Computer Literacy Entry
        </button>

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