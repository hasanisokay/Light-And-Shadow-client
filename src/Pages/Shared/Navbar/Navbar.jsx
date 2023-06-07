import React from 'react';
import { useContext } from 'react';
import { NavLink ,Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import {FaShoppingCart} from "react-icons/fa"
import logo from "../../../assets/222.png"
// import useCart from '../../../Hooks/useCart';
// import useAdmin from '../../../Hooks/useAdmin';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const {pathname} = useLocation()
    const navOptions = <>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/"}>Home</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/instructors"}>Instructors</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/classes"}>Classes</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/dashboard"}>Dashboard</NavLink></li>
    </>
    return (
        <>
            <div className={`navbar fixed z-10 w-full ${pathname ==="/" && "lg:w-[30%] lg:bg-opacity-0"}  bg-black text-white max-w-screen-xl bg-opacity-30`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 border-2 font-bold bg-[#031003] bg-opacity-25 hover:bg-opacity-95 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className=" h-16 w-" to="/"><img className=' h-full w-full text-white ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-start">
                {user ? (<div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-zinc-600 w-52 ">
                        <li><Link to={"/profile"}>Profile</Link></li>
                        <li><Link onClick={()=>logOut()}>Logout</Link></li>
                    </ul>
                </div>) : <Link to={"/login"} >Login</Link>}
            </div>
            </div>
        </>
    );
};

export default Navbar;