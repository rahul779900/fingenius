import React, { useState, useEffect } from 'react';
import './Services.css';

function Services() {
  const [activeCard, setActiveCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [typedContent, setTypedContent] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  const cardData = [
    {
      suit: '📚',
      number: 'COURSES',
      title: 'Courses',
      content: 'Our platform offers expert-led courses on budgeting, saving, debt control, and investing—designed to build strong financial habits. From beginners to advanced learners, users can progress at their own pace with interactive lessons and quizzes.'
    },
    {
      suit: '🎙',
      number: 'PODCAST',
      title: 'Podcast',
      content: 'Engage with insightful podcasts that break down complex financial topics into relatable stories and tips. From daily money habits to long-term financial planning, our episodes help users learn on-the-go and stay financially inspired.'
    },
    {
      suit: '🎯',
      number: 'POINTS',
      title: 'Subscription & Points',
      content: 'Users can subscribe to unlock premium tools and earn reward points for completing tasks like budgeting, saving, and learning. Points can be redeemed for perks like discounts, consultations, or exclusive financial tools—making money management rewarding.'
    },
    {
      suit: '🎮',
      number: 'GAMES',
      title: 'Games',
      content: 'Gamified learning tools turn financial education into fun, immersive challenges. Users can build virtual budgets, invest in simulations, or plan their future finances in creative games that teach through experience.'
    },
    {
      suit: '🤖',
      number: 'AI BOT',
      title: 'AI Chatbot',
      content: 'An intelligent AI assistant helps track expenses, suggest savings, and provide real-time budgeting tips. The integrated chatbot offers 24/7 support, answering money-related questions and guiding users toward smarter decisions.'
    }
  ];

  useEffect(() => {
    if (modalVisible && activeCard !== null) {
      setTypedContent('');
      setTypingIndex(0);
      
      const typingInterval = setInterval(() => {
        if (typingIndex < cardData[activeCard].content.length) {
          setTypedContent(prev => prev + cardData[activeCard].content[typingIndex]);
          setTypingIndex(prev => prev + 1);
        } else {
          clearInterval(typingInterval);
        }
      }, 20);

      return () => clearInterval(typingInterval);
    }
  }, [modalVisible, activeCard]);

  const handleCardClick = (index) => {
    setActiveCard(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setActiveCard(null);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="brand-logo">
            <span>$</span>
          </div>
          <div className="brand-text">
            <h1 className="navbar-title">Financial Platform</h1>
            <p className="navbar-subtitle">Fingenius</p>
          </div>
        </div>
        <div className="navbar-education">
          Financial Education
        </div>
      </nav>

      <main className="main-container">
        <section className="hero-section">
          <h2 className="hero-title">Master Your Financial Future</h2>
          <p className="hero-subtitle">
            Discover comprehensive financial education tools and resources designed to build wealth, financial literacy, and smart money habits for life
          </p>
        </section>

        <section className="cards-section">
          <div className="cards-hand">
            {cardData.map((card, index) => (
              <div 
                key={index}
                className={`fan-card-container ${activeCard !== null && activeCard !== index ? 'dim' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="fan-card">
                  <div className="card-front">
                    <div className="card-suit">{card.suit}</div>
                    <div className="card-number">{card.number}</div>
                  </div>
                  <div className="card-back">
                    <div className="typing-text">Financial Education</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className={`modal-overlay ${modalVisible ? 'visible' : ''}`} onClick={closeModal}></div>

      <div className={`modal-content ${modalVisible ? 'visible' : ''}`}>
        {activeCard !== null && (
          <>
            <div className="modal-card rotating">
              <div className="card-front">
                <div className="card-suit">{cardData[activeCard].suit}</div>
                <div className="card-number">{cardData[activeCard].number}</div>
              </div>
              <div className="card-back">
                <div className="typing-text">Financial Education</div>
              </div>
            </div>

            <div className="info-panel">
              <h3>{cardData[activeCard].title}</h3>
              <p>{typedContent}</p>
            </div>
          </>
        )}

        <button className="close-button" onClick={closeModal}></button>
      </div>
    </div>
  );
}

export default Services ;