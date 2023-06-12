import axios from 'axios';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import { useState } from 'react';
import { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import camera from "../../../assets/images/camera.png"
const Feedback = () => {

    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        axios.get("https://light-and-shadow.vercel.app/stuedntsFeedback")
            .then(res => setFeedbacks(res.data))
    }, [])
    return (
        <div className=' mx-6 pt-20 '>
            <div className='w-full flex gap-4 items-center justify-center lg:flex-row flex-col-reverse'>
               <div className='lg:w-[50%] w-[90%]'> <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    interval={5000}
                >
                    {
                        feedbacks.map(feedback =>
                            <div key={feedback._id} className=' w-full'>
                                <div className="rounded-xl text-black my-2 bg-[#d7d2b7] shadow-xl ">
                                        <div className='pt-2 flex flex-col items-center justify-center'>
                                            <div className='w-24 h-24 rounded-full overflow-hidden'><img src={feedback.image} className='w-full h-full object-cover' alt="Shoes" /></div>
                                            <h2 className='text-xl font-semibold'>{feedback.name}</h2>
                                            <p className='text-xs mb-4'>{feedback.location}</p>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Fade delay={1e3} duration={2000} cascade damping={1e-1}>
                                                <p className=''>{feedback.feedback.slice(0,120)}...</p>
                                            </Fade>                                       </div>
                                        <div className='flex justify-center pb-4'>
                                            <FaQuoteLeft className='text-[#fad932] w-12 h-12' />
                                        </div>
                                    </div>
                                </div>)
                    }

                </Carousel></div>
            <div className='w-full '>
                <h1 className='text-3xl font-semibold font-poppins'>What Our Students Say</h1>
                <Fade duration={5000}>
                <p className='lg:w-[70%]'>Discover what our students have to say about their experience at Light & Shadow. We take pride in nurturing talent, fostering creativity, and providing a supportive learning environment. Read their inspiring testimonials below and see how our photography school has made a positive impact on their artistic journey</p>
                </Fade>
                
            </div>

            </div>
        </div>
    );
};

export default Feedback;