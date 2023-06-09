import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json"

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    // console.log(location);
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto' animationData={loadingJson} loop={true} />;
    }
    if (user) {
        return children;
    }

    return <Navigate to={"/"} state={location} replace></Navigate>
};

export default PrivateRoute;