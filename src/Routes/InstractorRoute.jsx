import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';
import useAuth from '../Hooks/useAuth';
import Lottie from "lottie-react";
import loadingJson from "../assets/loginJson.json"
const InstractorRoute = ({children}) => {
    const location = useLocation()
    const [isInstructor, isInstructorLoading] = useInstructor()

    // console.log(location);
    const { user, loading } = useAuth()
    if (loading || isInstructorLoading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
    }
    if (user && isInstructor) {
        return children;
    }

    return <Navigate to="/" state={location} replace></Navigate>
};

export default InstractorRoute;