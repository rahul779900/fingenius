import React, { useState } from 'react';
import './Games.css';

const quizData = [
  {
    question: "What does ROI stand for in finance?",
    options: ["Return on Investment", "Rate of Inflation", "Revenue on Income", "Ratio of Interest"],
    answer: 0,
    hints: [
      "It's a metric used to evaluate the efficiency of an investment.",
      "It compares the gain from investment relative to its cost.",
      "Commonly expressed as a percentage."
    ]
  },
  {
    question: "Which document summarizes a company's assets, liabilities, and equity?",
    options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Annual Report"],
    answer: 1,
    hints: [
      "It shows a financial snapshot at a specific point in time.",
      "Includes what a company owns and owes.",
      "The accounting equation is key to it."
    ]
  },
  {
    question: "What is the term for a period of economic decline?",
    options: ["Inflation", "Recession", "Expansion", "Boom"],
    answer: 1,
    hints: [
      "Usually lasts two or more quarters.",
      "Characterized by reduced GDP.",
      "May result in job losses and lower production."
    ]
  },
  {
    question: "Which instrument represents ownership in a company?",
    options: ["Bond", "Stock", "Debenture", "Option"],
    answer: 1,
    hints: [
      "It gives voting rights to shareholders.",
      "Traded in equity markets.",
      "Can pay dividends."
    ]
  },
  {
    question: "What does diversification help reduce?",
    options: ["Returns", "Inflation", "Risk", "Taxes"],
    answer: 2,
    hints: [
      "It's a key concept in portfolio management.",
      "It involves spreading investments across various assets.",
      "Prevents heavy loss from one bad investment."
    ]
  },
  {
    question: "Which type of market is rising steadily?",
    options: ["Bear Market", "Bull Market", "Stagnant Market", "Correction"],
    answer: 1,
    hints: [
      "Symbolized by upward-trending charts.",
      "Opposite of a bear market.",
      "Usually driven by investor confidence."
    ]
  },
  {
    question: "What does a high P/E ratio generally indicate?",
    options: ["Stock is undervalued", "High earnings", "Investor optimism", "High dividend yield"],
    answer: 2,
    hints: [
      "It compares stock price to earnings per share.",
      "Higher values can mean high growth expectations.",
      "Used for stock valuation."
    ]
  },
  {
    question: "Which investment is typically considered low risk?",
    options: ["Cryptocurrency", "Stocks", "Government Bonds", "Options"],
    answer: 2,
    hints: [
      "Issued by national governments.",
      "Yields are lower, but stable.",
      "Common in conservative portfolios."
    ]
  },
  {
    question: "What is compound interest?",
    options: ["Interest on initial principal only", "Interest on previous interest", "Fixed interest rate", "Annual fee"],
    answer: 1,
    hints: [
      "It allows money to grow faster over time.",
      "Einstein reportedly called it the 8th wonder of the world.",
      "Applies to savings and investments."
    ]
  },
  {
    question: "What does a credit score represent?",
    options: ["Your income level", "Your savings history", "Your creditworthiness", "Your tax record"],
    answer: 2,
    hints: [
      "Used by lenders.",
      "Ranges between 300-850 typically.",
      "Based on debt history, repayments, and usage."
    ]
  }
];

const GamesPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [solvedHints, setSolvedHints] = useState([]);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [activeHintIndex, setActiveHintIndex] = useState(null);
  const [puzzleAnswer, setPuzzleAnswer] = useState('');
  const [error, setError] = useState('');
  const [score, setScore] = useState(null);

  const { question, options, hints } = quizData[currentQuestion];

  const handleOptionClick = (index) => {
    const updated = [...selectedOptions];
    updated[currentQuestion] = index;
    setSelectedOptions(updated);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSolvedHints([]);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSolvedHints([]);
    }
  };

  const handleHintClick = (index) => {
    if (!solvedHints.includes(index)) {
      setActiveHintIndex(index);
      setShowPuzzle(true);
      setPuzzleAnswer('');
      setError('');
    }
  };

  const handleSubmitPuzzle = () => {
    if (puzzleAnswer.trim().toLowerCase() === 'finance') {
      setSolvedHints((prev) => [...prev, activeHintIndex]);
      setShowPuzzle(false);
    } else {
      setError('Incorrect answer. Try again.');
    }
  };

  const handleClosePuzzle = () => setShowPuzzle(false);

  const handleSubmitQuiz = () => {
    const correct = quizData.filter((q, i) => q.answer === selectedOptions[i]);
    setScore(correct.length);
  };

  return (
    <div className="quiz-page-wrapper">
      <div className="quiz-header">
       
        {score !== null && (
          <div className="quiz-score">✅ You scored {score} </div>
        )}
      </div>

      <div className="quiz-card">
        <div className="question-container">
          <div className="question-text">{question}</div>
          <ul className="option-list">
            {options.map((opt, idx) => (
              <li
                key={idx}
                className={`option-item ${selectedOptions[currentQuestion] === idx ? 'active' : ''}`}
                onClick={() => handleOptionClick(idx)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>

        <div className="hint-container">
          <h4>💡 Hints</h4>
          <div className="hint-stack">
            {hints.map((hint, index) => (
              <div
                key={index}
                className={`hint-card ${solvedHints.includes(index) ? 'solved' : ''}`}
                onClick={() => handleHintClick(index)}
              >
                {solvedHints.includes(index) ? hint : 'Tap to Unlock'}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation-wrapper">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}>← Previous</button>
        <button onClick={handleNext} disabled={currentQuestion === quizData.length - 1}>Next →</button>
        <button className="submit-btn" onClick={handleSubmitQuiz}>Submit</button>
      </div>

      {showPuzzle && (
        <div className="puzzle-overlay">
          <div className="puzzle-modal">
            <h3>Unlock Hint</h3>
            <p>Solve the riddle: What’s the theme of this quiz?</p>
            <input
              type="text"
              value={puzzleAnswer}
              onChange={(e) => setPuzzleAnswer(e.target.value)}
              placeholder="Enter keyword"
            />
            {error && <div className="error-text">{error}</div>}
            <div className="puzzle-actions">
              <button onClick={handleSubmitPuzzle}>Unlock</button>
              <button onClick={handleClosePuzzle}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesPage;