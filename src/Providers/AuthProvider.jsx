import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from '../Firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    const updateUserProfile = (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }
    const googleProvider = new GoogleAuthProvider()

    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log(currentUser);
            // get and set token
            // instead of fetch here were using axios. 
           if(currentUser){
            axios.post(`https://bistro-boss-server-neon.vercel.app/jwt`,{
                email:currentUser.email
            })
            .then(data=>{
                // console.log(data.data.token);
                localStorage.setItem("access-token", data.data.token)
                setLoading(false)
            })
           }
           else{
            localStorage.removeItem("access-token")
           }
            
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    
    
    const authInfo = {
        user, loading, createUser, logOut, googleSignIn, signIn, updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;