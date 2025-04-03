import React, { useState } from 'react';
import './Subscription.css';
import Navbar from '../Navbar/Navbar';

const Subscription = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <>
      <Navbar />
      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Pricing Made Simple</h1>
          <p>Find the perfect plan to match your financial goals.</p>
        </div>



        <div className="pricing-plans">
          <div className="pricing-card">
            <h2>Free Plan</h2>
            <p>Get started with basic financial education</p>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">0</span>
              <span className="period">/month</span>
            </div>

            <ul className="features-list">
              <li>Access to 3 basic courses</li>
              <li>Limited podcast episodes</li>
              <li>Basic financial quizzes</li>
              <li>5 AI chatbot questions per day</li>
            </ul>

            <button className="action-button">Get Started</button>
          </div>

          <div className="pricing-card premium">
            <h2>Premium Plan</h2>
            <p>Complete access to all financial resources</p>
            <div className="price">
              <span className="currency">₹</span>
              <span className="amount">800</span>
              <span className="period">/month</span>
            </div>

            <ul className="features-list">
              <li>Access to all courses and updates</li>
              <li>Full podcast library with early access</li>
              <li>Advanced financial quizzes and games</li>
              <li>Unlimited AI chatbot questions</li>
              <li>Monthly financial webinars</li>
              <li>Investment portfolio analysis</li>
            </ul>

            <button className="action-button subscribe">Subscribe Now</button>
          </div>

          <div className="pricing-card">
            <h2>Enterprise Plan</h2>
            <p>Customized solutions for organizations</p>
            <div className="price">
              <span className="custom-text">Custom</span>
              <span className="period">/pricing</span>
            </div>

            <ul className="features-list">
              <li>All Premium Plan features</li>
              <li>Custom course development</li>
              <li>Dedicated financial advisor</li>
              <li>Employee financial wellness program</li>
              <li>Branded learning portal</li>
              <li>Advanced analytics and reporting</li>
            </ul>

            <button className="action-button">Contact Sales</button>
          </div>
        </div>
      </div>
      </>
  );
};

export default Subscription;