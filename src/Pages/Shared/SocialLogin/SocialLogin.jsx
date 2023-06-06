import React, { useContext } from 'react';
import {FaGoogle} from "react-icons/fa"
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const previousClickedPath = location.state?.pathname || "/"
    const {googleSignIn } = useContext(AuthContext) 
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {name: loggedInUser.displayName, email:loggedInUser.email}
            console.log(saveUser);

            fetch(`https://bistro-boss-server-neon.vercel.app/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json"
                },
                body: JSON.stringify(saveUser)
              })
                .then(res => res.json())
                .then(() => {
                navigate(previousClickedPath, {replace: true})
                })




           
        })
    }

    return (
        <div>
            <div className="divider">
            </div>
            <div className='text-center my-4'><FaGoogle onClick={handleGoogleSignIn} className='btn border-0 btn-circle btn-outline'/></div>
        </div>
    );
};

export default SocialLogin;