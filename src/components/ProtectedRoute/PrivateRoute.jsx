import React from "react";
import useAuth from "../../auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/loading.css";
import hooksLogo from "../../assets/images/hooks-logo.png";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading)
    return (
      <div className="Loading">
        <div className="icon">
          <div className="circle icon circle-animation">
            <img src={hooksLogo} alt="hooks" />
          </div>
        </div>
      </div>
    );
  if (!isLoggedIn) return <Navigate to="/" />;
  else return <Outlet />;
};

export default PrivateRoute;
