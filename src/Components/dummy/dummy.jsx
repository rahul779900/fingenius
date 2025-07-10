import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Content1 from '../Content/Content1';
import NewsTicker from '../Footer/NewsTicker';


const Dummy = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  const handleSignupClick = () => {
    setShowLogin(true);
  };
  
  return (
     <>
      <Navbar />
      <Content1 />
      <NewsTicker />
    </>
  );
};

export default Dummy;