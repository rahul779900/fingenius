import React from 'react';
import './Loans.css';

const FixedDeposits = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>What are Fixed Deposits?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Ri-mAP0YU1I?si=CUQuZ7IOJ7UmBHyq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>A Fixed Deposit (FD) is a financial instrument offered by banks or financial institutions where an individual deposits a lump sum amount for a fixed tenure at a predetermined interest rate. Fixed Deposits provide a safe and predictable way of saving money and earning interest.</p>
              <p><strong>Key Features of Fixed Deposits:</strong><br />
                <strong>Interest Rates:</strong> Fixed deposits offer a fixed rate of interest, which is higher than regular savings accounts.<br />
                <strong>Tenure:</strong> The investment is made for a fixed tenure, typically ranging from a few months to several years.<br />
                <strong>Safety:</strong> Fixed deposits are considered low-risk investments because they are not subject to market fluctuations.<br />
                <strong>Premature Withdrawal:</strong> FDs can be withdrawn before the maturity date, though penalties may apply.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Fixed Deposits Work</h1>
              <p>Fixed deposits are simple investment options where you deposit a sum of money with a bank or financial institution for a specific period. Here's how they work:</p>
              <p><strong>Step 1: Choose the Amount and Tenure</strong><br />
                The investor chooses the amount of money they want to invest and the tenure for which the FD will be held. The interest rate is fixed for the entire tenure.</p>
              <p><strong>Step 2: Interest Payment</strong><br />
                The interest on FDs can be paid periodically (monthly, quarterly, etc.) or at the time of maturity, depending on the investor's preference.</p>
              <p><strong>Step 3: Maturity</strong><br />
                At the end of the fixed deposit tenure, the invested amount along with the accumulated interest is paid back to the investor. Some banks offer the option to reinvest the amount in another FD at the prevailing rates.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Types of Fixed Deposits</h1>
              <p>Fixed Deposits come in various types, each catering to different needs. Here are the common types of Fixed Deposits:</p>
              <ul>
                <li><strong>Standard Fixed Deposit:</strong> The most common type, where a fixed sum is invested for a predetermined tenure at a fixed interest rate.</li>
                <li><strong>Tax-Saving Fixed Deposit:</strong> These are FDs with a lock-in period of 5 years, offering tax benefits under Section 80C of the Income Tax Act.</li>
                <li><strong>Cumulative Fixed Deposit:</strong> In this type, the interest earned is added to the principal, and the entire amount is paid at the time of maturity.</li>
                <li><strong>Non-Cumulative Fixed Deposit:</strong> Interest is paid periodically (monthly, quarterly, or annually) to the investor.</li>
                <li><strong>Senior Citizens Fixed Deposit:</strong> Banks offer higher interest rates for senior citizens to encourage them to invest in FDs.</li>
                <li><strong>Flexi Fixed Deposit:</strong> These FDs combine features of both savings and fixed deposits, allowing partial withdrawals without breaking the entire deposit.</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Benefits of Fixed Deposits</h1>
              <p>Fixed deposits offer a number of advantages that make them a popular investment option, especially for risk-averse individuals. Here are the key benefits:</p>
              <ul>
                <li><strong>Safety:</strong> FDs are considered low-risk investments, offering a guaranteed return.</li>
                <li><strong>Fixed Returns:</strong> With a fixed interest rate, you know exactly how much return you will earn at the end of the tenure.</li>
                <li><strong>Tax Benefits:</strong> Tax-saving FDs offer deductions under Section 80C of the Income Tax Act, up to a limit of ₹1.5 lakh per year.</li>
                <li><strong>Liquidity:</strong> While FDs have a fixed tenure, some allow partial withdrawals or loans against the deposit if required.</li>
                <li><strong>Higher Interest Rates:</strong> Fixed deposits offer higher interest rates compared to savings accounts.</li>
                <li><strong>No Market Risk:</strong> Since FDs are not linked to market movements, they offer steady and predictable returns.</li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Risks of Fixed Deposits</h1>
              <p>While Fixed Deposits are generally considered safe investments, they come with certain risks. Here are some potential downsides to consider:</p>
              <ul>
                <li><strong>Low Returns in High Inflation:</strong> In periods of high inflation, the return on FDs may not beat inflation, leading to a loss in purchasing power.</li>
                <li><strong>Liquidity Issues:</strong> FDs have a lock-in period, and early withdrawal may incur penalties, reducing the overall returns.</li>
                <li><strong>Taxation:</strong> The interest earned on FDs is subject to tax, which reduces the effective return, especially for individuals in higher tax brackets.</li>
                <li><strong>Interest Rate Risk:</strong> If you lock in your money at a fixed interest rate, and the market rates rise, you may miss out on higher returns available later.</li>
                <li><strong>Limited Growth Potential:</strong> FDs may not provide the same level of growth as equities or mutual funds, especially over long periods.</li>
              </ul>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How to Invest in Fixed Deposits</h1>
              <p>Investing in Fixed Deposits is a straightforward process. Here's how you can do it:</p>
              <p><strong>Step 1: Choose the Right Bank or Financial Institution</strong><br />
                Compare FD interest rates, terms, and conditions across banks to choose the best option for you. Look for online FD options for ease and convenience.</p>
              <p><strong>Step 2: Select the Investment Amount and Tenure</strong><br />
                Decide how much money you want to invest and the tenure that suits your financial goals. FDs can range from a few months to several years.</p>
              <p><strong>Step 3: Complete the Application Process</strong><br />
                Fill out the application form with the necessary details, such as your name, address, and PAN (for tax purposes). Submit the required KYC documents (Know Your Customer) for verification.</p>
              <p><strong>Step 4: Deposit the Money</strong><br />
                You can deposit the money through a cheque, demand draft, or online bank transfer, depending on the bank's process.</p>
              <p><strong>Step 5: Enjoy the Returns</strong><br />
                Once the FD is matured, the bank will pay back the principal amount along with the interest earned. You can choose to reinvest it or withdraw the funds.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Fixed Deposits</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed-deposits-container">
      {renderPageContent()}
    </div>
  );
};

export default FixedDeposits;
