import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function OpenMobileNavbar() {
    document.querySelector(".open").classList.toggle("opento");
    document.querySelector(".small_nav").classList.toggle("opentoSmall_nav");
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/Home">EgyptTour</Link>
        <form action="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#0B0614"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 21L16.6499 16.65"
              stroke="#0B0614"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="search" name="search" id="search" placeholder="Search" />
        </form>
      </div>
      <div className="nav">
        <ul className="large_nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Guides">Guides</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Inspiration">Inspiration</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
        <div onClick={OpenMobileNavbar} className="navbar_icon">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
            xmlSpace="preserve"
          >
            <g>
              <path d="M940.9,230.4H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,208.4,968,230.4,940.9,230.4z" />
              <path d="M940.9,549.1H59.1C32,549.1,10,527.1,10,500c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,527.1,968,549.1,940.9,549.1z" />
              <path d="M940.9,867.8H59.1c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1h881.8c27.1,0,49.1,22,49.1,49.1C990,845.8,968,867.8,940.9,867.8z" />
            </g>
          </svg>
        </div>
        <div className="small_nav">
          <div className="small_nav_inline">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Guides">Guides</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Inspiration">Inspiration</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
          </div>
        </div>
        <div className="open"></div>
      </div>
    </div>
  );
};

export default Navbar;
