import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import lottieLogin from "../../assets/loginJson.json"
import { useForm } from "react-hook-form";
import { FaEye } from 'react-icons/fa';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const previousClickedPath = location.state?.pathname || "/"
    const { signIn,user } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [disable, setDisable] = useState(false)
    const [passwordType, setPasswordType] = useState("password")


    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                navigate(previousClickedPath, { replace: true })
            })
    }

    return (
        <>
            <Helmet>
                <title>Light & Shadow | Sign in</title>
            </Helmet>
            <div className="hero min-h-screen pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <Lottie animationData={lottieLogin} className='w-full' />
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-[#d7d2b7]">
                        <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className='font-poppins font-semibold text-2xl text-center'>Login Please</h3>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input text-black input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control flex">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={passwordType} name='password' {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                                })} placeholder="password" className=" w-full input text-black input-bordered" />
                                <div className='flex mt-2 items-center gap-4 mx-2'>
                                    <FaEye className='cursor-pointer' onClick={() => passwordType === "password" ? setPasswordType("text") : setPasswordType("password")} />
                                    <p className='text-xs font-roboto cursor-pointer' onClick={() => passwordType === "password" ? setPasswordType("text") : setPasswordType("password")}>{passwordType === "password" ? "Show Password" : "Hide Password"} </p>
                                </div>
                                {errors.password?.type === "minLength" && <span className='text-red-600'>Password must be 6 character long</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximum password length is 20 character</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-600'>Password Must have one number, uppercse, lowercase and a special character</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="bg-[#031003] py-1 rounded-full text-white cursor-pointer" disabled={disable} type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small className='font-semibold text-lg'>New Here? <Link to="/signup" className='text-blue-600'>Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;