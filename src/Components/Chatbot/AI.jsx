import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./AI.css"; // Changed to a separate CSS file to avoid conflicts
import Navbar from "../Navbar/Navbar1";

const AI = () => {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState([]);
  const [chatHistory, setChatHistory] = useState(
    JSON.parse(localStorage.getItem("chatHistory")) || []
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fix: Properly format the API URL with template literals
  const apiKey = "AIzaSyBbxOA80wOUleBR4YuHxIYbqxGzFTaohFk";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

  const [placeholderText, setPlaceholderText] = useState("");
  const placeholderMessages = [
    "How can I manage my monthly expenses?",
    "What is the best way to save for a vacation?",
    "How do I calculate my monthly EMIs?",
  ];

  useEffect(() => {
    let charIndex = 0;
    let messageIndex = 0;
    let isDeleting = false;
    let typeTimer = null;

    const typeEffect = () => {
      const currentMessage = placeholderMessages[messageIndex];
      const updateText = isDeleting
        ? currentMessage.substring(0, charIndex - 1)
        : currentMessage.substring(0, charIndex + 1);

      setPlaceholderText(updateText);

      if (!isDeleting && charIndex === currentMessage.length) {
        // Pause at end of typing
        typeTimer = setTimeout(() => (isDeleting = true), 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % placeholderMessages.length;
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      typeTimer = setTimeout(typeEffect, isDeleting ? 50 : 100);
    };

    typeEffect();

    // Clean up timer on component unmount
    return () => {
      if (typeTimer) clearTimeout(typeTimer);
    };
  }, []);

  const fetchData = async (userPrompt) => {
    const requestBody = {
      contents: [{ parts: [{ text: userPrompt }] }],
    };
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };

  const handlePromptSubmit = async () => {
    if (!prompt.trim()) return;

    setError("");
    setLoading(true);

    // Add user question to responses immediately for better UX
    const newUserQuestion = {
      question: prompt,
      answer: "",
      isLoading: true
    };

    setResponses(prev => [...prev, newUserQuestion]);

    try {
      const data = await fetchData(prompt);
      if (
        data.candidates &&
        data.candidates.length > 0 &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts.length > 0
      ) {
        const newResponse = {
          question: prompt,
          answer: data.candidates[0].content.parts[0].text,
          isLoading: false
        };

        // Update responses by replacing the loading response
        setResponses(prev =>
          prev.map(item =>
            item.question === prompt && item.isLoading ? newResponse : item
          )
        );
        setPrompt("");

        // Save to chat history
        const updatedHistory = [newResponse, ...chatHistory.filter(item => item.question !== prompt)];
        setChatHistory(updatedHistory);
        localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
      } else {
        setError("Unexpected response structure.");
        // Remove the loading message
        setResponses(prev => prev.filter(item => !(item.question === prompt && item.isLoading)));
      }
    } catch (err) {
      setError("Failed to fetch data from the API.");
      console.error(err);
      // Remove the loading message
      setResponses(prev => prev.filter(item => !(item.question === prompt && item.isLoading)));
    } finally {
      setLoading(false);
    }
  };

  // Function to handle gallery image upload
  const handleGalleryUpload = () => {
    alert("Gallery upload functionality coming soon!");
  };

  // Function to handle voice input
  const handleVoiceInput = () => {
    alert("Voice recognition feature coming soon!");
  };

  // Delete chat history item
  const handleDeleteChat = (index) => {
    const updatedHistory = chatHistory.filter((_, i) => i !== index);
    setChatHistory(updatedHistory);
    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
  };

  // Load chat from history
  const loadChatFromHistory = (chat) => {
    setResponses([chat]);
    // Close sidebar on mobile after selecting a chat
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  // Toggle sidebar visibility (for mobile and desktop)
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="ai-container">
        {/* Toggle button - only visible when sidebar is closed */}
        {!sidebarOpen && (
          <div className="ai-toggle-button" onClick={toggleSidebar}>
            <img src="https://img.icons8.com/?size=100&id=97837&format=png&color=ffffff" alt="Toggle sidebar" />
          </div>
        )}

        {/* Sidebar with Chat History */}
        <div className={`ai-chat-history ${sidebarOpen ? 'active' : ''}`}>
          <div className="ai-chat-history-header">
            <h2>Chat History</h2>
            {/* Close button - only visible when sidebar is open */}
            {sidebarOpen && (
              <div className="ai-close-button" onClick={toggleSidebar}>
                <img src="https://img.icons8.com/?size=100&id=67884&format=png&color=ffffff" alt="Close sidebar" />
              </div>
            )}
          </div>
          <div className="ai-chat-list">
            {chatHistory.length === 0 ? (
              <p className="ai-empty-history">No chat history yet</p>
            ) : (
              chatHistory.map((chat, index) => (
                <div key={index} className="ai-chat-item">
                  <span
                    className="ai-chat-question"
                    onClick={() => loadChatFromHistory(chat)}
                  >
                    {chat.question.length > 30 ? chat.question.substring(0, 30) + "..." : chat.question}
                  </span>
                  <button
                    className="ai-delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteChat(index);
                    }}
                  >
                    X
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className={`ai-main ${sidebarOpen && window.innerWidth > 768 ? 'shifted' : ''}`}>
          <div className="ai-main-container">
            <div className="ai-response-container">
              {error && <div className="ai-error-message">{error}</div>}
              {responses.length === 0 ? (
                <div className="ai-welcome-message">
                  <h2>Welcome to FINGENIUS AI Assistant</h2>
                  <p>Ask me anything about finance, budgeting, or investments!</p>
                </div>
              ) : (
                responses.map((res, index) => (
                  <div key={index} className="ai-response-box">
                    <div className="ai-user-question">
                      <strong>Q: {res.question}</strong>
                    </div>
                    <div className="ai-bot-response">
                      {res.isLoading ? (
                        <div className="ai-loader">
                          <hr />
                          <hr />
                          <hr />
                        </div>
                      ) : (
                        <ReactMarkdown>{res.answer}</ReactMarkdown>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="ai-main-bottom">
              <div className="ai-search-box">
                <input
                  onChange={(e) => setPrompt(e.target.value)}
                  value={prompt}
                  type="text"
                  placeholder={placeholderText}
                  onKeyPress={(e) => e.key === "Enter" && handlePromptSubmit()}
                />
                <div className="ai-icon-container">
                  <img src="https://img.icons8.com/?size=100&id=sJ2yMrw2VUAC&format=png&color=ffffff" alt="Gallery" onClick={handleGalleryUpload} />
                  <img src="https://img.icons8.com/?size=100&id=9622&format=png&color=ffffff" alt="Mic" onClick={handleVoiceInput} />
                  <img src="https://img.icons8.com/?size=100&id=7874&format=png&color=ffffff" alt="Send" onClick={handlePromptSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI;