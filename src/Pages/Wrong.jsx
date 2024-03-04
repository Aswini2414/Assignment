import React from 'react';
import { Link } from "react-router-dom";
import MainLogo from "../Assets/Group 3@2x.png";

const Wrong = () => {
  return (
    <>
      <div className="login_page">
        <div className="mainlogo">
          <img src={MainLogo} alt="logo" />
          <p>#We are Electric</p>
        </div>
        <div className="login-details">
          <h3 className='wrong'>Entered Wrong Credentials</h3>
          <Link to="/" className='btn'>Try Again</Link>
        </div>
      </div>
    </>
  );
}

export default Wrong