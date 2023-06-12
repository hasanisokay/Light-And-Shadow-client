import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import useAuth from '../Hooks/useAuth';

const Main = () => {
    const {themeSwitch} =useAuth()
    const location = useLocation()
    // console.log(location.pathname);
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div className={`${themeSwitch ? "bg-[#031003] text-white" : "bg-white text-black"}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;