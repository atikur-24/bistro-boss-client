import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Progress from "../components/Progress";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <Progress />
    }
    else if(user) {
        return children 
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;