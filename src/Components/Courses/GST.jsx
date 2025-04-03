import React from 'react';
import './Loans.css';

const GST = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>What is GST?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xt5XRacjA9U?si=JyeNOpcdykxnvzxW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>GST (Goods and Services Tax) is a unified tax system that replaces multiple indirect taxes in India like VAT, excise duty, and service tax. It aims to streamline the taxation process and create a unified market.</p>
              <p><strong>Key Features of GST:</strong><br />
                <strong>Single Tax System:</strong> Consolidates multiple taxes into one.<br />
                <strong>Destination-Based Tax:</strong> GST is applied at the point of consumption, not at production.<br />
                <strong>Wide Applicability:</strong> Covers all businesses and services, with few exceptions.<br />
                <strong>Input Tax Credit:</strong> Businesses can offset taxes paid on inputs against taxes collected on outputs.
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className='course-content'>
              <h1>Types of GST</h1>
              <p>GST is classified into various types based on the nature of the transaction. Below are the different types:</p>
              <ul>
                <li><strong>CGST (Central GST):</strong> Tax collected by the central government for intra-state transactions.</li>
                <li><strong>SGST (State GST):</strong> Tax collected by the state government for intra-state transactions.</li>
                <li><strong>IGST (Integrated GST):</strong> Tax collected by the central government for inter-state transactions.</li>
                <li><strong>UGST (Union Territory GST):</strong> Tax applicable for transactions in union territories.</li>
              </ul>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How GST Works</h1>
              <p>GST works by applying tax at every stage of the supply chain. Here’s a breakdown of how it operates:</p>
              <p><strong>Step 1:</strong> GST Registration<br />
                Businesses must register for GST once their turnover exceeds the prescribed limit for GST registration.</p>
              <p><strong>Step 2:</strong> Tax Collection<br />
                Businesses collect GST on the sale of goods and services and pay GST on their purchases.</p>
              <p><strong>Step 3:</strong> Input Tax Credit<br />
                Businesses can claim an input tax credit for taxes paid on their inputs, which they can offset against taxes collected on sales.</p>
              <p><strong>Step 4:</strong> Filing Returns<br />
                Businesses must file periodic GST returns, detailing sales, purchases, and taxes paid/collected.</p>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>GST Terminology</h1>
              <p>Here are some key GST terms to understand:</p>
              <ul>
                <li><strong>GSTIN (GST Identification Number):</strong> A unique identification number for businesses registered under GST.</li>
                <li><strong>GST Return:</strong> A document businesses file to report their sales, purchases, and taxes.</li>
                <li><strong>HSN (Harmonized System of Nomenclature):</strong> A code system used to classify goods under GST.</li>
                <li><strong>Composition Scheme:</strong> A simplified tax scheme for small businesses with a lower tax rate.</li>
                <li><strong>GST Council:</strong> A governing body that decides the GST tax rates and policies.</li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Advantages and Challenges of GST</h1>
              <p>While GST offers several benefits, it also presents some challenges:</p>
              <p><strong>Advantages:</strong><br />
                <strong>Simplified Taxation:</strong> GST eliminates the complexity of multiple taxes.<br />
                <strong>Seamless Tax Credit:</strong> Businesses can avail input tax credit, reducing tax burden.<br />
                <strong>Increased Transparency:</strong> With one unified tax system, the process becomes more transparent.<br />
                <strong>Boost to the Economy:</strong> GST aims to reduce the cascading effect of taxes and stimulate economic growth.
              </p>
              <p><strong>Challenges:</strong><br />
                <strong>Compliance Complexity:</strong> Businesses may find the filing and compliance process complicated initially.<br />
                <strong>Technological Barriers:</strong> The GST system requires businesses to be familiar with technology and filing systems.<br />
                <strong>Increased Costs for Small Businesses:</strong> Small businesses may face higher compliance costs due to the need for accounting software and GST registration.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to GST</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="gst-container">
      {renderPageContent()}
    </div>
  );
};

export default GST;
