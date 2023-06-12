import React from 'react';
import { useContext } from 'react';
import { NavLink ,Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import {FaChalkboardTeacher, FaGraduationCap, FaHome, FaMoon, FaShoppingCart, FaUserTie} from "react-icons/fa"
import logo from "../../../assets/logo.png"
import useInstructor from '../../../Hooks/useInstructor';
import useAdmin from '../../../Hooks/useAdmin';
import useThemeSwitch from '../../../Hooks/useThemeSwitch';

const Navbar = () => {

    // const [handleThemeSwitch] = useThemeSwitch()
    const { user, logOut, loading, themeSwitch, setThemeSwitch } = useContext(AuthContext);
    const {pathname} = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const navOptions = <>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/"}><FaHome/> Home</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/instructors"}><FaUserTie/> Instructors</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/classes"}><FaGraduationCap/> Classes</NavLink></li>
        {
            (!loading && ! isAdminLoading && ! isInstructorLoading) &&(
            (isAdmin && <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/dashboard/admin"}><FaChalkboardTeacher/> Dashboard</NavLink></li>) ||
            (isInstructor && <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/dashboard/instructor"}><FaChalkboardTeacher/> Dashboard</NavLink></li>) || 
            (user && <li ><NavLink  className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/dashboard/student"}><FaChalkboardTeacher/> Dashboard</NavLink></li>)
            )
        }
        <li><span onClick={()=>setThemeSwitch(!themeSwitch)}> <FaMoon/> {themeSwitch ? "Light Theme": "Dark Theme"} </span></li>
    </>
    return (
        <>
            <div className={`navbar fixed z-50 w-full bg-black text-white max-w-screen-xl `}>
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`text-[#fad932] h-5 w-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact z-50 dropdown-content mt-4 p-2 border-2 font-bold bg-[#031003] bg-opacity-95 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className='' to="/"><img className={`w-36 invert brightness-0`} src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end">
                {user ? (<div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar" title={user?.displayName}>
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#031003] bg-opacity-80 hover:bg-opacity-95 w-52 border-2 rounded-box ">
                        <li className='hover:bg-[#fad932] transform duration-300 hover:rounded hover:text-lg' ><NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to={"/profile"}>Profile</NavLink></li>
                        <li className='hover:bg-[#fad932] transform duration-300 hover:rounded hover:text-lg'><Link onClick={()=>logOut()}>Logout</Link></li>
                    </ul>
                </div>) : <Link to={"/login"} className="text-[#fad932]" >Login</Link>}
            </div>
            </div>
        </>
    );
};

export default Navbar;