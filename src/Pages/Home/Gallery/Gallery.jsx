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
    return (
        <div>
            <div className="text-white flex  flex-col items-end">
                <div className="lg:w-[40%] lg:text-center lg:-mb-36 mt-10 mx-2">
                    <h3 className="font-poppins font-bold text-3xl">Our Gallery</h3>
                    <h4 className=" font-semibold text-lg">A Visual Journey Through Extraordinary Moments</h4>
                    <p className="  font-roboto">Discover a mesmerizing collection of extraordinary moments frozen in time, where each image tells a unique story. From breathtaking landscapes to candid portraits, our gallery showcases the artistry and skill nurtured within our photography school.</p>
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
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src={img1} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img2} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img3} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative md:w-[250px] md:left-60 left-32 w-[120px] top-4 lg:left-64 lg:w-[350px]">
                    <Swiper
                        breakpoints={breakpoints2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src={img1} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img2} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img3} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="relative md:w-[260px] md:left-96 md:top-14 top-7 left-40 w-[80px] lg:top-6 lg:w-[400px]">
                    <Swiper
                        breakpoints={breakpoints3}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}

                        spaceBetween={2}
                        //   pagination={false}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <img src={img1} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img2} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img3} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={img4} className="w-full" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
