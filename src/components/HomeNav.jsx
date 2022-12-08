import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/homeNav.css";

const HomeNav = ({ showSignup, showLogin }) => {
  return (
    <div className="HomeNav">
      <div className="logo">
        <NavLink className="hover" to="/">
          <span>Hooks</span>
        </NavLink>
      </div>

      <div className="links">
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
