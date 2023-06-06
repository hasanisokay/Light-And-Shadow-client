import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.email, data.password);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        const saveUser = {name: data.name, email:data.email}
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            fetch(`https://bistro-boss-server-neon.vercel.app/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset()
                  Swal.fire(
                    'Updated',
                    'Profile information updated',
                    'success'
                  )
                  navigate("/")
                }
              })
          })
          .catch(error => console.log(error))
      })

  };
  // console.log(watch("example"));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <input type="text" {...register("photoURL", { required: true })} placeholder="photo URL" name='photoURL' className="input input-bordered" />
                {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === "minLength" && <span className='text-red-600'>Password must be 6 character long</span>}
                {errors.password?.type === "maxLength" && <span className='text-red-600'>Maximum password length is 20 character</span>}
                {errors.password?.type === "pattern" && <span className='text-red-600'>Password Must have one number, uppercse, lowercase and special character</span>}

                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p>Already have an account? <Link to={"/login"}>please login</Link></p>
              <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;