import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPopup/LoginPopup.css'; 

const CompleteProfilePopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    city: '',
    salary: '',
    savings: '',
    properties: '',
    insurance: '',
    funds: '',
    medicalCondition: '',
    lifeStyle: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Try to get user info from localStorage to pre-fill name
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      if (userData && userData.name) {
        setProfileData(prev => ({
          ...prev,
          name: userData.name
        }));
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }

    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    // Add validation rules as needed
    if (!profileData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!profileData.age.trim()) {
      newErrors.age = 'Age is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // In a real app, you would send this to your API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store profile data in localStorage
      localStorage.setItem('profileData', JSON.stringify(profileData));
      
      // Redirect to the actual page
      setIsVisible(false);
      setTimeout(() => {
        navigate('/actual');
      }, 300);
      
    } catch (error) {
      setSubmitError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`}>
      <div className={`popup-container ${isVisible ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="popup-header">
            <h2>Complete Your Profile</h2>
            <button type="button" onClick={handleClose} className="close-button">
              <svg viewBox="0 0 24 24" className="close-icon">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {submitError && (
            <div className="error-message general">{submitError}</div>
          )}

          <div className="input-container">
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={profileData.name}
                onChange={handleInputChange}
                className={`popup-input ${errors.name ? 'error' : ''}`}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="input-group">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                name="age"
                placeholder="Your Age"
                value={profileData.age}
                onChange={handleInputChange}
                className={`popup-input ${errors.age ? 'error' : ''}`}
              />
              {errors.age && <span className="error-message">{errors.age}</span>}
            </div>
            
            <div className="input-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Your City"
                value={profileData.city}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="salary">Salary:</label>
              <input
                type="text"
                id="salary"
                name="salary"
                placeholder="Your Salary"
                value={profileData.salary}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="savings">Savings:</label>
              <input
                type="text"
                id="savings"
                name="savings"
                placeholder="Your Savings"
                value={profileData.savings}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="properties">Properties:</label>
              <input
                type="text"
                id="properties"
                name="properties"
                placeholder="Your Properties"
                value={profileData.properties}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="insurance">Insurance:</label>
              <input
                type="text"
                id="insurance"
                name="insurance"
                placeholder="Your Insurance"
                value={profileData.insurance}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="funds">Funds:</label>
              <input
                type="text"
                id="funds"
                name="funds"
                placeholder="Your Funds"
                value={profileData.funds}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="medicalCondition">Medical Condition:</label>
              <input
                type="text"
                id="medicalCondition"
                name="medicalCondition"
                placeholder="Your Medical Condition"
                value={profileData.medicalCondition}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="lifeStyle">Life Style:</label>
              <input
                type="text"
                id="lifeStyle"
                name="lifeStyle"
                placeholder="Your Life Style"
                value={profileData.lifeStyle}
                onChange={handleInputChange}
                className="popup-input"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="description">Description About Your Future:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Description About Your Future"
                value={profileData.description}
                onChange={handleInputChange}
                className="popup-input"
                rows={4}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Please wait...' : 'Complete Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfilePopup;