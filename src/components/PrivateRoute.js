import { Route, Navigate, Outlet } from "react-router-dom";
// import { getUserSessionDetails } from '../../helpers/userSessionHandler';

const PrivateRoute = ({ children, ...rest }) => {
  // const { isLoggedIn } = getUserSessionDetails();
  const isLoggedIn = localStorage.getItem("userToken");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
