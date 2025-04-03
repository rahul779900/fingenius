import React from 'react';
import './Loans.css';

const CreditCards = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>What are Credit Cards?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SnBu2_l_sZ0?si=lFMhq1W0ipaIKwux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>A credit card is a financial tool issued by banks or financial institutions that allows you to borrow funds to make purchases or withdraw cash up to a certain credit limit. Credit cards offer flexibility in payments, and they often come with rewards, benefits, and protections.</p>
              <p><strong>Key Features of Credit Cards:</strong><br />
                <strong>Credit Limit:</strong> The maximum amount you can borrow on the card.<br />
                <strong>Interest Rates:</strong> The percentage charged on outstanding balances if not paid off in full.<br />
                <strong>Minimum Payment:</strong> The minimum amount you need to pay to keep the account in good standing.<br />
                <strong>Credit Score Impact:</strong> Credit cards can help build or affect your credit score based on how well you manage them.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Credit Cards Work</h1>
              <p>Credit cards allow you to borrow money up to a certain limit to make purchases or cash withdrawals. Here's how they work:</p>
              <p><strong>Step 1: Credit Limit</strong><br />
                When you’re approved for a credit card, you’re given a credit limit, which is the maximum amount you can spend on the card.</p>
              <p><strong>Step 2: Making Purchases</strong><br />
                You can use your credit card to make purchases at stores, online, or withdraw cash from ATMs. The amount you spend reduces your available credit.</p>
              <p><strong>Step 3: Statement and Minimum Payment</strong><br />
                Each month, you’ll receive a statement that lists all the purchases and payments made on the card. You must make at least the minimum payment to avoid penalties and interest.</p>
              <p><strong>Step 4: Paying Off Your Balance</strong><br />
                If you pay off your balance in full by the due date, you avoid paying interest on your purchases. If not, you’ll be charged interest on the remaining balance.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Types of Credit Cards</h1>
              <p>There are several types of credit cards, each offering different benefits and features. Here are some of the most common types:</p>
              <ul>
                <li><strong>Standard Credit Cards:</strong> Basic cards with no extra perks, typically used for everyday purchases.</li>
                <li><strong>Rewards Credit Cards:</strong> Cards that offer points, cashback, or miles for every purchase. These can be redeemed for travel, gifts, or statement credits.</li>
                <li><strong>Travel Credit Cards:</strong> Designed for frequent travelers, these cards offer benefits like travel insurance, airport lounge access, and bonus points for travel-related purchases.</li>
                <li><strong>Balance Transfer Credit Cards:</strong> Cards that offer low or 0% introductory APR for balance transfers, helping you pay off high-interest debt.</li>
                <li><strong>Secured Credit Cards:</strong> Cards that require a cash deposit as collateral. These are usually for individuals looking to build or rebuild their credit.</li>
                <li><strong>Business Credit Cards:</strong> Cards tailored for business expenses, offering rewards, expense tracking, and higher credit limits.</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Benefits of Using Credit Cards</h1>
              <p>Credit cards provide a variety of benefits that can make your financial life easier. Some key advantages include:</p>
              <ul>
                <li><strong>Build Credit History:</strong> Using a credit card responsibly helps you build a positive credit history, which can improve your credit score.</li>
                <li><strong>Convenience:</strong> Credit cards offer an easy way to pay for goods and services both online and in person, without carrying cash.</li>
                <li><strong>Rewards and Cashback:</strong> Many cards offer rewards like points, miles, or cashback for purchases, which can be redeemed for discounts or gifts.</li>
                <li><strong>Purchase Protection:</strong> Many credit cards offer protections like extended warranties, purchase protection, and fraud detection.</li>
                <li><strong>Emergency Access to Funds:</strong> Credit cards can be a lifesaver in emergencies when you need immediate access to funds.</li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Risks of Using Credit Cards</h1>
              <p>While credit cards offer many benefits, they also come with potential risks. Here are some important risks to be aware of:</p>
              <ul>
                <li><strong>High Interest Rates:</strong> If you carry a balance from month to month, you’ll be charged high interest rates, which can make your debt harder to pay off.</li>
                <li><strong>Debt Accumulation:</strong> Using credit cards irresponsibly can lead to debt accumulation, especially if you only make minimum payments.</li>
                <li><strong>Fees:</strong> Many credit cards come with annual fees, late payment fees, or foreign transaction fees, which can add up if you're not careful.</li>
                <li><strong>Impact on Credit Score:</strong> If you don’t pay your bills on time or max out your credit limit, your credit score could drop, affecting your ability to get loans or other credit cards.</li>
                <li><strong>Fraud Risk:</strong> Credit cards are susceptible to fraud, and unauthorized transactions can sometimes take time to resolve, leaving you at risk of losing money.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Credit Cards</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="credit-cards-container">
      {renderPageContent()}
    </div>
  );
};

export default CreditCards;
