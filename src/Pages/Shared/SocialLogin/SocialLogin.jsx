import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa"
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import googleIcon from "../../../assets/google-icon.png"
const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const previousClickedPath = location.state?.pathname || "/"
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;

                const newUser = { name: loggedInUser.displayName, email: loggedInUser.email, image:loggedInUser.photoURL }
                fetch(`https://light-and-shadow.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        navigate(previousClickedPath, { replace: true })

                    })
            })
    }

    return (
        <div>
            <div className="divider font-semibold"> Or
            </div>
            <div onClick={handleGoogleSignIn} className='flex items-center bg-[#031003] py-1 rounded-full cursor-pointer  text-white justify-center my-4 border-0 mx-6'>
                <img src={googleIcon} alt="" className='h-6' />
                <p>Cointinue with Google</p>
            </div>
        </div>
    );
};

export default SocialLogin;