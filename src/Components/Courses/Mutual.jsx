import React from 'react';
import './Loans.css';

const MutualFunds = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>What are Mutual Funds?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OuYvU5m2rhQ?si=qYcW7CSQQx3UylZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>Mutual funds are investment vehicles that pool money from many investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer an easy way for individuals to invest in a variety of assets while being managed by professional fund managers.</p>
              <p><strong>Key Features of Mutual Funds:</strong><br />
                <strong>Diversification:</strong> Mutual funds invest in a wide range of securities, reducing the risk of losing money.<br />
                <strong>Professional Management:</strong> Fund managers make investment decisions based on research and analysis.<br />
                <strong>Liquidity:</strong> Mutual funds are generally easy to buy and sell, providing liquidity for investors.<br />
                <strong>Affordability:</strong> Mutual funds allow investors to start with a small amount of money, making it accessible to many.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>Types of Mutual Funds</h1>
              <p>Mutual funds come in a variety of types based on their investment strategy and risk profile:</p>
              <ul>
                <li><strong>Equity Mutual Funds:</strong> Invest primarily in stocks and aim for capital growth. They are riskier but can offer higher returns.</li>
                <li><strong>Debt Mutual Funds:</strong> Invest in bonds and other fixed-income securities. They are less risky and offer stable returns.</li>
                <li><strong>Hybrid Mutual Funds:</strong> A mix of equity and debt investments, offering a balance between risk and returns.</li>
                <li><strong>Index Funds:</strong> Invest in a portfolio that mirrors a market index (e.g., Nifty 50). They are low-cost and passively managed.</li>
                <li><strong>Sector Funds:</strong> Focus on a specific sector, like technology, healthcare, or energy. They carry higher risks but can provide high rewards in a strong sector.</li>
                <li><strong>International Funds:</strong> Invest in markets outside the investor’s country. These funds provide exposure to global economic growth.</li>
              </ul>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Mutual Funds Work</h1>
              <p>Mutual funds operate by pooling money from investors and investing it into a diversified portfolio of assets. Here’s a step-by-step breakdown of how they work:</p>
              <p><strong>Step 1:</strong> Pooling of Funds<br />
                Investors contribute money to a mutual fund. The pooled money is then used by the fund manager to invest in a range of securities.</p>
              <p><strong>Step 2:</strong> Professional Management<br />
                The fund manager makes investment decisions based on market research, economic data, and the fund's objectives.</p>
              <p><strong>Step 3:</strong> Asset Allocation<br />
                Depending on the type of mutual fund, the money is allocated across different types of assets such as stocks, bonds, or money market instruments.</p>
              <p><strong>Step 4:</strong> Returns<br />
                Investors earn returns in the form of dividends, interest, or capital appreciation. These returns are passed on to the investors based on the number of units they own.</p>
              <p><strong>Step 5:</strong> Redemption<br />
                Investors can redeem their mutual fund units at any time (subject to the fund's policies) by selling them back to the fund company or on the secondary market.</p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Benefits of Investing in Mutual Funds</h1>
              <p>Mutual funds offer numerous advantages to investors, including:</p>
              <ul>
                <li><strong>Diversification:</strong> Spread risk across various securities, reducing the impact of a poor-performing asset.</li>
                <li><strong>Expert Management:</strong> Professional fund managers make investment decisions on behalf of investors, providing expertise.</li>
                <li><strong>Liquidity:</strong> Investors can redeem their mutual fund units at any time, making them relatively liquid investments.</li>
                <li><strong>Low Initial Investment:</strong> Mutual funds allow small investors to participate in large-scale investments, requiring relatively low minimum investments.</li>
                <li><strong>Accessibility:</strong> They are easy to access through various platforms, such as banks, online brokerages, or directly through asset management companies.</li>
                <li><strong>Transparency:</strong> Mutual funds provide regular updates on portfolio performance and holdings, ensuring transparency.</li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Risks of Mutual Funds</h1>
              <p>While mutual funds offer many benefits, they also come with certain risks that investors should be aware of:</p>
              <ul>
                <li><strong>Market Risk:</strong> The value of mutual funds can fluctuate due to market conditions, leading to potential losses, especially in equity funds.</li>
                <li><strong>Interest Rate Risk:</strong> Debt funds are vulnerable to changes in interest rates. Rising rates can reduce bond prices and returns.</li>
                <li><strong>Liquidity Risk:</strong> While mutual funds are generally liquid, certain types (like closed-end funds or some sector funds) may have limited redemption options.</li>
                <li><strong>Management Risk:</strong> The performance of a mutual fund depends on the skill of the fund manager. Poor management can lead to underperformance.</li>
                <li><strong>Inflation Risk:</strong> If returns do not outpace inflation, the purchasing power of your investment can decrease over time.</li>
                <li><strong>Currency Risk:</strong> International mutual funds are exposed to currency fluctuations, which can impact returns for investors in different countries.</li>
              </ul>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How to Choose the Right Mutual Fund</h1>
              <p>Choosing the right mutual fund requires evaluating various factors based on your financial goals, risk tolerance, and investment horizon:</p>
              <ul>
                <li><strong>Risk Profile:</strong> Determine your risk tolerance (low, medium, high) and select funds that match your comfort level with risk.</li>
                <li><strong>Investment Goals:</strong> Align your investment choice with your financial objectives (e.g., retirement, buying a house, education).</li>
                <li><strong>Fund Performance:</strong> Evaluate the historical performance of the fund, keeping in mind that past performance does not guarantee future returns.</li>
                <li><strong>Fund Fees:</strong> Consider the expense ratio and other associated costs. Funds with lower fees tend to outperform those with higher fees in the long term.</li>
                <li><strong>Fund Manager:</strong> Research the experience and track record of the fund manager to assess their ability to manage the fund effectively.</li>
                <li><strong>Fund Type:</strong> Choose between equity, debt, hybrid, or sector funds based on your risk and return expectations.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Mutual Funds</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="mutual-funds-container">
      {renderPageContent()}
    </div>
  );
};

export default MutualFunds;
