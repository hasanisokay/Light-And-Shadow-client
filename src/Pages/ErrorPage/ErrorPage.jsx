import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorLottieFile from "../../assets/error.json"
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='text-center overflow-hidden'>
              <Helmet>
                <title>Light & Shadow | Error</title>
            </Helmet>
            <Lottie animationData={errorLottieFile} className='w-[500px] mx-auto'/>
            <h1 className='text-red-500 text-xl font-bold'>{status}</h1>
            <h1 className='text-xl font-bold mb-4'> {error ?.message}</h1>
            <Link to="/" className='btn text-xl font-semibold rounded'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;