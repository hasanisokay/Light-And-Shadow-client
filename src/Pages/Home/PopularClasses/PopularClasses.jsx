import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bg from "../../../assets/images/gallery-bg.png"
import ClassCard from '../../Shared/ClassCard/ClassCard';
import { Fade } from 'react-awesome-reveal';
const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        axios.get(`https://light-and-shadow.vercel.app/classes/popular`)
            .then(data => setPopularClasses(data.data))
    }, [])
    return (
        <div className='mx-6 mt-4'>
            <div className=' mb-4 ' >
                <Fade duration={3000}>
                <h1 className='text-3xl font-semibold font-poppins'>Popular Classes to Elevate Your Photography Skills</h1>
                </Fade>
                <Fade duration={5000} >
                    <p className='mt-1'>Explore our curated selection of popular classes that have captivated aspiring photographers around the world. Whether you're a beginner eager to learn the fundamentals or an experienced shutterbug looking to expand your repertoire, we have the perfect class to suit your needs. Enroll in one or more of these popular classes and join a community of passionate photographers who are dedicated to honing their craft. Unleash your creativity, expand your technical knowledge, and embark on a transformative journey that will elevate your photography skills to new heights.</p>
                </Fade>
                <Link to="/classes"><button className='my-btn my-4'>See All Classes</button></Link>
            </div>
            <div className='overflow-hidden'>
                {
                    popularClasses.map(singleClass => <ClassCard key={singleClass._id} singleClass={singleClass}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;