import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg from "../../../assets/images/slider-img.png"
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Banner = () => {
    const {themeSwitch} =useAuth()
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide + 1);
    };
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };
    const handleCarouselChange = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div className={` flex font-sans lg:flex-row-reverse flex-col gap-2`}>
            <div className=''>
                <img src={bannerImg} className='w-[900px] h-[600px]' />
            </div>
            <div className="lg:w-[30%] rounded lg:pt-20 lg:ml-10 lg:mx-0 md:mx-0 mx-6">
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3500}
                    selectedItem={currentSlide}
                    onChange={handleCarouselChange}
                >
                    <Fade duration={2000}>
                        <div className=' '>
                            <h3 className='lg:text-4xl text-3xl py-4 px-2 font-julious'  >Ignite Your Passion for Photography</h3>
                            <Fade>
                                <p className='text-base px-1 font-roboto' > Fuel your passion for photography with our comprehensive programs designed for both beginners and enthusiasts.</p>
                            </Fade>
                            <Link to='/classes'><button className="my-btn my-4">See All Classes</button></Link>
                        </div>
                    </Fade>
                    <Fade duration={2000}>
                        <div className=' '>
                            <h3 className='lg:text-4xl text-3xl py-4 px-2 font-julious'  >Transform Your Passion into Art</h3>
                            <Fade>
                                <p className='text-base px-1 font-roboto' > Nurture your passion for photography and transform it into a medium of artistic expression. Learn how to communicate your unique perspective through captivating visuals.</p>
                            </Fade>
                            <Link to='/classes'><button className="my-btn my-4">See All Classes</button></Link>
                        </div>
                    </Fade>
                    <Fade duration={2000}>
                        <div className=' '>
                            <h3 className='lg:text-4xl text-3xl py-4 px-2 font-julious' >Unleash Your Creativity</h3>
                            <Fade>
                                <p className='text-base px-1 font-roboto' >Discover the joy of expressing your artistic vision through photography at our school. Unleash your creativity and capture stunning moments that inspire.</p>
                            </Fade>
                            <Link to='/classes'><button className="my-btn my-4">See All Classes</button></Link>
                        </div>
                    </Fade>

                </Carousel>

                <div className='flex lg:flex-row flex-row-reverse items-center justify-between mx-6 my-2'>
                    <div className="slider-controls  flex gap-2 items-center lg:justify-start justify-center">
                        <button className='border-white border w-8 h-8 rounded-full hover:bg-[#fad932] hover:border-0' onClick={handlePrevSlide}><FaAngleLeft className='w-full h-full' /> </button>
                        <button className='border-white border w-8 h-8 rounded-full hover:bg-[#fad932] hover:border-0' onClick={handleNextSlide}><FaAngleRight className='w-full h-full' /> </button>
                    </div>
                    <div className="flex justify-center ">
                        {[0, 1, 2].map((index) => (
                            <div
                                onClick={() => setCurrentSlide(index)}
                                key={index}
                                className={`w-6 h-1 mx-1 cursor-pointer rounded-full ${currentSlide === index ? 'bg-[#fad932]' : 'bg-gray-500'
                                    }`}>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;