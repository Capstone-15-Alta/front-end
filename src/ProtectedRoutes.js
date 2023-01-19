import React from 'react'
import Cookies from 'js-cookie'
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({allowRoles}) => {
  const roles= Cookies.get("roles");

  // console.log(allowRoles)
  // console.log(roles)

  return roles == allowRoles ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes