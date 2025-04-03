import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Content1 from '../Content/Content1';
import NewsTicker from '../Footer/NewsTicker';
import LoginPopup from '../LoginPopup/LoginPopup';


const Dummy = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  const handleSignupClick = () => {
    setShowLogin(true);
  };
  
  return (
    <>
      <Navbar onSignupClick={handleSignupClick} setShowLogin={setShowLogin}  />
      <Content1 />
      <NewsTicker />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  );
};

export default Dummy;