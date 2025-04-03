import React from 'react';
import './Services.css';
import Navbar from '../Navbar/Navbar';

const ServicesPage = () => {
  return (
    <>
    <Navbar/>
    <div className="services-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="main-title">Our Services</h1>
        <p className="subtitle">
          Unlock Your Potential With Our Comprehensive Learning Ecosystem
        </p>
        <div className="divider"></div>
      </div>

      {/* Interactive Learning Section */}
      <section className="service-section">
        <h2 className="section-title">Interactive Learning</h2>
        
        <div className="card-grid">
          {/* Courses Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">Courses</h3>
              <p className="card-description">
                Dive deep into structured learning experiences crafted by experts in their fields. Our courses combine theory with practical applications.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Self-paced learning that fits your schedule</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multimedia content including videos and interactive elements</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Project-based assessments to solidify understanding</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificates of completion to showcase achievements</span>
                </li>
              </ul>
              <button className="card-button">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Chatbot Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">AI Chatbot Assistant</h3>
              <p className="card-description">
                Our state-of-the-art chatbot is available 24/7 to answer your questions, provide explanations, and guide you through difficult concepts.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Instant answers to your pressing questions</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalized learning support based on your needs</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Study recommendations tailored to your progress</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Practice problems with step-by-step solutions</span>
                </li>
              </ul>
              <button className="card-button">
                Try Our Chatbot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Engagement Section */}
      <section className="service-section">
        <h2 className="section-title">Continuous Engagement</h2>
        
        <div className="card-grid">
          {/* Daily Quizzes Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">Daily Quizzes</h3>
              <p className="card-description">
                Start each day with a quick knowledge check! Our daily quizzes are designed to keep you engaged and reinforce learning.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reinforce concepts through spaced repetition</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Track your progress with detailed analytics</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Challenge yourself with increasingly difficult questions</span>
                </li>
              </ul>
              <button className="card-button">
                Take Today's Quiz
              </button>
            </div>
          </div>

          {/* Monthly Quizzes Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">Monthly Challenges</h3>
              <p className="card-description">
                Take your knowledge to the next level with our comprehensive monthly quizzes and challenges.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deep-dive assessments covering multiple topic areas</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Competitive leaderboards to motivate your performance</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special badges and rewards for top performers</span>
                </li>
              </ul>
              <button className="card-button">
                Join This Month's Challenge
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Learning Section */}
      <section className="service-section">
        <h2 className="section-title">Community Learning</h2>
        
        <div className="card-grid">
          {/* Podcast Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">Podcast</h3>
              <p className="card-description">
                Tune in to thought-provoking discussions and insights from industry leaders with our regular podcast episodes.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert interviews with pioneers in the field</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Trending topics to keep you informed</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Success stories from fellow learners</span>
                </li>
              </ul>
              <button className="card-button">
                Listen to Episodes
              </button>
            </div>
          </div>

          {/* Community Forums Card */}
          <div className="service-card">
            <div className="card-accent"></div>
            <div className="card-content">
              <h3 className="card-title">Community Forums</h3>
              <p className="card-description">
                Connect with fellow learners, share insights, and collaborate on projects in our vibrant community.
              </p>
              <ul className="feature-list">
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Moderated discussions on course topics</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Peer-to-peer support for challenging concepts</span>
                </li>
                <li className="feature-item">
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Study groups for collaborative learning</span>
                </li>
              </ul>
              <button className="card-button">
                Join the Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="section-title">Ready to Transform Your Learning Experience?</h2>
        <p className="cta-description">
          Join thousands of satisfied learners who have accelerated their growth through our comprehensive services.
        </p>
        <div className="cta-buttons">
          <button className="primary-button">
            Sign Up Now
          </button>
          <button className="secondary-button">
            Explore Services
          </button>
        </div>
      </section>
    </div></>
  );
};

export default ServicesPage;