import React from "react";
import './Content.css'
import { assets } from "../../assets/assets";

const Content = () => {
  return (
    
    <div className="content-container">
      <div className="image-container">
        <img src={assets.logo} />
        <div className="text-container">
          <h1>Fin Genius</h1>
          <p>A Rupee Earned is A Rupee Saved !!</p>
          <span>
            Don't save money after you spent,but spend the money which you have saved.
          </span>
        </div>
      </div>
      <div className="video-container">
        <div className="row1 rows">
          <div className="col1">
            <video autoPlay muted loop controls>
              <source src={assets.v1} />
            </video>
          </div>

          <div className="col2">
            <video autoPlay muted loop controls>
              <source src={assets.v2} />
            </video>
          </div>
        </div>
        <div className="row2 rows">
          <div className="col1">
            <video autoPlay muted loop controls>
              <source src={assets.v3} />
            </video>
          </div>

          <div className="col2">
            <video autoPlay muted loop controls>
              <source src={assets.v4} />
            </video>
          </div>

          <div className="col3">
            <video autoPlay muted loop controls>
              <source src={assets.v5} />
            </video>
          </div>
        </div>
        <div className="row3 rows">
          <div className="col1">
            <video autoPlay muted loop controls>
              <source src={assets.v6} />
            </video>
          </div>

          <div className="col2">
            <video autoPlay muted loop controls>
              <source src={assets.v7} />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
