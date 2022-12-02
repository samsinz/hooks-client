import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";
import Achievements from './Achievements'
import FormSignUp from '../Forms/FormSignUp'
import FormEditProfile from "../Forms/FormEditProfile";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const dialog = useRef()

  const showDialog = () => {
    dialog.current.showModal()
  }
  const closeModal = () => {
    dialog.current.close()
  }
  return (
    <nav className="NavMain">
      {isLoggedIn && (
        <>
          <img id="image" src={currentUser.image} alt="profile" />
          <p id="name">{currentUser.name}</p>
          <div id="tags">
            <span>{currentUser.partners.length === 1 ? currentUser.partners.length + " hook" : currentUser.partners.length + " hooks"}  · {currentUser.score} pts</span>
            {/* <span>{currentUser.score} pts</span> */}
          </div>
          <span>
            <NavLink className="hover" to="/dashboard">
              Dashboard
            </NavLink>
          </span>
          <span>
            <NavLink className="hover" to="/hooks">
              Your hooks
            </NavLink>
          </span>
          <span>
            {/* <NavLink className="hover" to="/settings">
              Profile settings
            </NavLink> */}
            <p onClick={showDialog} className="hover">Profile settings</p>
          </span>

          {/* <NavLink to="/profile">{currentUser && currentUser.email}</NavLink> */}
          {/* <button onClick={removeUser}>Log-Out</button> */}

          <p id='achievement'>Achievements</p>
          <Achievements />

          <div id="logout-container">
            <span id="logout" className="hover" onClick={removeUser}>
              Log out
            </span>
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
