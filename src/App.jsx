import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import NewsTicker from './Components/Footer/NewsTicker';
import Courses from './Components/Courses/Courses';
import Loans from './Components/Courses/Loans';
import VideoCoverFlow from './Components/VideoControlFlow/VideoCoverFlow';
//import LoginPopup from './Components/LoginPopup/LoginPopup';
import Content from './Components/Content/Content';
import ServicesPage from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import Subscription from './Components/Subscription/Subscription';
import AI from './Components/Chatbot/AI';
import Dummy from './Components/dummy/dummy';
import CompleteProfilePopup from './Components/CompleteProfile/CompleteProfilePopup';
import Actual from './Components/actual/actual';
import Banks from './Components/Courses/Banks';
import DailyQuiz from './Components/Games/Games';
import GST from './Components/Courses/GST';
import Insurance from './Components/Courses/Insurance';
import MutualFunds from './Components/Courses/Mutual';
import FixedDeposits from './Components/Courses/Fixed';
import Cryptocurrencies from './Components/Courses/Crypto';
import CreditCards from './Components/Courses/Creditcard';

const App = () => {
  // Add this line to define the state
  const [showLogin, setShowLogin] = useState(false);

  return (
  
      <div className="app">
        <Routes>
          <Route path="/" element={<><Navbar setShowLogin={setShowLogin} /><Content /><NewsTicker /></>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/loans" element={<Loans />} />
          <Route path='/banks' element={<Banks />}/>
          <Route path='/gst' element={<GST />}/>
          <Route path='/insurance' element={<Insurance />}/>
          <Route path='/mutual-funds' element={<MutualFunds />}/>
          <Route path='/fixed-deposits' element={<FixedDeposits />}/>
          <Route path='/cryptocurrencies' element={<Cryptocurrencies />}/>
          <Route path='/credit-cards' element={<CreditCards />}/>
          <Route path='/games' element={<DailyQuiz />}/>
          <Route path="/podcast" element={<VideoCoverFlow />}/>
          <Route path='/chatbot' element={<AI />}/>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/" element={<Dummy />} />
          <Route path="/profile-complete" element={<CompleteProfilePopup />} />
          <Route path="/actual" element={<Actual />} />
        </Routes>

        {/* Login Popup */}
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      </div>
    
  );
};

export default App;