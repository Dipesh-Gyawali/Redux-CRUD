import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const authentication = useSelector((state) => state.auth);
  console.log(authentication, "authtication true or false hunxa result");

  return authentication ? <Outlet /> : <Navigate to="/login"></Navigate>;
};
