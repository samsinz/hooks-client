import React from "react";
import useAuth from "../../auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import "../../styles/loading.css";

const PrivateRoute = () => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading)
    return (
      <p className="Loading">
        {/* <div className="icon">
          <div className="border-gradient-circular hover icon"> </div>
        </div> */}
      </p>
    );
  if (!isLoggedIn) return <Navigate to="/" />;
  else return <Outlet />;
};

export default PrivateRoute;
