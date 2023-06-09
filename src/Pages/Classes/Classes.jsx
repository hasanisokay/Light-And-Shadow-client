import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ClassCard from '../Shared/ClassCard/ClassCard';

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/classes`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    console.log(classes);
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