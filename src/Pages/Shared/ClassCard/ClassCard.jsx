import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ClassCard = ({ singleClass }) => {
    const { available_seats, _id, class_instructor_name, class_title, image_link, price } = singleClass;
    // const [buttonDisabled, setButtonDisabled] = useState(false)
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const handleSelectCourse = (id) => {
        if (!user) {
            return Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Please Login First',
                showConfirmButton: false,
                timer: 1000
            })
        }
        const clickedInformation = { classId: id, clickedUserEmail: user.email }
        axiosSecure.post("http://localhost:5000/selectedClass", clickedInformation)
            .then(data => {
                console.log(data);
                if(data.data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Added successfully',
                        showConfirmButton: false,
                        timer: 1000
                    })}
                    else{
                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'Already added. Cant Add item twice',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <div className={`${available_seats === 0 ? "bg-red-500" : "bg-[#d7d2b7]"} overflow-hidden hover:scale-105 transition rounded-t-2xl mb-4 rounded-b-md flex lg:flex-row md:flex-row flex-col gap-4 items-center justify-between`}>
                <figure className='w-full'>
                    {/* lg:w-[300px] lg:h-[250px] md:h-[250px] md:w-[200px] w-full h-full */}
                    <img src={image_link} className='lg:max-w-[400px] lg:min-w-[400px] md:max-w-[300px] md:min-w-[300px] lg:max-h-[280px] lg:min-h-[280px] md:max-h-[300px] md:min-h-[300px] max-w-full min-w-full max-h-[200px] min-h-[200px]' alt="class" />
                </figure>
                <div className="mx-4 mb-4 md:mb-0 lg:mb-0 lg:ms-2 lg:w-full md:w-[99%] md:mx-8">
                    <h2 className="lg:text-2xl text-lg"><span className='font-semibold' >{class_title}</span> </h2>
                    <h2 className="lg:text-lg text-base">Course Instructor: <span className='font-semibold'>{class_instructor_name}</span></h2>
                    <h2 className="lg:text-lg text-base">Available Seat: <span className='font-semibold'>{available_seats}</span></h2>
                    <h2 className="lg:text-lg text-base mb-2 ">Price: <span className='font-semibold'>$ {price}</span></h2>
                    <button disabled={available_seats === 0 || user?.role === "admin" || user?.role === "instructor"} onClick={() => handleSelectCourse(_id)} className='bg-[#031003] py-1 px-2 rounded-lg hover:bg-[#111827] text-white cursor-pointer'>Select Course</button>
                </div>
            </div>

        </div>
    );
};

export default ClassCard;