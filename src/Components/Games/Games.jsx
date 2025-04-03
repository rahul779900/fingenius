import React, { useState, useEffect } from 'react';
import './Games.css'; // Renamed CSS file to avoid conflicts
import Navbar from '../Navbar/Navbar';

const DailyQuiz = () => {
    // Sample questions array with 10 questions
    const questions = [
        {
            id: 1,
            text: "What is the 'Rule of 72' used for in finance?",
            options: [
                { id: 'A', text: 'Calculating tax deductions' },
                { id: 'B', text: 'Estimating how long it takes to double your money' },
                { id: 'C', text: 'Determining optimal asset allocation' },
                { id: 'D', text: 'Setting retirement savings goals' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 2,
            text: "Which investment typically has the highest long-term returns?",
            options: [
                { id: 'A', text: 'Savings accounts' },
                { id: 'B', text: 'Government bonds' },
                { id: 'C', text: 'Stocks' },
                { id: 'D', text: 'Certificates of deposit' }
            ],
            correctAnswer: 'C'
        },
        {
            id: 3,
            text: "What does 'ETF' stand for in investing?",
            options: [
                { id: 'A', text: 'Electronic Transfer of Funds' },
                { id: 'B', text: 'Equity Trust Fund' },
                { id: 'C', text: 'Exchange-Traded Fund' },
                { id: 'D', text: 'Extended Tax Form' }
            ],
            correctAnswer: 'C'
        },
        {
            id: 4,
            text: "What is the debt-to-income ratio that most mortgage lenders consider acceptable?",
            options: [
                { id: 'A', text: 'Under 43%' },
                { id: 'B', text: 'Under 60%' },
                { id: 'C', text: 'Under 25%' },
                { id: 'D', text: 'Under 75%' }
            ],
            correctAnswer: 'A'
        },
        {
            id: 5,
            text: "What is dollar-cost averaging?",
            options: [
                { id: 'A', text: 'Converting international currencies at the best rate' },
                { id: 'B', text: 'Investing a fixed amount at regular intervals' },
                { id: 'C', text: 'Maintaining a 50/50 balance of stocks and bonds' },
                { id: 'D', text: 'Buying stocks when prices fall below their average' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 6,
            text: "Which of these is NOT considered one of the three major credit bureaus?",
            options: [
                { id: 'A', text: 'Experian' },
                { id: 'B', text: 'TransUnion' },
                { id: 'C', text: 'Equifax' },
                { id: 'D', text: 'FICO' }
            ],
            correctAnswer: 'D'
        },
        {
            id: 7,
            text: "What is a 'bear market' in investing?",
            options: [
                { id: 'A', text: 'A market where prices are rising' },
                { id: 'B', text: 'A market dominated by aggressive investors' },
                { id: 'C', text: 'A market where prices are falling' },
                { id: 'D', text: 'A market with high trading volume' }
            ],
            correctAnswer: 'C'
        },
        {
            id: 8,
            text: "If inflation is 3% and your savings account pays 1% interest, what happens to your purchasing power?",
            options: [
                { id: 'A', text: 'It increases by 1%' },
                { id: 'B', text: 'It decreases by 2%' },
                { id: 'C', text: 'It stays the same' },
                { id: 'D', text: 'It increases by 3%' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 9,
            text: "What is the primary purpose of a 401(k) plan?",
            options: [
                { id: 'A', text: 'Short-term savings for emergencies' },
                { id: 'B', text: 'Retirement savings' },
                { id: 'C', text: 'College education funding' },
                { id: 'D', text: 'Health care expense coverage' }
            ],
            correctAnswer: 'B'
        },
        {
            id: 10,
            text: "What is the 'FIRE' movement in personal finance?",
            options: [
                { id: 'A', text: 'Fighting Inflation with Regular Earnings' },
                { id: 'B', text: 'Financial Independence, Retire Early' },
                { id: 'C', text: 'Federal Interest Rate Equilibrium' },
                { id: 'D', text: 'Focused Investment Return Enhancement' }
            ],
            correctAnswer: 'B'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showScorePopup, setShowScorePopup] = useState(false);
    const [totalQuestions, setTotalQuestions] = useState(10);

    // Function to change question status on click
    const changeQuestionStatus = (questionNumber) => {
        setCurrentQuestion(questionNumber);
    };

    // Function to navigate to previous or next question
    const navigateQuestion = (direction) => {
        const newQuestion = currentQuestion + direction;
        if (newQuestion >= 1 && newQuestion <= totalQuestions) {
            setCurrentQuestion(newQuestion);
        }
    };

    // Function to handle option selection
    const handleOptionSelect = (option) => {
        setUserAnswers({
            ...userAnswers,
            [currentQuestion]: option
        });

        // Mark current question as answered if not already
        if (!answeredQuestions.includes(currentQuestion)) {
            setAnsweredQuestions([...answeredQuestions, currentQuestion]);
        }
    };

    // Function to handle quiz submission
    const handleSubmit = () => {
        // Calculate score
        let totalScore = 0;
        for (let i = 1; i <= totalQuestions; i++) {
            if (userAnswers[i] === questions[i - 1].correctAnswer) {
                totalScore += 1;
            }
        }
        setScore(totalScore);
        setQuizSubmitted(true);
        setShowScorePopup(true);
    };

    // Function to reset the quiz
    const resetQuiz = () => {
        setCurrentQuestion(1);
        setAnsweredQuestions([]);
        setUserAnswers({});
        setQuizSubmitted(false);
        setScore(0);
        setShowScorePopup(false);
    };

    // New function to close popup without resetting
    const closePopup = () => {
        setShowScorePopup(false);
    };

    // Function to check if answer is wrong
    const isWrongAnswer = (questionNumber) => {
        return quizSubmitted &&
            userAnswers[questionNumber] &&
            userAnswers[questionNumber] !== questions[questionNumber - 1].correctAnswer;
    };

    // Function to create score message based on score
    const getScoreMessage = () => {
        const percentage = (score / totalQuestions) * 100;
        if (percentage >= 80) {
            return "Excellent! You've mastered this topic.";
        } else if (percentage >= 60) {
            return "Good job! Keep practicing to improve.";
        } else if (percentage >= 40) {
            return "Not bad! Keep learning to get better.";
        } else {
            return "Keep learning to improve your knowledge.";
        }
    };

    return (
        <>
        <Navbar/>
        <div className="daily-quiz-container">
            <div className="daily-quiz-header">
                <h2>Daily Quiz</h2>
                {quizSubmitted && <h3>Score: {score}/{totalQuestions}</h3>}
            </div>

            <div className="daily-quiz-main-content">
                <div className="daily-quiz-question-area">
                    <div className="daily-quiz-question-title">Question {currentQuestion}</div>

                    <div className="daily-quiz-question-text">
                        {questions[currentQuestion - 1].text}
                    </div>

                    <ul className="daily-quiz-options">
                        {questions[currentQuestion - 1].options.map((option) => (
                            <li
                                key={option.id}
                                className={`daily-quiz-option ${userAnswers[currentQuestion] === option.id ? 'selected' : ''}`}
                                onClick={() => !quizSubmitted && handleOptionSelect(option.id)}
                            >
                                <input
                                    type="radio"
                                    id={`option-${option.id}`}
                                    name="answer"
                                    checked={userAnswers[currentQuestion] === option.id}
                                    onChange={() => {}}
                                    disabled={quizSubmitted}
                                />
                                <label htmlFor={`option-${option.id}`}>{option.id}. {option.text}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="daily-quiz-sidebar">
                    <h3 className="daily-quiz-section-header">Questions</h3>

                    <div className="daily-quiz-question-grid">
                        {Array.from({ length: totalQuestions }, (_, index) => (
                            <div
                                key={index + 1}
                                className={`daily-quiz-question-number 
                                    ${index + 1 === currentQuestion ? 'current' : ''} 
                                    ${answeredQuestions.includes(index + 1) ? 'answered' : ''} 
                                    ${isWrongAnswer(index + 1) ? 'wrong-answer' : ''}`}
                                onClick={() => changeQuestionStatus(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="daily-quiz-footer">
                <div></div> {/* Empty div to maintain spacing */}

                <div className="daily-quiz-navigation">
                    <button
                        className="daily-quiz-btn daily-quiz-btn-primary"
                        onClick={() => navigateQuestion(-1)}
                        disabled={currentQuestion === 1 || quizSubmitted}
                    >
                        Previous
                    </button>
                    <button
                        className="daily-quiz-btn daily-quiz-btn-primary"
                        onClick={() => navigateQuestion(1)}
                        disabled={currentQuestion === totalQuestions || quizSubmitted}
                    >
                        Next
                    </button>
                </div>

                <button
                    className="daily-quiz-btn daily-quiz-btn-success"
                    onClick={handleSubmit}
                    disabled={quizSubmitted || answeredQuestions.length < totalQuestions}
                >
                    Submit Quiz
                </button>
            </div>

            <div className="daily-quiz-legend">
                <div className="daily-quiz-legend-item">
                    <div className="daily-quiz-legend-color current-color"></div>
                    <span>Current</span>
                </div>
                <div className="daily-quiz-legend-item">
                    <div className="daily-quiz-legend-color not-attempted-color"></div>
                    <span>Not Attempted</span>
                </div>
                <div className="daily-quiz-legend-item">
                    <div className="daily-quiz-legend-color completed-color"></div>
                    <span>Completed</span>
                </div>
                <div className="daily-quiz-legend-item">
                    <div className="daily-quiz-legend-color wrong-color"></div>
                    <span>Wrong Answer</span>
                </div>
            </div>

            {/* Score Popup with Close Button */}
            {showScorePopup && (
                <div className="daily-quiz-score-popup-overlay">
                    <div className="daily-quiz-score-popup">
                        {/* Close button */}
                        <button className="daily-quiz-close-popup-btn" onClick={closePopup}>
                            <img src="https://img.icons8.com/?size=100&id=vu5kHwGC4PNb&format=png&color=ffffff" alt="Close" />
                        </button>

                        <h2>Quiz Completed!</h2>
                        <div className="daily-quiz-trophy-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                <path d="M4 22h16" />
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                            </svg>
                        </div>
                        <div className="daily-quiz-score-text">Your Score: {score}/{totalQuestions}</div>
                        <div className="daily-quiz-score-message">{getScoreMessage()}</div>
                        <button className="daily-quiz-play-again-btn" onClick={resetQuiz}>Play Again</button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

export default DailyQuiz;