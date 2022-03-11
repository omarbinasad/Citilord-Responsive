import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RedirectRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  let location = useLocation();
  if (!user.emailVerified) {
    return children;
  }
  return <Navigate to="/user-profile" state={{ from: location }} />;
};

export default RedirectRoute;
