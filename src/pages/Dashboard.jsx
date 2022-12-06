import React, { useEffect, useRef, useState } from "react";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Age from "../components/charts/Age";
import Orgasms from "../components/charts/Orgasms";
import Safe from "../components/charts/Safe";
import Favorites from "../components/charts/Favorites";

import "../styles/Dashboard/dashboard.css";
import Duration from "../components/charts/Duration";
import Ratings from "../components/charts/Ratings";
import Activities from "../components/charts/Activities";
import AddHookForm from "../components/Forms/AddHookForm";

const Dashboard = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  const addHook = useRef();

  const openAddHook = () => {
    addHook.current.showModal();
  };

  const closeAddHook = () => {
    addHook.current.close();
  };

  if (!currentUser.partners.length) {
    return (
      <div className="Dashboard">
        <div className="empty hover" onClick={openAddHook}>
          <h2>You don't have any hooks at the moment.</h2>
          <h2 >Add your first now</h2>
          <span id="big-add" className="hover" >
            +
          </span>
        </div>
        <dialog ref={addHook}>
          <AddHookForm closeAddHook={closeAddHook} />
        </dialog>
      </div>
    );
  }

  return (
    <div className="Dashboard">
      <div id="title">
        <h1 className="bold">Dashboard</h1>
        <h3 className="hover" onClick={openAddHook}>
          <span className="add">+</span> Add a new hook
        </h3>
      </div>

      <div className="top-row">
        <div id="activity">
          <Activities />
        </div>
        <div id="favorites">
          <Favorites />
        </div>
      </div>
      <div className="middle-row">
        <div id="safe">
          <Safe />
        </div>
        <div id="ratings">
          <Ratings />
        </div>
      </div>
      <div className="bottom-row">
        <div id="duration">
          <Duration />
        </div>
        <div id="age">
          <Age />
        </div>
        <div id="orgasms">
          <Orgasms />
        </div>
      </div>
      <dialog ref={addHook}>
        <AddHookForm closeAddHook={closeAddHook} />
      </dialog>
    </div>
  );
};

export default Dashboard;
