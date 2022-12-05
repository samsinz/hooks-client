import React, { useEffect, useState } from "react";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Age from "../components/charts/Age";
import Orgasms from "../components/charts/Orgasms";
import Safe from "../components/charts/Safe";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <div className="Dashboard">
      <div id="title">
        <h1 className="bold">Dashboard</h1>
        <h3 className="hover"><span className="add">+</span> Add a new hook</h3>
      </div>

      <div className="top-row">
        <div id="activity">
            {/* <h1>h1 1.4rem text</h1>
            <h2>h2 1.2rem text</h2>
            <h3>h3 1rem text</h3>
            <h4>h3 0.8rem text</h4>
            <p>Paragraph 1rem text</p> */}

        </div>
        <div id="favorites"></div>
      </div>
      <div className="middle-row">
        <div id="safe"><Safe/></div>
        <div id="ratings"></div>
      </div>
      <div className="bottom-row">
        <div id="duration"></div>
        <div id="age"><Age/></div>
        <div id="orgasms"><Orgasms/></div>
      </div>

    </div>
  );
};

export default Dashboard;
