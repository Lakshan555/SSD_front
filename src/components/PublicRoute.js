import {
    Route,
    Navigate,
    Outlet
} from 'react-router-dom';


const PublicRoute = ({ children, ...rest }) => {
  const isLoggedIn = localStorage.getItem("userToken");
    return (
        isLoggedIn ? <Navigate to="/home" /> : <Outlet />
    );
}

export default PublicRoute;