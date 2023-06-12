import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Lottie from "lottie-react";
import loadingJson from "../../assets/loading.json"
import { Fade } from 'react-awesome-reveal';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    const {user} = useAuth();
    const navigate = useNavigate()
    const handleInstractor = (id) => {
        navigate(`/instructor/${id}`)
    }
    
    const page = 1;
    const {data:loadedInstructors=[], isLoading:isInstructorsLoading , refetch} = useQuery({
        queryKey: ["loadedInstructors", user?.email ],
        queryFn: async ()=>{
            const data = await axios.get("https://light-and-shadow.vercel.app/instructors");
            setInstructors(data.data);
           return data.data
        },
    }) 
    if(isInstructorsLoading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
      }

    // useEffect(() => {
    //     fetch("https://light-and-shadow.vercel.app/instructors")
    //         .then(res => res.json())
    //         .then(data => setInstructors(data))
    // }, [])
    // console.log(instructors);
    return (
        <div>
            <Helmet>
                <title>Light & Shadow | Instructors</title>
            </Helmet>
            <div className='pt-20 lg:px-10 px-4 mb-4'>
                <Fade duration={3000}><h3 className='font-poppins text-3xl text-center'>Meet Our Talented Instructors</h3></Fade>
         <Fade duration={5000}>       <p className='font-roboto'>Light & Shadow is proud to have a team of experienced and passionate instructors who are dedicated to helping you enhance your photography skills. Each instructor brings a unique perspective and expertise, ensuring that you receive comprehensive guidance in various aspects of photography. Whether you're a beginner or an advanced photographer, our instructors are here to inspire, educate, and support you on your creative journey. Explore their profiles below to learn more about their backgrounds, specialties, and teaching approach</p></Fade>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-6 overflow-hidden'>
                {
                    instructors.map((instructor, index) => <div key={instructor._id} className="bg-[#d7d2b7] overflow-hidden hover:scale-105 transition rounded-t-2xl rounded-b-md ">
                        <figure className='w-full h-64'><img src={instructor.image} className='h-full w-full' alt="instructor" /></figure>
                        <div className="mx-4 my-4 text-black">
                            <h2 className="text-xl"> Name: <span className='font-semibold' >{instructor.name}</span> </h2>
                            <h2 className="text-lg ">Email: <span className='font-semibold'>{instructor.email}</span></h2>
                            <h2 className="text-lg">Total students in class: <span className='font-semibold'>{instructor.students_in_class}</span></h2>
                            <h2 className="text-lg mb-2 ">Total Class Taken:<span className='font-semibold'>{instructor.classes_taken}</span></h2>
                            <button onClick={() => handleInstractor(instructor._id)} className='bg-[#031003] py-1 px-2 rounded-lg hover:bg-[#111827] text-white cursor-pointer'>See Classes</button>

                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Instructors;