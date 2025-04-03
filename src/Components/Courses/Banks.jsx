import React from 'react';
import './Loans.css';

const Banks = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>What are Banks?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/aJJoV0xSDqA?si=rV9jAe2fodb2UAYT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            
              <p>A bank is a financial institution that provides various services such as accepting deposits, lending money, and facilitating transactions. Banks play a crucial role in managing the economy by ensuring the flow of money and credit.</p>
              <p><strong>Key Functions of Banks:</strong><br />
                <strong>Accepting Deposits:</strong> Banks store money in savings, current, and fixed deposit accounts.<br />
                <strong>Providing Loans:</strong> They lend money for personal, business, and housing needs.<br />
                <strong>Facilitating Transactions:</strong> Banks enable payments through checks, online banking, and UPI.<br />
                <strong>Foreign Exchange:</strong> They provide currency exchange and international remittances.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>Types of Banks</h1>
              <p>Banks can be classified into different types based on their function and purpose.</p>
              <ul>
                <li><strong>Central Bank:</strong> Regulates the banking system and controls the money supply (e.g., Reserve Bank of India, Federal Reserve).</li>
                <li><strong>Commercial Banks:</strong> Provide financial services to individuals and businesses (e.g., SBI, HDFC, ICICI).</li>
                <li><strong>Cooperative Banks:</strong> Serve small businesses and rural areas by providing low-interest loans.</li>
                <li><strong>Investment Banks:</strong> Help companies raise capital and manage financial assets.</li>
                <li><strong>Development Banks:</strong> Support infrastructure and industrial development.</li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Banks Work</h1>
              <p>Banks function by managing deposits, lending money, and facilitating transactions. Here's how they operate:</p>
              <p><strong>Step 1:</strong> Accepting Deposits<br />
                Individuals and businesses deposit their money in banks for safekeeping.</p>
              <p><strong>Step 2:</strong> Lending Money<br />
                Banks use deposited funds to provide loans to individuals and businesses, charging interest.</p>
              <p><strong>Step 3:</strong> Facilitating Transactions<br />
                Banks offer services like digital payments, money transfers, and check processing.</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Banking Terminology</h1>
              <p>Understanding key banking terms can help you manage finances effectively.</p>
              <p><strong>Deposit:</strong> Money stored in a bank account.</p>
              <p><strong>Interest Rate:</strong> The percentage earned on deposits or charged on loans.</p>
              <p><strong>Credit Score:</strong> A rating that determines loan eligibility.</p>
              <p><strong>EMI (Equated Monthly Installment):</strong> A fixed monthly payment for loans.</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Banks</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="banks-container">
      {renderPageContent()}
    </div>
  );
};

export default Banks;
