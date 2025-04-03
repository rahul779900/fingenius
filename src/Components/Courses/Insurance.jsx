import React from 'react';
import './Loans.css';

const Insurance = ({ currentPage = 1 }) => {
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>What is Insurance?</h1>
              <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KCnuQam2pZs?si=TyAxTtN3Q90dAGo2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <p>Insurance is a financial product that provides protection against financial loss. It involves paying regular premiums to an insurance company, which, in return, offers coverage for specific risks. The insurance company compensates the insured in case of events like accidents, illnesses, or damages, based on the terms of the policy.</p>
              <p><strong>Key Features of Insurance:</strong><br />
                <strong>Premium:</strong> The amount paid periodically to keep the insurance coverage active.<br />
                <strong>Policyholder:</strong> The person who owns the insurance policy and is entitled to benefits.<br />
                <strong>Coverage:</strong> The risks or events that the insurance policy covers.<br />
                <strong>Claim:</strong> A request made to the insurance company for compensation after a covered event occurs.</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How Insurance Works</h1>
              <p>Insurance works by spreading the financial risk of the policyholders among a large group of people. Here's how the process works:</p>
              <p><strong>Step 1: Choose the Insurance Plan</strong><br />
                The first step is to select the type of insurance that suits your needs, whether it is health insurance, life insurance, car insurance, etc.</p>
              <p><strong>Step 2: Pay the Premium</strong><br />
                The policyholder pays a premium to the insurance company. The amount is based on factors like the coverage amount, policy type, and personal risk factors.</p>
              <p><strong>Step 3: Insurance Company Takes on the Risk</strong><br />
                In return for the premium, the insurance company assumes responsibility for certain risks. If a covered event occurs, the insurance company will pay the policyholder or a third party (like a hospital or repair shop).</p>
              <p><strong>Step 4: File a Claim</strong><br />
                If an event occurs that falls under the coverage, the policyholder files a claim with the insurance company, which then processes the claim and pays the appropriate compensation based on the policy terms.</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Types of Insurance</h1>
              <p>There are several types of insurance available to cater to different needs. Some of the most common types are:</p>
              <ul>
                <li><strong>Life Insurance:</strong> Provides financial protection to the beneficiaries in case of the policyholder's death. There are two main types: term life insurance and whole life insurance.</li>
                <li><strong>Health Insurance:</strong> Covers medical expenses incurred due to illnesses or accidents, including hospitalization, surgery, and sometimes outpatient care.</li>
                <li><strong>Car Insurance:</strong> Protects against financial loss in case of accidents, theft, or damage to a vehicle. It can also cover third-party liabilities.</li>
                <li><strong>Home Insurance:</strong> Provides coverage for the home and belongings against risks like fire, theft, or natural disasters.</li>
                <li><strong>Travel Insurance:</strong> Covers risks associated with traveling, including trip cancellations, medical emergencies, lost luggage, and more.</li>
                <li><strong>Disability Insurance:</strong> Provides income replacement if a person becomes unable to work due to illness or injury.</li>
                <li><strong>Business Insurance:</strong> Covers businesses against losses due to property damage, legal liabilities, employee injuries, or other risks.</li>
              </ul>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Benefits of Insurance</h1>
              <p>Insurance provides several benefits to individuals and businesses. Here are some of the primary advantages:</p>
              <ul>
                <li><strong>Financial Protection:</strong> Insurance provides a safety net, ensuring that you or your family are financially protected against unexpected events like accidents, illnesses, or natural disasters.</li>
                <li><strong>Peace of Mind:</strong> Having insurance helps reduce anxiety about future risks, knowing that you will be compensated in case something goes wrong.</li>
                <li><strong>Tax Benefits:</strong> Certain insurance policies, like life insurance and health insurance, offer tax deductions under various sections of the Income Tax Act.</li>
                <li><strong>Risk Mitigation:</strong> Insurance helps mitigate financial risks, ensuring that you don’t have to bear the full financial burden of an unexpected event.</li>
                <li><strong>Wealth Creation:</strong> Some insurance policies, such as endowment policies and unit-linked insurance plans (ULIPs), offer the dual benefit of insurance and investment, allowing you to build wealth over time.</li>
              </ul>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>How to Choose the Right Insurance</h1>
              <p>Choosing the right insurance can be a daunting task, but it is important to select a policy that fits your needs and financial goals. Here are some tips on how to choose the right insurance:</p>
              <ul>
                <li><strong>Assess Your Needs:</strong> Start by evaluating your personal and financial situation. Consider factors such as your health, family size, income, and existing financial obligations.</li>
                <li><strong>Compare Plans:</strong> Compare different policies from various insurers to find the one that offers the best coverage at an affordable premium. Look at policy terms, exclusions, and customer reviews.</li>
                <li><strong>Understand the Coverage:</strong> Make sure you understand what the policy covers and what it excludes. Ensure that it meets your needs and provides sufficient coverage for the risks you want to insure against.</li>
                <li><strong>Check the Insurer’s Reputation:</strong> Choose a reputable insurance company with a strong financial standing and good customer service. Research their claim settlement ratio and customer feedback.</li>
                <li><strong>Read the Fine Print:</strong> Always read the terms and conditions of the insurance policy carefully before signing. Make sure you’re aware of any hidden fees, exclusions, or terms that could affect your coverage.</li>
                <li><strong>Review Regularly:</strong> Your insurance needs may change over time, so it's important to review your coverage periodically and make adjustments if necessary.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return (
          <div className="page-content">
            <div className="course-content">
              <h1>Introduction to Insurance</h1>
              <p>Content not found for this page.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="insurance-container">
      {renderPageContent()}
    </div>
  );
};

export default Insurance;
