import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "../styles/home.css";
import homeDashboard from "../assets/images/home-dashboard.png";
import homeGlow from "../assets/images/home-glow.png";
import homeTrophy from "../assets/images/home-trophy.png";
import homeProtection from "../assets/images/home-protection.png";
import FormSignUp from "../components/Forms/FormSignUp";
import hookLogo from "../assets/images/hooks-logo.png"

import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Orgasms from "../components/charts/Orgasms";
import Activities from "../components/charts/Activities";
import Ratings from "../components/charts/Ratings";

import FormLogIn from "../components/Forms/FormLogIn";
import HomeNav from "../components/Nav/HomeNav";

const Home = () => {

  const navigate = useNavigate();


  // modale signup //
  const signup = useRef();

  const showSignup = () => {
    closeLogin();
    signup.current.showModal();
  };

  const closeSignup = () => {
    signup.current.close();
  };

  // modale login //
  const login = useRef();

  const showLogin = () => {
    closeSignup();
    login.current.showModal();
  };

  const closeLogin = () => {
    login.current.close();
  };

  return (
    <div className="Home">

      <HomeNav {...{ showSignup, showLogin }} />

      <img id="glow" src={homeGlow} alt="glow" />

      <div className="home-content">
        <div className="info">
          <h1>Track your sexual well-being</h1>
          <p>
            Hooks provides you with a safe space to enter information about your
            sexual growth. Keep track of your intimate moments, discover an
            overview of your well-being and find detailed information about your
            relationships.
          </p>
          <p style={{fontWeight: '100'}}>Coded with passion by <a href="https://github.com/olxmpe">@olxmpe</a>, <a href="https://github.com/samsinz">@sam.sinz</a>, and <a href="https://github.com/jsarzi">@jsarzi</a>.</p>
          <button onClick={showSignup} id="get-started" className="hover">
            Get started &nbsp; &nbsp;
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25923 11.2102L6.23651 10.1989L9.78764 6.64773H0.867188V5.17045H9.78764L6.23651 1.625L7.25923 0.607954L12.5604 5.90909L7.25923 11.2102Z"
                fill="white"
              />
            </svg>
          </button>
          <button onClick={() => {window.location.href = 'https://github.com/samsinz/hooks-client'}}id="get-started" className="hover">GitHub Repo &nbsp; &nbsp;<svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.25923 11.2102L6.23651 10.1989L9.78764 6.64773H0.867188V5.17045H9.78764L6.23651 1.625L7.25923 0.607954L12.5604 5.90909L7.25923 11.2102Z"
                fill="white"
              />
            </svg></button>
          {/* <p>
            Already have an account ?{" "}
            <span onClick={showLogin}>
              <u>Log in</u>
            </span>
          </p> */}
        </div>
        <div className="images">
          <img id="dashboard" src={homeDashboard} alt="dashboard" />
          <img id="protection" src={homeProtection} alt="protection" />
          <img id="trophy" src={homeTrophy} alt="trophy" />
        </div>
      </div>

      {/* modales */}

      <dialog ref={signup}>
        <FormSignUp closeSignup={closeSignup} showLogin={showLogin} />
      </dialog>

      <dialog ref={login}>
        <FormLogIn closeLogin={closeLogin} showSignup={showSignup} />
      </dialog>
    </div>
  );
};

export default Home;
