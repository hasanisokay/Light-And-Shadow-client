import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClassCard from '../Shared/ClassCard/ClassCard';
import { Helmet } from 'react-helmet-async';


const SingleInstructor = () => {
    const { id } = useParams()
    const [classes, setClasses] = useState([]) 

    useEffect(() => {
        fetch(`https://light-and-shadow.vercel.app/instructor/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setClasses(data);
            })
    }, [])
    // console.log(classes);
    return (
        <div className='lg:w-[80%] w-[90%] pt-20 mx-auto'>
              <Helmet>
                <title>Light & Shadow | Instructor</title>
            </Helmet>
            {
               classes && classes.map((singleClass)=><ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
            }
            
        </div>
    );
};

export default SingleInstructor;