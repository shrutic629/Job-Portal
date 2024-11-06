import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <div className="headerbox">
      <div className="logo">
        <img
          src="https://img.lovepik.com/element/40174/0048.png_1200.png"
          alt="image not found"
          className="logoImg"
        />
        <h2 className="heading">Getjob.co</h2>
      </div>
      <div className="headerOptions">
        <ul>
          <li>Home</li>
          <li>About Company</li>
          <li>Careers</li>
          <li>Feature</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="headerProfile">
        <div className="headerIcons">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="headerIcon" />
          <FontAwesomeIcon icon={faBell} className="headerIcon" />
        </div>
        <div className="headerProfileInfo">
          <div className="profileImageContainer">
            <img
              src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg"
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileInfo">
            <p className="designation">Enterprise</p>
            <h4>Freya Kathrina</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
