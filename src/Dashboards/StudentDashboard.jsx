import React, { useState, useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';

const StudentDashboard = () => {
    const { user, paymentClass, setPaymentClass } = useAuth();
    const [selectedClass, setSelectedClass] = useState([])
    const [status, setStatus] = useState("pending")
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const [paymentHistory, setPaymentHistory] = useState([])


    const handlePendingClasses = () => {
        setStatus("pending");
        setSelectedClass([]);
    };

    const handleEnrolledClasses = () => {
        setStatus("enrolled");
        setSelectedClass([]);
    };

    const { data: loadedClasses = [], isLoading, refetch, error } = useQuery({
        queryKey: ["loadedClasses", user?.email, status],
        queryFn: async () => {
            const data = await axiosSecure.get(`/getSelectedClass?email=${user?.email}&status=${status}`)
            setSelectedClass(data.data);
            return data.data;
        }
    })

    useEffect(() => {
        refetch();
    }, [status, refetch]);

    if (isLoading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
    }

    const handlePaymentHistory = () => {
        setStatus("")
        axiosSecure.get(`/paymentHistory?email=${user?.email}`)
            .then(res => setPaymentHistory(res.data))
    }
    const handleDeleteClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteClass/${id}`)
                    .then(res => {
                        console.log(res);
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Class deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    const handlePayNow = (cl) => {
        setPaymentClass(cl)
        navigate("/dashboard/payment")
    }
    // console.log(paymentHistory);
    return (
        <div className='mx-6 pt-20'>
            <div className='text-center my-4'>
                <button className={` p-3 w-40 rounded-tl-lg rounded-bl-lg transition-colors duration-300 border-r ${status === "pending" ? 'bg-[#fad932] font-semibold' : 'bg-zinc-400'} `} onClick={()=>handlePendingClasses()}>Pending Payment</button>
                <button className={` p-3 w-40 transition-colors duration-300 border-r ${status === "enrolled" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={()=>handleEnrolledClasses()}>Enrolled Classes</button>
                <button className={` p-3 w-40 rounded-tr-lg rounded-br-lg transition-colors duration-300 border-r ${status === "" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={()=>handlePaymentHistory()} >Payment History</button>
            </div>

            {selectedClass ? (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {selectedClass.map(singleClass => (
                        <div key={singleClass._id}>
                            <div className="card w-96 bg-[#d7d2b7] shadow-xl">
                                <figure className='h-56'><img src={singleClass.image_link} className='h-full w-full' alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{singleClass.class_title}</h2>
                                    <p>Instructor: <span className='font-semibold'>{singleClass.class_instructor_name}</span></p>
                                    <p>Price: <span className='font-semibold'>{singleClass.price}</span></p>
                                    <p>Available Seat: <span className='font-semibold '>{singleClass.available_seats}</span></p>
                                    <div className={`flex gap-6 ${status === 'enrolled' && "hidden"}`}  >
                                        <button onClick={() => handlePayNow(singleClass)} className='bg-[#031003] py-1 px-2 rounded-lg hover:bg-[#111827] text-white cursor-pointer'  >Pay Now</button>
                                        <button onClick={() => handleDeleteClass(singleClass._id)} className='bg-red-500 py-1 px-2 rounded-lg text-white cursor-pointer' >Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : <h1 className='text-white font-semibold text-2xl text-center my-6'></h1>}
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                 status ==="" &&  paymentHistory.map(history => <div key={history._id}>
                        <div className="card w-96 bg-[#d7d2b7] shadow-xl">
                            <figure className='h-56'><img src={history?.paidForClass?.image_link} alt="class image" className='h-full w-full' /></figure>
                            <div className="card-body">
                                <p>Class Title: <span className='font-semibold text-xl'>{history?.paidForClass?.class_title}</span></p>
                                <p>Class Instructor: <span className='font-semibold text-lg'>{history?.paidForClass?.class_instructor_name}</span></p>
                                <p>Satus: <span className='font-semibold'>{history?.status}</span></p>
                                <p>Satus: <span className='font-semibold'>{history?.status}</span></p>
                                <p>Price: <span className='font-semibold'>{history?.price}</span></p>
                                <p>TrxId: <span className='font-semibold'>{history?.transactionId}</span></p>
                                <p>Purchased Date: <span className='font-semibold'>{moment(history?.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span> </p>
                            </div>
                        </div>
                       
                    </div>)
                }
            </div>
        </div>
    );
};

export default StudentDashboard;
