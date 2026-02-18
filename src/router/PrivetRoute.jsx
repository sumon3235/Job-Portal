import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();


    if(loading) {
        return <div className="flex justify-center items-center md:my-40 my-72">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to="/signin" state={location?.pathname}></Navigate>
    );
};

export default PrivetRoute;