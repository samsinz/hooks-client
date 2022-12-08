import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/homeNav.css";
import hooksLogo from "../../assets/images/hooks-logo.png";

const HomeNav = ({ showSignup, showLogin }) => {
  return (
    <div className="HomeNav">
      <div className="logo">
        <NavLink className="hover" to="/">
          <img src={hooksLogo} alt="logo" className="logo" />
        </NavLink>
      </div>

      <div className="links">
        <NavLink className="hover" to="/">
          Home
        </NavLink>
        <NavLink className="hover" to="/howitworks">
          How it works
        </NavLink>
        <NavLink className="hover" onClick={showSignup}>
          Sign up
        </NavLink>
        <NavLink className="hover" onClick={showLogin}>
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default HomeNav;
