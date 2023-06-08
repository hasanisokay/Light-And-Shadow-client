import React from 'react';

const ClassCard = ({ singleClass }) => {
    const { available_seats, class_instructor_name, class_title, image_link, price } = singleClass;

    return (
        <div>
            <div className="bg-[#d7d2b7] overflow-hidden hover:scale-105 transition rounded-t-2xl mb-4 rounded-b-md flex lg:flex-row md:flex-row flex-col gap-4 items-center justify-between">
                <figure className='w-full'>
                    {/* lg:w-[300px] lg:h-[250px] md:h-[250px] md:w-[200px] w-full h-full */}
                    <img src={image_link} className='lg:max-w-[400px] lg:min-w-[400px] md:max-w-[300px] md:min-w-[300px] lg:max-h-[280px] lg:min-h-[280px] md:max-h-[300px] md:min-h-[300px] max-w-full min-w-full max-h-[200px] min-h-[200px]' alt="class" />
                </figure>
                <div className="mx-4 lg:ms-2 lg:w-full md:w-[99%] md:mx-8">
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