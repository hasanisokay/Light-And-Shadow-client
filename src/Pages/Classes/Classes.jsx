import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassCard from '../Shared/ClassCard/ClassCard';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import Lottie from "lottie-react";
import loadingJson from "../../assets/loading.json"

const Classes = () => {
    const [classes, setClasses] = useState([])
    const {user} = useAuth()
    const page = 1; 

    const {data: loadedClasses=[], isLoading:isClassesLoading, refetch, error} = useQuery({
        queryKey:["loadedClasses", page],
        queryFn: async()=>{
            const data = await axios.get("http://localhost:5000/classes")
            setClasses(loadedClasses);
            return data.data
        }
    }) 
    if(isClassesLoading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
      }
    return (
        <div className='mx-6'>
              <Helmet>
                <title>Light & Shadow | Classes</title>
            </Helmet>
            <h1 className='font-semibold font-poppins text-white pt-20 text-center text-xl lg:text-3xl'>Browse and Enroll in our Exciting Photography Classes</h1>
            <p className='text-white font-roboto mb-4'>Welcome to our comprehensive classes page, where you can explore a wide variety of captivating photography courses tailored to suit your interests and skill level. From mastering the fundamentals to exploring advanced techniques, our classes are designed to empower you with the knowledge and skills needed to elevate your photography game. With a diverse range of topics, including landscape photography, portrait photography, photo editing, and more, there's something for every aspiring photographer. Take the next step in your photographic journey and enroll in a class today to unlock your creative potential and capture stunning moments with confidence.</p>
            <div className='grid grid-cols-1 overflow-hidden'>
            {
               classes && classes.map((singleClass)=><ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
            }
            </div>
            
        </div>
    );
};

export default Classes;