import React from 'react';
import { useContext } from 'react';
import { NavLink ,Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import {FaShoppingCart} from "react-icons/fa"
// import useCart from '../../../Hooks/useCart';
// import useAdmin from '../../../Hooks/useAdmin';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const {pathname} = useLocation()
    const navOptions = <>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/"}>Home</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/login"}>Login</NavLink></li>
    </>
    return (
        <>
            <div className={`navbar fixed z-10 w-full ${pathname ==="/" && "lg:w-[30%]"}  bg-black text-white max-w-screen-xl bg-opacity-30`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 border-2 font-bold bg-[#031003] bg-opacity-25 hover:bg-opacity-95 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                    <Link>Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;