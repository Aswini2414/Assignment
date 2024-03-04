import React from 'react'
import Profile from "../Assets/Group 46.png";
import Logo from "../Assets/moptro logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem('auth-token')) {
    console.log('no auth token set');
    navigate("/");
  } else {
    const authToken = "validation123";
    if (sessionStorage.getItem('auth-token') == authToken) {
      console.log("token verified");
    } else {
      console.log("token incorrect");
      navigate("/login");
    }
  }
  return (
    <>
      <div className="dashboard">
        <div className="profile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <div className="float">
            <p className="text-float">4</p>
          </div>
        </div>
        <div className="main-box">
          <div className="content">
            <p>Employee Productivity Dashboard</p>
          </div>
          <div className="flex">
            <div className="flexRow">
              <p className="left-align">Productivity on Monday</p>
              <p className="right-align">4%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per mon"></div>
            </div>
            <div className="flexRow">
              <p className="left-align">Productivity on Tuesday</p>
              <p className="right-align">92%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per tue"></div>
            </div>
            <div className="flexRow">
              <p className="left-align">Productivity on Wednesday</p>
              <p className="right-align">122%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per wed"></div>
            </div>
            <div className="flexRow">
              <p className="left-align">Productivity on Thursday</p>
              <p className="right-align">93%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per thu"></div>
            </div>
            <div className="flexRow">
              <p className="left-align">Productivity on Friday</p>
              <p className="right-align">89%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per fri"></div>
            </div>
            <div className="flexRow">
              <p className="left-align">Productivity on Saturday</p>
              <p className="right-align">98%</p>
            </div>
            <div className="dash-bar">
              <div className="dash-per sat"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex2">
        <Link className="simple_flex nav-selection" to="/home">
          <AiFillHome className="nav-logos" />
        </Link>
        <Link className="simple_flex" to="/employees">
          <FaUser className="nav-logos" />
        </Link>
      </div>
    </>
  );
}

export default Home