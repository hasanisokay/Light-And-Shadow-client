import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {

    const location = useLocation()
    // console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div className='bg-[#031003]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;