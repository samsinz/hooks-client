import React, { useEffect, useState } from "react";
import service from "../api/apiHandler";
import useAuth from "../auth/useAuth";
import Orgasms from "../components/charts/Orgasms";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <div className="Dashboard">
      <div id="title">
        <h1>Dashboard</h1>
        <span className="hover"><span className="add">+</span> Add a new hook</span>
      </div>

      <div className="top-row">
        <div id="activity"></div>
        <div id="favorites"></div>
      </div>
      <div className="middle-row">
        <div id="safe"></div>
        <div id="ratings"></div>
      </div>
      <div className="bottom-row">
        <div id="orgasms"><Orgasms/></div>
        <div id="age"></div>
        <div id="duration"></div>
      </div>
    </div>
  );
};

export default Dashboard;
