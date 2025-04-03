import React from 'react';
import './Loans.css';

const Cryptocurrencies = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>What are Cryptocurrencies?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/rYQgy8QDEBI?si=_CUL0Q62cmM3h7if" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>Cryptocurrencies are digital or virtual currencies that use cryptography for security, making them difficult to counterfeit or double-spend. They operate on decentralized networks based on blockchain technology, which is a distributed ledger enforced by a network of computers, called nodes.</p>
              <p><strong>Key Features of Cryptocurrencies:</strong><br />
                <strong>Decentralization:</strong> Cryptocurrencies operate on a peer-to-peer network, meaning no central authority controls them.<br />
                <strong>Security:</strong> Cryptocurrencies use cryptographic techniques for secure transactions.<br />
                <strong>Transparency:</strong> Blockchain technology provides transparency by recording all transactions on a public ledger.<br />
                <strong>Anonymity:</strong> Transactions can be anonymous, providing privacy for users.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Cryptocurrencies Work</h1>
              <p>Cryptocurrencies work using blockchain technology, which ensures that transactions are securely recorded and verified. Here's how they function:</p>
              <p><strong>Blockchain:</strong> A blockchain is a decentralized ledger that records all transactions across a network of computers. Each block contains a set of transactions, and once validated, it is added to the chain.</p>
              <p><strong>Mining:</strong> Mining is the process through which new cryptocurrencies are created and transactions are verified. Miners solve complex mathematical problems to add blocks to the blockchain and are rewarded with newly minted cryptocurrency.</p>
              <p><strong>Wallets:</strong> To store and manage cryptocurrencies, users need digital wallets. These wallets come in two types: hot wallets (connected to the internet) and cold wallets (offline, more secure).</p>
              <p><strong>Private and Public Keys:</strong> Cryptocurrencies use private and public keys for secure transactions. The public key is like an account number, while the private key acts as a password to access your funds.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Types of Cryptocurrencies</h1>
              <p>There are thousands of cryptocurrencies available today, each with different use cases and features. Some of the most popular types include:</p>
              <ul>
                <li><strong>Bitcoin (BTC):</strong> The first and most widely recognized cryptocurrency, created by an anonymous person (or group) known as Satoshi Nakamoto. Bitcoin is mainly used as a store of value and a medium of exchange.</li>
                <li><strong>Ethereum (ETH):</strong> A decentralized platform that allows developers to build and deploy smart contracts and decentralized applications (dApps). Ether is the native cryptocurrency of the Ethereum network.</li>
                <li><strong>Ripple (XRP):</strong> Ripple aims to facilitate fast, low-cost international payments and is often used by financial institutions and banks.</li>
                <li><strong>Litecoin (LTC):</strong> A peer-to-peer cryptocurrency often referred to as the silver to Bitcoin’s gold. Litecoin transactions are faster and more affordable than Bitcoin transactions.</li>
                <li><strong>Binance Coin (BNB):</strong> The native cryptocurrency of the Binance exchange, BNB is used for trading fee discounts and other services on the Binance platform.</li>
                <li><strong>Stablecoins (USDT, USDC):</strong> Cryptocurrencies pegged to stable assets like the US Dollar. They are designed to minimize volatility, making them useful for trading and as a store of value.</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How to Buy Cryptocurrencies</h1>
              <p>Buying cryptocurrencies can be done through several platforms and methods. Here’s a step-by-step guide to purchasing cryptocurrencies:</p>
              <p><strong>Step 1: Choose a Platform</strong><br />
                You can buy cryptocurrencies through cryptocurrency exchanges (e.g., Coinbase, Binance, Kraken) or peer-to-peer (P2P) platforms. Make sure the platform is reputable and offers the cryptocurrencies you want to purchase.</p>
              <p><strong>Step 2: Create an Account</strong><br />
                Sign up on the exchange or platform and complete the identity verification process. This is usually a KYC (Know Your Customer) process for security purposes.</p>
              <p><strong>Step 3: Deposit Funds</strong><br />
                Deposit funds into your account using a bank transfer, credit card, or another accepted method. Some platforms also allow you to buy with PayPal or other payment methods.</p>
              <p><strong>Step 4: Select Cryptocurrency</strong><br />
                Once your account is funded, choose the cryptocurrency you wish to buy (Bitcoin, Ethereum, etc.). Enter the amount you wish to invest.</p>
              <p><strong>Step 5: Complete the Transaction</strong><br />
                Confirm the details of your purchase and complete the transaction. Afterward, the cryptocurrency will be transferred to your wallet.</p>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Risks of Investing in Cryptocurrencies</h1>
              <p>While cryptocurrencies offer great potential for high returns, they also come with significant risks. Here are some of the key risks:</p>
              <ul>
                <li><strong>Volatility:</strong> Cryptocurrencies are highly volatile. Prices can experience massive swings in short periods, which may result in significant losses.</li>
                <li><strong>Regulatory Risk:</strong> Cryptocurrencies operate in a gray regulatory area in many countries. Government regulations can affect their value and use.</li>
                <li><strong>Security Risks:</strong> While blockchain is secure, digital wallets can be vulnerable to hacking and theft. Users must take extra steps to protect their wallets and private keys.</li>
                <li><strong>Market Manipulation:</strong> The cryptocurrency market is relatively young and can be susceptible to manipulation by large traders or groups.</li>
                <li><strong>Lack of Consumer Protections:</strong> Unlike traditional financial systems, cryptocurrency transactions are irreversible, and there is no central authority to resolve disputes or errors.</li>
              </ul>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Blockchain Technology</h1>
              <p>Blockchain is the foundational technology behind cryptocurrencies. It is a decentralized, distributed ledger that records transactions across many computers so that the data cannot be altered retroactively. Here’s how it works:</p>
              <p><strong>Blocks and Chains:</strong> Each transaction is recorded in a block. These blocks are linked together in a chain, forming a chronological order of transactions.</p>
              <p><strong>Decentralization:</strong> Blockchain operates on a peer-to-peer network of nodes (computers), meaning no central authority can control it. Each participant in the network holds a copy of the blockchain.</p>
              <p><strong>Consensus Mechanisms:</strong> Blockchain uses various consensus mechanisms (e.g., Proof of Work, Proof of Stake) to ensure that all participants in the network agree on the validity of transactions.</p>
              <p><strong>Transparency and Security:</strong> All transactions are publicly recorded on the blockchain, providing transparency. The cryptographic methods used ensure that the data is secure and cannot be altered without detection.</p>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Future of Cryptocurrencies</h1>
              <p>The future of cryptocurrencies holds great promise, but it also faces challenges. Here are some key trends and predictions:</p>
              <ul>
                <li><strong>Mainstream Adoption:</strong> Cryptocurrencies are gradually being adopted by businesses, governments, and financial institutions, which may lead to more widespread use as a payment method and store of value.</li>
                <li><strong>Regulation:</strong> Governments around the world are beginning to regulate cryptocurrencies, and this trend is likely to continue. Clearer regulations could reduce risks and promote investor confidence.</li>
                <li><strong>Decentralized Finance (DeFi):</strong> DeFi is a fast-growing sector that uses cryptocurrencies and smart contracts to offer financial services like lending, borrowing, and trading without intermediaries.</li>
                <li><strong>Central Bank Digital Currencies (CBDCs):</strong> Many central banks are exploring digital currencies issued by governments. These could coexist with decentralized cryptocurrencies or even challenge them.</li>
                <li><strong>Innovation in Blockchain:</strong> Blockchain technology will continue to evolve, with new innovations like sharding, layer-2 solutions, and interoperability improving scalability and reducing costs.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Cryptocurrencies</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="cryptocurrencies-container">
      {renderPageContent()}
    </div>
  );
};

export default Cryptocurrencies;
