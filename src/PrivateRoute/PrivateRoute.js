import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  let location = useLocation();
  if (user.email) {
    return children;
  }
  return <Navigate to="/user-profile" state={{ from: location }} />;
};

export default PrivateRoute;
