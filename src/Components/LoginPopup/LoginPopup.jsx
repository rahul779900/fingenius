/*import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (currState === "Sign Up" && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const endpoint = currState === "Login" ? '/api/login' : '/api/signup';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'An error occurred');

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      handleClose();
      navigate('/afterlogin');
    } catch (error) {
      setSubmitError(error.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setShowLogin(false), 300);
  };

  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
      <div className={`popup-container ${isVisible ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="popup-form">
          <div className="popup-header">
            <h2>{currState}</h2>
            <button type="button" onClick={handleClose} className="close-button">
              <svg viewBox="0 0 24 24" className="close-icon">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {submitError && <div className="error-message general">{submitError}</div>}
          <div className="input-container">
            {currState === "Sign Up" && (
              <div className="input-group">
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} className={`popup-input ${errors.name ? 'error' : ''}`} />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            )}
            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className={`popup-input ${errors.email ? 'error' : ''}`} />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Your Password" value={formData.password} onChange={handleInputChange} className={`popup-input ${errors.password ? 'error' : ''}`} />
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
          </div>
          <button type="submit" className={`submit-button ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
            {isLoading ? 'Please wait...' : (currState === "Sign Up" ? "Create account" : "Login")}
          </button>
          <div className="terms-group">
            <input type="checkbox" required id="terms" className="terms-checkbox" />
            <label htmlFor="terms" className="terms-label">By continuing, you agree to our Terms of Service and Privacy Policy.</label>
          </div>
          <div className="switch-form">
            {currState === "Login" ? (
              <p>Create a new account? <button type="button" onClick={() => { setCurrState("Sign Up"); setFormData({ name: '', email: '', password: '' }); setErrors({}); }} className="switch-button">Sign UP</button></p>
            ) : (
              <p>Already have an account? <button type="button" onClick={() => { setCurrState("Login"); setFormData({ name: '', email: '', password: '' }); setErrors({}); }} className="switch-button">Login Here</button></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
*/