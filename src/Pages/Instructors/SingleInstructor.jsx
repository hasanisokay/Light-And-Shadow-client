import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClassCard from '../Shared/ClassCard/ClassCard';


const SingleInstructor = () => {
    const { id } = useParams()
    const [classes, setClasses] = useState([]) 

    useEffect(() => {
        fetch(`http://localhost:5000/instructor/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setClasses(data);
            })
    }, [])
    // console.log(classes);
    return (
        <div className='lg:w-[80%] w-[90%] pt-20 mx-auto'>
            {
               classes && classes.map((singleClass)=><ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
            }
            
        </div>
    );
};

export default SingleInstructor;