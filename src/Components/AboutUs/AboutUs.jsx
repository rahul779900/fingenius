import React, { useState, useEffect, useRef } from 'react';
import './AboutUs.css'; // Make sure this path is correct
import Navbar from '../Navbar/Navbar';
import { assets } from '../../assets/assets';



const AboutUs = () => {
  // Check if assets are loaded properly by logging them
  console.log("Assets loaded:", assets);

  const teamMembers = [
    {
      name: "Asha Kota",
      title: "Security Engineer",
      bio: "Ensures our applications are secure and compliant with industry standards. Michael conducts regular security audits and implements best practices.",
      image: assets.Asha
    },
    {
      name: "Hemanth",
      title: "UX/UI Designer",
      bio: "Passionate about creating intuitive and beautiful interfaces. Samantha brings 8 years of design experience with a focus on user-centered design principles.",
      image: assets.Hemanth
    },
    {
      name: "Anjani Gorrela",
      title: "Backend Developer",
      bio: "Specializes in database architecture and API development. Marcus ensures our applications are robust, secure, and scalable.",
      image: assets.Anjani
    },
    {
      name: "Gnana Sagar",
      title: "DevOps Engineer",
      bio: "Passionate about automation and continuous integration. David manages our cloud infrastructure and ensures smooth deployment processes.",
      image: assets.Sagar
    },
    {
      name: "Rahul Reddy",
      title: "Lead Developer & Founder",
      bio: "Full-stack developer with 12+ years of experience in web and mobile application development. Alex leads our technical strategy and architecture decisions.",
      image: assets.Rahul
    },
    
    {
      name: "Lalitha",
      title: "Frontend Developer",
      bio: "Specializes in React and modern JavaScript frameworks. Priya creates responsive and accessible user interfaces with attention to detail.",
      image: assets.Lalitha
    },
    {
      name: "Yashwanth Varada",
      title: "QA Specialist",
      bio: "Ensures our products meet the highest quality standards. James brings a methodical approach to testing and quality assurance.",
      image: assets.yashv
    },
    {
      name: "Bhanu Nomula",
      title: "Project Manager",
      bio: "Guides our projects from conception to delivery. Aisha excels at coordinating cross-functional teams and meeting deadlines.",
      image: assets.Bhanu
    },

    {
      name: "Sandeep Kalyan",
      title: "Data Scientist",
      bio: "Leverages machine learning and analytics to drive product decisions. Emily transforms data into actionable insights for our clients.",
      image: assets.Sandeep
    },
    {
      name: "Divya Sri",
      title: "Blockchain Developer",
      bio: "Explores cutting-edge blockchain technologies. Thomas builds decentralized applications and smart contracts for our forward-thinking clients.",
      image: assets.thomas
    },
    {
      name: "Maneesh",
      title: "Mobile Developer",
      bio: "Expert in iOS and Android development with a focus on creating seamless cross-platform experiences. Olivia has shipped over 15 applications to the app stores.",
      image: assets.maneesh
    },
  ];

  const carouselTrackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const currentPositionRef = useRef(0);
  const animationSpeed = 1;

  const animate = () => {
    if (!isPaused) {
      currentPositionRef.current -= animationSpeed;
      const trackElement = carouselTrackRef.current;
      if (trackElement && trackElement.firstElementChild) {
        const cardWidth = trackElement.firstElementChild.offsetWidth + 16;
        if (Math.abs(currentPositionRef.current) >= cardWidth * teamMembers.length) {
          currentPositionRef.current = 0;
        }
        trackElement.style.transform = `translateX(${currentPositionRef.current}px)`;
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Add a console.log to verify the component is mounting
    console.log("AboutUs component mounted");

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Check if we have a fallback for missing images
  const getImage = (memberImage) => {
    if (memberImage) return memberImage;
    // Fallback to placeholder if image is missing
    return "/api/placeholder/200/200";
  };

  const TeamCard = ({ member }) => (
    <div className="team-card">
      <div className="card-image">
        <img
          src={getImage(member.image)}
          alt={member.name}
          onError={(e) => {
            console.log(`Image failed to load for ${member.name}`);
            e.target.src = "/api/placeholder/200/200";
          }}
        />
      </div>
      <div className="card-content">
        <h4 className="card-name">{member.name}</h4>
        <p className="card-title">{member.title}</p>
        <p className="card-bio">{member.bio}</p>
      </div>
    </div>
  );

  return (
    <div className="about-us-container">
      <Navbar />
      <div>
        <header className="header">
          <div className="header-content">
            <h1>MEET OUR TEAM</h1>
            <p>Passionate developers creating innovative solutions for the digital world</p>
          </div>
        </header>

        <section className="about-section">
          <div className="about-content">
            <h2 className="section-title">About Us</h2>
            <p>We are a team of 11 dedicated developers with diverse backgrounds and specialized skills. Founded in 2020, our collective expertise spans across full-stack development, UX/UI design, mobile applications, and cybersecurity.</p>
            <h3 className="team-title">Our Team</h3>
            <div className="carousel-container">
              <div className="carousel-track" ref={carouselTrackRef}>
                {teamMembers.map((member, index) => (
                  <TeamCard key={`original-${index}`} member={member} />
                ))}
                {teamMembers.map((member, index) => (
                  <TeamCard key={`duplicate-${index}`} member={member} />
                ))}
              </div>
            </div>
            <div className="carousel-controls">
              <button
                className="control-btn"
                onClick={() => setIsPaused(!isPaused)}
              >
                {isPaused ? "Resume" : "Pause"}
              </button>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card"><h3 className="value-title">Innovation</h3><p>We push boundaries and explore new technologies to deliver cutting-edge solutions.</p></div>
              <div className="value-card"><h3 className="value-title">Quality</h3><p>We ensure robust, reliable software with a commitment to excellence.</p></div>
              <div className="value-card"><h3 className="value-title">Collaboration</h3><p>Open communication and teamwork drive our development process.</p></div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-content">
            <h2 className="section-title">Work With Us</h2>
            <p className="contact-text">Ready to bring your project to life? Our team is excited to help transform your ideas into reality.</p>
            <button className="contact-btn">Contact Us</button>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Developer Team. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;