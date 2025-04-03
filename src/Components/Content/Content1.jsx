import React from "react";
import './Content.css';
const Content1 = () => {
  return (
    <>
        <div className="content-container simple">
      <div className="welcome-container">
        <img src="/assets/logo.png" alt="Fingenius Logo" className="welcome-logo" />
        <div className="welcome-text">
          <h1>Welcome to Fingenius</h1>
          <p>Your journey to financial literacy starts here</p>
          <p>Learn, Earn, and Grow with our comprehensive financial education platform</p>
        </div>
      </div>
      
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon">
            <img src="/assets/courses-icon.png" alt="Courses" />
          </div>
          <h3>Financial Courses</h3>
          <p>Learn investment strategies, savings techniques and financial planning</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <img src="/assets/chatbot-icon.png" alt="AI Chatbot" />
          </div>
          <h3>AI Financial Assistant</h3>
          <p>Get personalized financial advice and answers to your questions</p>
        </div>
        
        <div className="feature">
          <div className="feature-icon">
            <img src="/assets/community-icon.png" alt="Community" />
          </div>
          <h3>Community</h3>
          <p>Connect with like-minded individuals on their financial journey</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default Content1;