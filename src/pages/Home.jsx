import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/home.css";
import homeDashboard from "../assets/images/home-dashboard.png";
import homeGlow from "../assets/images/home-glow.png";
import homeTrophy from "../assets/images/home-trophy.png";
import homeProtection from "../assets/images/home-protection.png";

import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Orgasms from "../components/charts/Orgasms";

const Home = () => {
  return (
    <div className="Home">
	          <img id='glow' src={homeGlow} alt="glow" />

      <div className="top-bar">
        <div className="logo">
          <span>Hooks.</span>
        </div>
        <div className="links">
          <NavLink className="hover" to="/">
            Home
          </NavLink>
          <NavLink className="hover" to="/howitworks">
            How it works
          </NavLink>
          <NavLink className="hover" to="/signup">
            Sign up
          </NavLink>
          <NavLink className="hover" to="/login">
            Log in
          </NavLink>
        </div>
      </div>
      <div className="home-content">
        <div className="info">
          <h1>Track your alcoholic well-being</h1>
          <p>
            Hooks provides you with a safe space to enter information about your sexual growth. Keep track of your intimate moments, discover an overview of
            your well-being and find detailed information.
          </p>
          <Link to="/signup" id="get-started">
            Get started &nbsp; &nbsp;
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.25923 11.2102L6.23651 10.1989L9.78764 6.64773H0.867188V5.17045H9.78764L6.23651 1.625L7.25923 0.607954L12.5604 5.90909L7.25923 11.2102Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="images">
          <img id='dashboard' src={homeDashboard} alt="dashboard" />
          <img id='protection' src={homeProtection} alt="protection" />
          <img id='trophy' src={homeTrophy} alt="trophy" />
        </div>
      </div>
    </div>
  );
};

export default Home;
