import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import useAuth from '../../../Hooks/useAuth';
const Footer = () => {
    const {themeSwitch} = useAuth()
    const date = new Date();
    const presentYear = date.getFullYear();
    return (
        <footer className='font-poppins '>
            <div className="flex lg:flex-row  flex-col items-center">
                <div className='p-10 w-full'>
                    <h3 className='font-bold lg:ml-20 my-2 text-3xl'>Contact US</h3>
                    <div className='flex gap-10 '>
                        <div>
                            <span className='flex gap-4 items-center mt-2'><FaMapMarkerAlt />43/A Mirpur, Dhaka</span>
                            <span className='flex gap-4 items-center mt-2'><FaEnvelope />admin@lightandshadow.com</span>
                            <span className='flex gap-4 items-center mt-2'><FaPhoneAlt />Call +88 01600000000</span>
                        </div>
                        <ul className='text-semibold mt-2'>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="/classes"><li>Classes</li></Link>
                            <Link to="/instructors"><li>Instructors</li></Link>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full justify-center items-center'>

                    <Link className='' to="/"><img className={`w-52 ${themeSwitch ? "invert brightness-0":""}`} src={logo} alt="" /></Link>
                    <div className="flex gap-4 w-full justify-center ">
                        <Link><FaTwitter className='w-10 h-10' /></Link>
                        <Link><FaFacebookSquare className='w-10 h-10' /></Link>
                        <Link><FaInstagram className='w-10 h-10' /></Link>
                        <Link><FaYoutube className='w-10 h-10' /></Link>
                        <Link><FaLinkedinIn className='w-10 h-10' /></Link>
                    </div>

                </div>
            </div>
            <div>
                <p className='text-center py-2'>Copyright © {presentYear} - All right reserved by Light & Shadow</p>
            </div>

        </footer>
    );
};

export default Footer;