import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import bg from "../../../assets/images/gallery-bg.png"
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./style.css"
const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    
    const navigate = useNavigate()
    const handleInstractor = (id) => {
        navigate(`/instructor/${id}`)
    }

    useEffect(() => {
        axios("http://localhost:5000/instructors/popular")
            .then(data => setInstructors(data.data))
    }, [])
    return (
        <div className='mx-6 lg:my-52 mt-14 md:mt-32 flex lg:flex-row flex-col-reverse md:gap-4 md:items-center justify-around md:flex-row  lg:items-center'>
            <div className='grid grid-cols-2 md-[50%] lg:w-[50%] lg:gap-2 gap-4'>
                {
                    instructors.map(instructor => <div className='text-white' key={instructor._id}>
                        <img src={instructor.image} className='relative max-h-[150px] min-h-[150px] max-w-[150px] min-w-[150px] lg:max-h-[150px] lg:min-h-[150px] lg:max-w-[200px] lg:min-w-[200px] border-4 rounded' alt="" />
                        <div className='absolute z-10 lg:-mt-[150px] -mt-[150px] py-2 px-2 max-h-[150px] min-h-[150px] max-w-[150px] min-w-[150px] lg:max-h-[150px] lg:min-h-[150px] lg:max-w-[200px] lg:min-w-[200px] bg-black bg opacity-0 hover:opacity-80'>
                            <p className='lg:text-base text-xs'>Instructor: <span className='font-semibold'>{instructor.name}</span></p>
                            <p className='text-xs lg:text-base'>Students in class: <span className='font-semibold'>{instructor.students_in_class}</span></p>
                            <button onClick={() => handleInstractor(instructor._id)} className='bg-[#fad932] md:my-3 lg:py-2 py-0.5 px-2 lg:px-5 hover:bg-inherit hover:text-[#fad932] hover:border-[#fad932] hover:border rounded-full text-black md:text-xs'>See Classes</button>
                        </div>
                    </div>)
                }
            </div>

            <div className='lg:w-[60%] md:w-[50%]'>
                <div className='text-white flex flex-col items-end'>
                    <div className='text-white' >
                        <h1 className='font-poppins font-semibold lg:text-3xl text-xl'>Discover Our Popular Instructors</h1>
                        <p className='mt-4'>Step into the world of photography with guidance from our popular instructors, who have captivated students with their expertise and passion. Each instructor brings a unique blend of artistic vision and technical mastery, making them highly sought-after mentors in the field. Whether you're a novice photographer or an experienced shutterbug, our popular instructors are here to inspire and guide you on your creative journey. From their engaging teaching styles to their ability to ignite a love for photography, our instructors have garnered a reputation for delivering transformative learning experiences..</p>
                        <Link to="/instructors"><button className='my-btn my-4'>See All Instructors</button></Link>
                    </div>
                </div>
                {/* <div>
                    <div><img src={bg} className='transform rotate-45 h-full w-[90%]' alt="" /></div>
                </div> */}
            </div>
            {/* <div className='lg:mb-10 mb-8 mt-10'>
                <div className='text-white flex flex-col items-end'>
                    <div className='text-white lg:w-[40%] lg:text-start mb-14 md:mb-24 mt-10 mx-6' >
                        <h1 className='font-poppins font-semibold lg:text-3xl text-xl'>Discover Our Popular Instructors</h1>
                        <p className='mt-4'>Step into the world of photography with guidance from our popular instructors, who have captivated students with their expertise and passion. Each instructor brings a unique blend of artistic vision and technical mastery, making them highly sought-after mentors in the field. Whether you're a novice photographer or an experienced shutterbug, our popular instructors are here to inspire and guide you on your creative journey. From their engaging teaching styles to their ability to ignite a love for photography, our instructors have garnered a reputation for delivering transformative learning experiences..</p>
                        <Link to="/instructors"><button className='my-btn my-4'>See All Instructors</button></Link>
                    </div>
                </div>
                {/* <div>
                    <div><img src={bg} className='transform rotate-45 h-full w-[90%]' alt="" /></div>
                </div> */}
        </div>
    );
};

export default PopularInstructors;