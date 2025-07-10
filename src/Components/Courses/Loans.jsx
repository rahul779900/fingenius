import React, { useState } from 'react';
import './Loans.css';




const Loans = ({ currentPage = 1 }) => {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const comments = [
  { author: 'Alice', text: 'Great explanation! 😊', time: '2 days ago', avatar: 'https://i.pravatar.cc/36?img=1' },
  { author: 'Bob', text: 'Can you cover interest calculation next?', time: '1 day ago', avatar: 'https://i.pravatar.cc/36?img=2' },
  { author: 'Charlie', text: 'Very clear and concise.', time: '5 hours ago', avatar: 'https://i.pravatar.cc/36?img=3' },
  { author: 'Dana', text: 'Helped me understand EMIs 👌', time: '2 hours ago', avatar: 'https://i.pravatar.cc/36?img=4' },
];

// ✅ Single Comment
const Comment = ({ avatar, author, time, text }) => (
  <div className="yt-comment">
    <img src={avatar} alt="avatar" className="yt-avatar" />
    <div className="yt-comment-body">
      <div className="yt-comment-header">
        <span className="yt-author">{author}</span>
        <span className="yt-time">{time}</span>
      </div>
      <div className="yt-comment-text">{text}</div>
      <div className="yt-comment-actions">
        <button>👍</button>
        <button>👎</button>
        <button>Reply</button>
      </div>
    </div>
  </div>
);

// ✅ Comments List
const CommentsSection = () => (
  <div className="comments-section">
    <h2>Comments</h2>
    {comments.map((comment, index) => (
      <Comment
        key={index}
        avatar={comment.avatar}
        author={comment.author}
        time={comment.time}
        text={comment.text}
      />
    ))}
  </div>
);

const VideoWithComments = ({ videoUrl }) => (
  <div className="video-comments-wrapper">
    <div className="video">
      <iframe
        src={videoUrl}
        title="Loan Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <CommentsSection />
  </div>
);
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className='course-content'>
            
              <h1 className='loanh1'>What are loans?</h1>
             <VideoWithComments videoUrl="https://www.youtube.com/embed/mzYwYJT-zsU" />
              <p>A loan is an amount of money borrowed from a lender (such as a bank, financial institution, or individual) that must be repaid over time, usually with interest. The borrower agrees to repay the loan in installments or as a lump sum within a specified period.</p>
              <p><strong>Key Components of a Loan:</strong><br />
                <strong>Principal:</strong> The original amount borrowed.<br />
                <strong>Interest: </strong>The extra cost charged by the lender for borrowing money.<br />
                <strong>Loan Term:</strong> The duration within which the loan must be repaid.<br />
                <strong>Collateral (Optional): </strong>A valuable asset pledged as security for the loan (e.g., property for a home loan).</p>
              <p><strong>Example:</strong></p>
              <p>Imagine you want to buy a gaming laptop, but you don't have enough money. Your friend offers to give you ₹50,000 with a condition—you must return ₹55,000 in six months.</p>
              <ul>
                <li><strong>₹50,000</strong> = Loan amount (Principal)</li>
                <li><strong>₹5,000</strong> = Extra charge (Interest) for borrowing the money</li>
                <li><strong>6 months</strong> = Loan term</li>
              </ul>
              <p>Similarly, banks and financial institutions lend money for bigger needs like buying a house, car, or starting a business, and they charge interest based on the loan type.</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="page-content">
         
            <div className='course-content'>
              <h1>Types of loans</h1>
              <VideoWithComments videoUrl="https://www.youtube.com/embed/hRWZFZnTp28" />

              <p>There are different types of loans based on the purpose of borrowing and the borrower's creditworthiness.</p>
              <ul>
                <li>
                  <strong>Personal loans:</strong> A personal loan is an unsecured loan that you can borrow from a bank, credit union, or online lender to use for various personal expenses.
                  Unlike home or car loans, personal loans do not require collateral (like a property or a vehicle) to secure the loan.
                </li>
                <li>
                  <strong>Key Features of Personal Loans:</strong><br />
                  Unsecured – No need to pledge assets as collateral.<br />
                  Fixed Loan Amount – You borrow a specific sum and repay it over time.<br />
                  Flexible Usage – Can be used for medical bills, weddings, travel, education, or debt consolidation.<br />
                  Fixed Interest Rate – Most personal loans have a fixed rate, meaning your monthly payment remains the same.<br />
                  Short to Medium Repayment Tenure – Ranges from 1 to 5 years in most cases.
                </li>
              </ul>

              <ul>
                <li>
                  <strong>Home loans:</strong> A home loan (also called a mortgage) is a loan taken from a bank or financial institution to purchase, build, or renovate a house.<br />
                  The borrower repays the loan in monthly installments (EMIs), which include both the principal amount and interest.
                </li>
                <li>
                  <strong>Car loans:</strong> A car loan is a type of loan provided by banks or financial institutions to help individuals purchase a car.
                </li>
              </ul>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How to Apply for a Loan? </h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VIIWUAdxv2c?si=yQPzamJ6vBBFymNz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>Applying for a loan involves several steps, depending on the type of loan you need. Here's a step-by-step guide to help you through the process:</p>
              <p><strong>Step 1: </strong>Decide the Type of Loan<br />
                Before applying, identify the loan that best suits your needs:<br />
                ✔ Personal Loan – For emergencies, travel, weddings, etc.<br />
                ✔ Home Loan – To buy a house or property.<br />
                ✔ Car Loan – To purchase a new or used vehicle.<br />
                ✔ Education Loan – To pay for tuition fees and educational expenses.<br />
                ✔ Business Loan – To start or expand a business.</p>

              <p><strong>Step 2:</strong> Check Your Eligibility<br />
                Every lender has specific criteria for loan approval. Here's what they usually check:<br />
                Age: Usually 21 - 60 years<br />
                Income: Regular income from salary or business<br />
                Credit Score: 700+ is preferred for better interest rates<br />
                Employment Status: Salaried, self-employed, or business owner<br />
                Documents: ID proof, address proof, income proof, etc.</p>
              <p><strong>Step 3:</strong> Compare Loan Offers<br />
                Check interest rates, processing fees, and loan terms from different banks and NBFCs. You can compare offers online using loan comparison websites like BankBazaar, PaisaBazaar, or MyLoanCare</p>
              <p><strong>Step 4:</strong> Gather Required Documents<br />
                Most banks ask for:<br />
                ID Proof - Aadhaar Card, PAN Card<br />
                Address Proof - Utility Bill, Passport<br />
                Income Proof - Salary slips, bank statements<br />
                Employment Proof - Offer letter, ITR (for business loans)<br />
                Property Documents - If applying for a home loan</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Loan Terminology (Key Loan Terms) </h1>
              <div className="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/EJHPltmAULA?si=gzR619pVUR8_JB1T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
              <p>Understanding the common terms used in loans:</p>
              <p><strong>Principal Amount in Loans: </strong><br />
                The Principal Amount is the original sum of money that you borrow from a lender. It is the base amount on which interest is calculated.</p>
              <p><strong>Example: </strong><br />
                Imagine you take a ₹1,00,000 loan from a bank to buy a laptop.<br />
                Principal Amount: ₹1,00,000 (This is the actual borrowed amount).<br />
                Interest Rate: 10% per year.<br />
                Loan Tenure: 2 years.<br />
                Over the loan period, the bank charges interest on this ₹1,00,000. Your total repayment amount includes both principal + interest.</p>
              <p><strong>Interest Rate (APR): </strong><br />
                The Interest Rate (APR - Annual Percentage Rate) is the percentage of the principal amount that a lender charges as interest for borrowing money. It determines how much extra you will pay over time.</p>
              <p><strong>EMI (Equated Monthly Installment): </strong></p>
              <p>An EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay your loan. It includes both principal amount (the money borrowed) and interest (the extra charge for borrowing).</p>
            </div>
          </div>
        );

      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Loans</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="loans-container">
      {renderPageContent()}
    </div>
  );
};

export default Loans;