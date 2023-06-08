import React from 'react';

const ClassCard = ({singleClass}) =>{
    const {available_seats, class_instructor_name, class_title, image_link, price} = singleClass;

    return (
        <div>
            <div className="bg-[#d7d2b7] overflow-hidden hover:scale-105 transition rounded-t-2xl rounded-b-md flex lg:flex-row md:flex-row flex-col items-center my-4">
                        <figure className='lg:w-[320px] md:w-[300px] h-[250px] w-full lg:h-[300px]'><img src={image_link} className='h-full w-full' alt="class" /></figure>
                        <div className="mx-4 my-4">
                            <h2 className="lg:text-2xl text-lg"><span className='font-semibold' >{class_title}</span> </h2>
                            <h2 className="lg:text-lg text-base">Course Instructor: <span className='font-semibold'>{class_instructor_name}</span></h2>
                            <h2 className="lg:text-lg text-base">Available Seat: <span className='font-semibold'>{available_seats}</span></h2>
                            <h2 className="lg:text-lg text-base mb-2 ">Price: <span className='font-semibold'>$ {price}</span></h2>
                            <button className='bg-[#031003] py-1 px-2 rounded-lg hover:bg-[#111827] text-white cursor-pointer'>Select Course</button>

                        </div>
                    </div>
            
        </div>
    );
};

export default ClassCard;