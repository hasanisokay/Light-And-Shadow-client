import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Lottie from "lottie-react";
import lottiesignup from '../../assets/signUpLottie.json';
const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [passwordType, setPasswordType] = useState("password")
  const [confirmPasswordType, setConfirmPasswordType] = useState("password")
  const onSubmit = data => {
    console.log(data);

    // console.log(data.email, data.password);
    // createUser(data.email, data.password)
    //   .then(result => {
    //     const loggedUser = result.user;
    //     // console.log(loggedUser);
    //     const saveUser = {name: data.name, email:data.email}
    //     updateUserProfile(data.name, data.photoURL)
    //       .then(() => {
    //         fetch(`https://bistro-boss-server-neon.vercel.app/users`, {
    //           method: "POST",
    //           headers: {
    //             "content-type": "application/json"
    //           },
    //           body: JSON.stringify(saveUser)
    //         })
    //           .then(res => res.json())
    //           .then(data => {
    //             if (data.insertedId) {
    //               reset()
    //               Swal.fire(
    //                 'Updated',
    //                 'Profile information updated',
    //                 'success'
    //               )
    //               navigate("/")
    //             }
    //           })
    //       })
    //       .catch(error => console.log(error))
    //   })

  };

  return (
    <>
      <Helmet>
        <title>Light & Shadow | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-[#031003]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={lottiesignup} className='w-full' />
          </div>
          <div className="card w-full shadow-2xl bg-[#d7d2b7]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className='font-poppins font-semibold text-2xl text-center'>Sign Up</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="name" name='name' className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="url" {...register("photoURL", { required: true })} placeholder="photo URL" name='photoURL' className="input input-bordered" />
                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={passwordType} name='password' {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                <div className='flex mt-2 items-center gap-4 mx-2'>
                  <FaEye className='cursor-pointer' onClick={() => passwordType === "password" ? setPasswordType("text") : setPasswordType("password")} />
                  <p className='text-xs font-roboto cursor-pointer' onClick={() => passwordType === "password" ? setPasswordType("text") : setPasswordType("password")}>{passwordType === "password" ? "Show Password" : "Hide Password"} </p>
                </div>
                {errors.password?.type === "minLength" && <span className='text-red-600'>Password must be 6 character long</span>}
                {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximum password length is 20 character</span>}
                {errors.password?.type === "pattern" && <span className='text-red-600'>Password Must have one number, uppercse, lowercase and a special character</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type={confirmPasswordType} name='confirmPassword' {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                })} placeholder="confirm password" className="input input-bordered" />
                <div className='flex mt-2 items-center gap-4 mx-2'>
                  <FaEye className='cursor-pointer' onClick={() => confirmPasswordType === "password" ? setConfirmPasswordType("text") : setConfirmPasswordType("password")} />
                  <p className='text-xs font-roboto cursor-pointer' onClick={() => confirmPasswordType === "password" ? setConfirmPasswordType("text") : setConfirmPasswordType("password")}>{confirmPasswordType === "password" ? "Show Password" : "Hide Password"} </p>
                </div>
                {errors.confirmPassword?.type === "minLength" && <span className='text-red-600'>Password must be 6 character long</span>}
                {errors.confirmPassword?.type === "maxLength" && <span className='text-red-600'>Maximum password length is 20 character</span>}
                {errors.confirmPassword?.type === "pattern" && <span className='text-red-600'>Password Must have one number, uppercse, lowercase and a special character</span>}
              </div>
              <div className="form-control mt-6">
                <input className="bg-[#031003] py-1 rounded-full  text-white cursor-pointer" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='font-semibold text-lg text-center'>Already have an account? <Link to={"/login"} className='text-blue-600'>Please login</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;