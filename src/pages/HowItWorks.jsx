import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import howItWorks from "../assets/images/howitworks.png";
import "../styles/howitworks.css";
import "../styles/home.css";
import HomeNav from "../components/Nav/HomeNav";
import FormLogIn from "../components/Forms/FormLogIn";
import FormSignUp from "../components/Forms/FormSignUp";

const HowItWorks = () => {
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
    <div className="howItWorks">
      <HomeNav {...{ showSignup, showLogin, closeSignup, closeLogin }} />

      <div className="contentHowItWorks">
        <div className="titleArea">
          <div className="titleAndDescription">
            <h1>Keep track of your partners to better understand yourself</h1>
            <p class="description">
              Model your sexual data to improve your sexual well-being{" "}
            </p>
          </div>

          <div className="buttonGetStarted" onClick={showSignup}>
            <button id="get-started" className="hover">
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
          </div>
        </div>
        <img src={howItWorks} alt="How it works"></img>

        <div class="infoBoxes">
          <div class="infoBox">
            <p>01.</p>
            <h2 className="infoTitle">Keep a track of your hookups</h2>
            <p>
              On Hooks, you can list all your sexual encounters. Hooks also
              allows you to enter multiple sexual encounters per partner to
              access data that model the evolution of your sexual well-being
              with this particular person.
            </p>
          </div>

          <div class="infoBox">
            <p>02.</p>
            <h2 className="infoTitle">
              Visualize your personal data in your dashboard
            </h2>
            <p>
              Developed in the style of a financial application, Hooks’
              dashboard displays a visual representation of your sexual data.
              You can model your overall sexual activity, your propensity for
              orgasms and protected sex, the average age of your partners or
              your overall satisfaction with your partners or the duration of
              your sex.
            </p>
          </div>

          <div class="infoBox">
            <p>03.</p>
            <h2 className="infoTitle">
              Encouraging a healthier relationship with sexuality
            </h2>
            <p>
              Our mission does not stop at making lists of sexual partners and
              hookups. We also want to encourage our users to better understand
              their sex life and adopt good and safe behaviors. Hooks tries to
              demystify certain aspects of sexual life, such as the duration of
              intercourse and orgasms.
            </p>
          </div>
        </div>

        <dialog ref={signup}>
          <FormSignUp closeSignup={closeSignup} showLogin={showLogin} />
        </dialog>

        <dialog ref={login}>
          <FormLogIn closeLogin={closeLogin} showSignup={showSignup} />
        </dialog>
      </div>
    </div>
  );
};

export default HowItWorks;
