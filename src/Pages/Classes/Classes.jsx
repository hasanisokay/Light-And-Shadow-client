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
        <div>
              <Helmet>
                <title>Light & Shadow | Classes</title>
            </Helmet>
            <div className='grid grid-cols-1 overflow-hidden pt-20 mx-6'>
            {
               classes && classes.map((singleClass)=><ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
            }
            </div>
            
        </div>
    );
};

export default Classes;