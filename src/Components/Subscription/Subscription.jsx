// Subscription.jsx
import React, { useState } from 'react';
import { Menu, X, User, Coins, Star, Users, Search, UserCheck } from 'lucide-react';
import './Subscription.css';

const pricingPlans = [
  {
    id: 'public',
    name: 'Public Plan',
    price: 500,
    features: ['Basic Features', 'Email Support', '1 User Account', 'Basic Analytics', 'Standard Security'],
  },
  {
    id: 'institute',
    name: 'Family Plan',
    price: 1500,
    features: ['Advanced Features', 'Priority Support', '10 User Accounts', 'Advanced Analytics', 'Custom Branding'],
    popular: true,
  },
  {
    id: 'organization',
    name: 'Organization Plan',
    price: 7400,
    features: ['All Features', '24/7 Support', 'Unlimited Users', 'Advanced Analytics', 'Custom Integration'],
  },
];

const Subscription = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [userPoints] = useState(870);
  const [userName] = useState('John Doe');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const PricingCard = ({ plan }) => {
    const isHovered = hoveredCard === plan.id;
    const canRedeem = userPoints >= plan.price;

    return (
      <div
        className={`pricing-card ${isHovered ? 'pricing-card-hover' : 'pricing-card-normal'} ${plan.popular ? 'pricing-card-popular' : ''}`}
        onMouseEnter={() => setHoveredCard(plan.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {plan.popular && (
          <div className="popular-badge">
            <Star className="star-icon" />
            <span>Most Popular</span>
          </div>
        )}

        <div className="card-icon-container">
          <div className={`card-icon ${isHovered ? 'card-icon-hover' : 'card-icon-normal'}`}>
            {plan.id === 'public' && <User className="icon" />}
            {plan.id === 'institute' && <UserCheck className="icon" />}
            {plan.id === 'organization' && <Users className="icon" />}
          </div>
        </div>

        <h3 className="card-title">{plan.name}</h3>

        <div className="card-price">
          <span className="price-amount">₹{plan.price.toLocaleString()}</span>
          <span className="price-period">/month</span>
        </div>

        <ul className="features-container">
          {plan.features.map((feature, index) => (
            <li key={index} className="feature-item">
              <div className={`feature-dot ${isHovered ? 'feature-dot-hover' : 'feature-dot-normal'}`} />
              <span className={`feature-text ${isHovered ? 'feature-text-hover' : ''}`}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="card-actions">
          <button className={`action-button ${isHovered ? 'primary-button-hover' : 'primary-button-normal'}`}>
            Choose Plan
          </button>

          <button
            className={`secondary-button ${canRedeem ? 'secondary-button-enabled' : 'secondary-button-disabled'}`}
            disabled={!canRedeem}
          >
            <Coins className="coins-icon" />
            <span>Redeem {plan.price} Points</span>
          </button>

          {!canRedeem && (
            <div className="points-needed">
              Need {plan.price - userPoints} more points
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="subscription-container">
      <div className="background-overlay"></div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Dashboard</h2>
            <button onClick={toggleSidebar} className="close-button">
              <X className="close-icon" />
            </button>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="nav-item nav-item-active">
              <Coins className="nav-icon" />
              <span>Pricing Plans</span>
            </a>
            <a href="#" className="nav-item nav-item-inactive">
              <User className="nav-icon" />
              <span>Account</span>
            </a>
            <a href="#" className="nav-item nav-item-inactive">
              <Star className="nav-icon" />
              <span>Billing</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ transition: 'all 0.3s', marginLeft: sidebarOpen ? '256px' : '0' }}>
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <button onClick={toggleSidebar} className="menu-button">
                <Menu className="menu-icon" />
              </button>
              <div className="search-bar">
                <Search className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
              </div>
            </div>

            <div className="header-right">
              <div className="app-name">Fin Genius</div>

              <div className="profile-section">
                <button onClick={toggleMenu} className="profile-button">
                  <div className="profile-avatar">
                    <User className="avatar-icon" />
                  </div>
                  <div className="profile-info">
                    <div className="profile-name">{userName}</div>
                    <div className="profile-points">
                      <Coins className="points-icon" />
                      <span>{userPoints.toLocaleString()} pts</span>
                    </div>
                  </div>
                </button>

                {menuOpen && (
                  <div className="profile-menu">
                    <div className="profile-menu-header">
                      <div className="profile-menu-avatar">
                        <User className="menu-avatar-icon" />
                      </div>
                      <div>
                        <div className="profile-menu-name">{userName}</div>
                        <div className="profile-menu-status">Premium User</div>
                      </div>
                    </div>
                    <div className="profile-menu-divider"></div>
                    <div className="points-card">
                      <div className="points-card-label">
                        <Coins className="points-card-icon" />
                        <span>Points Balance</span>
                      </div>
                      <div className="points-card-value">{userPoints.toLocaleString()}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Section */}
        <main className="main-content">
          <div className="content-container">
            <div className="hero-section">
              <h1 className="hero-title">Choose Your Perfect Plan</h1>
              <p className="hero-subtitle">A Rupee Earned is A Rupee Saved !!</p>
              <p className="hero-description">
                Don't save money after you spent, but spend the money which you have saved.
              </p>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>

            <div className="points-balance">
              <div className="points-container">
                <Coins className="balance-icon" />
                <span className="points-text">
                  Your Points Balance: <span className="points-amount">{userPoints.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Subscription;
