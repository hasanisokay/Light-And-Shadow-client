import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Grid, Pagination } from "swiper";
import img1 from "../../../assets/images/gallery-1.jpg";
import img2 from "../../../assets/images/gallery-2.jpg";
import img3 from "../../../assets/images/gallery-3.jpg";
import img4 from "../../../assets/images/gallery-4.jpg";
import galleryBg from "../../../assets/images/gallery-bg.png"
// import { Fade } from "react-awesome-reveal";
import rai1 from "../../../assets/images/random/1.jpg"
import rai2 from "../../../assets/images/random/2.jpg"
import rai3 from "../../../assets/images/random/3.jpg"
import rai4 from "../../../assets/images/random/4.jpg"
import rai5 from "../../../assets/images/random/5.jpg"
import rai6 from "../../../assets/images/random/6.jpg"
import rai7 from "../../../assets/images/random/7.jpg"
import rai8 from "../../../assets/images/random/8.jpg"
import rai9 from "../../../assets/images/random/9.jpg"
import rai10 from "../../../assets/images/random/10.jpg"
import rai11 from "../../../assets/images/random/11.jpg"
import rai12 from "../../../assets/images/random/12.jpg"
import rai13 from "../../../assets/images/random/13.jpg"


import wlf1 from "../../../assets/images/wildlife/1.jpg"
import wlf2 from "../../../assets/images/wildlife/2.jpg"
import wlf3 from "../../../assets/images/wildlife/3.jpg"
import wlf4 from "../../../assets/images/wildlife/4.jpg"
import wlf5 from "../../../assets/images/wildlife/5.jpg"
import wlf6 from "../../../assets/images/wildlife/6.jpg"
import wlf7 from "../../../assets/images/wildlife/7.jpg"
import wlf8 from "../../../assets/images/wildlife/8.jpg"
import wlf9 from "../../../assets/images/wildlife/9.jpg"
import wlf10 from "../../../assets/images/wildlife/10.jpg"
import wlf11 from "../../../assets/images/wildlife/11.jpg"
import wlf12 from "../../../assets/images/wildlife/12.jpg"
import wlf13 from "../../../assets/images/wildlife/13.jpg"


import np1 from "../../../assets/images/nature photography/1.jpg"
import np2 from "../../../assets/images/nature photography/2.jpg"
import np3 from "../../../assets/images/nature photography/3.jpg"
import np4 from "../../../assets/images/nature photography/4.jpg"
import np5 from "../../../assets/images/nature photography/5.jpg"
import np6 from "../../../assets/images/nature photography/6.jpg"
import np7 from "../../../assets/images/nature photography/7.jpg"
import np8 from "../../../assets/images/nature photography/8.jpg"
import np9 from "../../../assets/images/nature photography/9.jpg"
import np10 from "../../../assets/images/nature photography/10.jpg"
import np11 from "../../../assets/images/nature photography/11.jpg"
import np12 from "../../../assets/images/nature photography/12.jpg"
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

SwiperCore.use([Grid, Pagination, Autoplay]);
const breakpoints = {
    // For small devices like mobile phones
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    // For medium devices like tablets
    768: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    // For larger devices like desktops
    1024: {
        slidesPerView: 3,
        spaceBetween: 10,
    },
};
const breakpoints2 = {
    // For small devices like mobile phones
    320: {
        slidesPerView: 2,
        spaceBetween: 10
    },
    // For medium devices like tablets
    768: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    // For larger devices like desktops
    1024: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
};
const breakpoints3 = {
    // For small devices like mobile phones
    320: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    // For medium devices like tablets
    768: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    // For larger devices like desktops
    1024: {
        slidesPerView: 2,
        spaceBetween: 5,
    },
};

const Gallery = () => {
    const {themeSwitch} = useAuth()
    return (
        <div>
            <div className=" flex  flex-col items-end">
                <div className="lg:w-[40%] lg:text-start lg:-mb-36 mt-10 mx-6">
                   <Fade duration={3000}> <h3 className="font-poppins font-bold text-3xl">Our Gallery</h3></Fade>
                    <Fade duration={3000}><h4 className=" font-semibold text-lg">A Visual Journey Through Extraordinary Moments</h4></Fade>
                    <Fade duration={5000}><p className="  font-roboto mb-4">Discover a mesmerizing collection of extraordinary moments frozen in time, where each image tells a unique story. From breathtaking landscapes to candid portraits, our gallery showcases the artistry and skill nurtured within our photography school.</p></Fade>
                </div>
            </div>
            <div className="w-full my-10 md:my-32">
                <div className="absolute w-[320px] lg:min-w-[1000px] md:w-[800px] md:h-[400px] lg:h-[600px]">
                    <img src={galleryBg} className="transform rotate-45 h-full w-full" alt="" />
                </div>
                <div className="relative left-16 w-[120px] -top-2 md:-top-10 md:left-32 md:w-[280px] lg:left-[10%] lg:top-0 lg:w-[500px]">
                    <Swiper
                        breakpoints={breakpoints}
                        autoplay={{
                            delay: 300,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide><div><img src={rai1} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai2} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai3} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai4} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai5} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai6} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai7} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai8} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai9} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai10} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`}  alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai12} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`}  alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={rai13} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`}  alt="" /></div></SwiperSlide>

                    </Swiper>
                </div>
                <div className="relative md:w-[250px] md:left-60 left-32 w-[120px] top-4 lg:left-64 lg:w-[350px]">
                    <Swiper
                        breakpoints={breakpoints2}
                        autoplay={{
                            delay: 500,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide><div><img src={wlf1} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf2} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf3} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf4} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf5} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf6} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf7} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf8} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf9} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf10} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf11} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf12} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={wlf13} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative md:w-[260px] md:left-96 md:top-14 top-7 left-40 w-[80px] lg:top-6 lg:w-[400px]">
                    <Swiper
                        breakpoints={breakpoints3}
                        autoplay={{
                            delay: 700,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src={img1} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img2} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img3} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div><img src={np1} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np2} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np3} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np4} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np5} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np6} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np7} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np8} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np9} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np10} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np11} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                        <SwiperSlide><div><img src={np12} className={`${themeSwitch ? "border-4":"border-black border-4"} w-full rounded`} alt="" /></div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
