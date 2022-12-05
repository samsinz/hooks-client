import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";
import Achievements from "./Achievements";
import FormEditProfile from "../Forms/FormEditProfile";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const dialog = useRef();

  const showDialog = () => {
    dialog.current.showModal();
  };
  const closeModal = () => {
    dialog.current.close();
  };
  return (
    <nav className="NavMain">
      {isLoggedIn && (
        <>
          <img id="image" src={currentUser.image} alt="profile" />
          <h1 id="name" className="bold">{currentUser.name}</h1>
          <div id="tags">
            <span>
              {currentUser.partners.length === 1
                ? currentUser.partners.length + " hook"
                : currentUser.partners.length + " hooks"}{" "}
              · {currentUser.score} pts
            </span>
            {/* <span>{currentUser.score} pts</span> */}
          </div>
          <h3>
            <NavLink className="hover" to="/dashboard">
              Dashboard
            </NavLink>
          </h3>
          <h3>
            <NavLink className="hover" to="/hooks">
              Your hooks
            </NavLink>
          </h3>
          <h3>
            {/* <NavLink className="hover" to="/settings">
              Profile settings
            </NavLink> */}

            <span onClick={showDialog} className="hover">Profile settings</span>
          </h3>


          {/* <NavLink to="/profile">{currentUser && currentUser.email}</NavLink> */}
          {/* <button onClick={removeUser}>Log-Out</button> */}


          <h3 id='achievement' className="bold">Achievements</h3>

          <Achievements />

          <div id="logout-container">
            <h3 id="logout" className="hover" onClick={removeUser}>
              Log out
            </h3>
          </div>
        </>
      )}
      {!isLoggedIn && (
        <>
          <NavLink className="logo" to="/">
            HOOKS
          </NavLink>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}

      <dialog ref={dialog}>
        <FormEditProfile closeModal={closeModal} />
      </dialog>
    </nav>
  );
};

export default NavMain;
