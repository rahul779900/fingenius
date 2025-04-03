import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Loans from "./Loans"; 
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import "./Courses.css"; 
import Banks from "./Banks";
import CreditCards from "./Creditcard";
import Cryptocurrencies from "./Crypto";
import FixedDeposits from "./Fixed";
import GST from "./GST";
import Insurance from "./Insurance";
import MutualFunds from "./Mutual";

const Courses = () => {
  const [selectedTopic, setSelectedTopic] = useState("Loans"); // Default to "Loans"
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const [currentPage, setCurrentPage] = useState(1); // State for current page in topic
  
  const topics = ["Loans", "Banks", "GST", "Mutual Funds", "Cryptocurrencies", "Credit Cards", "Fixed Deposits", "Insurance"];
  
  // Mock data for pages per topic - you would implement this with real content
  const topicPages = {
    "Loans": ["Introduction to Loans", "Types of Loans", "Loan Application Process", "Loan Terminology"],
    "Banks": ["Introduction to Banks", "Types of Banks", "Banking Services"],
    "GST": ["Introduction to GST", "GST Registration", "GST Filing"],
    "Mutual Funds": ["Introduction to Mutual Funds", "Types of Mutual Funds", "Investing in Mutual Funds"],
    "Cryptocurrencies": ["Introduction to Cryptocurrencies", "Types of Cryptocurrencies", "Crypto Trading Basics"],
    "Credit Cards": ["Introduction to Credit Cards", "Types of Credit Cards", "Credit Card Management"],
    "Fixed Deposits": ["Introduction to Fixed Deposits", "FD Interest Rates", "FD Maturity Options"],
    "Insurance": ["Introduction to Insurance", "Types of Insurance", "Insurance Claims Process"],
  };
  
  const currentTopicPages = topicPages[selectedTopic] || ["Introduction"];
  const totalPages = currentTopicPages.length;
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to map selected topic to component key
  const getComponentKey = (topic) => {
    const mapping = {
      "Loans": "Loans",
      "Banks": "Banks",
      "GST": "GST",
      "Mutual Funds": "Mutual",
      "Cryptocurrencies": "Crypto",
      "Credit Cards": "Credit",
      "Fixed Deposits": "Fixed",
      "Insurance": "Insurance"
    };
    return mapping[topic] || topic;
  };

  const componentKey = getComponentKey(selectedTopic);

  return (
    <>
      <Navbar />
      <div className="topic-header">
        {/* Removed the title element with the selectedTopic */}
        <div></div> {/* Empty div to maintain flex layout */}
        {!sidebarOpen && (
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <img src="https://img.icons8.com/?size=100&id=9438&format=png&color=ffffff" alt="menu" />
          </button>
        )}
      </div>
      
      <div className="container">
        <main className="content">
          {componentKey === "Loans" && <Loans currentPage={currentPage} />}
          {componentKey === "Banks" && <Banks currentPage={currentPage} />}
          {componentKey === "Credit" && <CreditCards currentPage={currentPage} />}
          {componentKey === "Crypto" && <Cryptocurrencies currentPage={currentPage} />}
          {componentKey === "Fixed" && <FixedDeposits currentPage={currentPage} />}
          {componentKey === "GST" && <GST currentPage={currentPage} />}
          {componentKey === "Insurance" && <Insurance currentPage={currentPage} />}
          {componentKey === "Mutual" && <MutualFunds currentPage={currentPage} />}
          
          {/* Updated Page Navigation */}
          <div className="page-navigation">
            <div className="nav-buttons">
              <button 
                className={`nav-button prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
                <span>Previous</span>
              </button>
              
              <div className="page-info">
                <span>{currentTopicPages[currentPage - 1]}</span> ({currentPage}/{totalPages})
              </div>
              
              <button 
                className={`nav-button next ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </main>
        {/* Floating Sidebar */}
        <aside className={`sidebar-course ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <button className="close-sidebar" onClick={toggleSidebar}>×</button>
          </div>
          <div className="sidebar-topics-container">
            <ul>
              {topics.map((topic) => (
                <li
                  key={topic}
                  className={selectedTopic === topic ? "active-topic" : ""}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setCurrentPage(1); // Reset to page 1 when changing topics
                    setSidebarOpen(false); // Close sidebar when topic is selected
                  }}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Courses;