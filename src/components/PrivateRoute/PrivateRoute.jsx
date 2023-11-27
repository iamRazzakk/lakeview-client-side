import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;