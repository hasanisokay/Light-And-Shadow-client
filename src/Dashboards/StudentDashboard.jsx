import React, { useState, useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import { Helmet } from 'react-helmet-async';
import { FaChalkboard, FaDollarSign, FaWallet } from 'react-icons/fa';
import axios from 'axios';

const StudentDashboard = () => {
    const { user, paymentClass, setPaymentClass, loading } = useAuth();
    const [selectedClass, setSelectedClass] = useState([])
    const [status, setStatus] = useState("pending")
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()
    const [paymentHistory, setPaymentHistory] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const handlePendingClasses = () => {
        setStatus("pending");
        setSelectedClass([])
        // refetchSelectedClaas()
    };
    const handleEnrolledClasses = () => {
        setStatus("enrolled");
        // setSelectedClass([])
        // refetchSelectedClaas()
    };
    const handlePaymentHistory = () => {
        setStatus("")
        setSelectedClass([])
        // refetchPaymentHistory()
    }
    useEffect(()=>{
        axiosSecure.get(`/getSelectedClass?email=${user?.email}&status=${status}`)
        .then(res=>setSelectedClass(res.data))
    },[status, isLoadingData])
    // console.log(selectedClass);
    
    useEffect(()=>{
        axiosSecure.get(`/paymentHistory?email=${user?.email}`)
        .then(res=>setPaymentHistory(res.data))
    },[status])
    // console.log(paymentHistory);
    // const { data: loadedClasses = [], isLoading: isSelectedClassesLoading, refetch:refetchSelectedClaas, error:selectedClassError } = useQuery({
    //     queryKey: ["loadedClasses", user?.email, status],
    //     queryFn: async () => {
    //         const data = await axiosSecure.get(`/getSelectedClass?email=${user?.email}&status=${status}`)
    //         setSelectedClass(data.data);
    //         console.log("from selectedClass", data.data);
    //         return data.data;
    //     }
    // })
    // const { data: loadedPaymentHistory = [], isLoading: isPaymentHistoryLoading, refetch: refetchPaymentHistory, error: paymentHisotryError } = useQuery({
    //     queryKey: ["loadedPaymentHistory", user?.email],
    //     queryFn: async () => {
    //         const data = await axiosSecure.get(`/paymentHistory?email=${user?.email}`)
    //         setPaymentHistory(data.data);
    //         return data.data;
    //     }
    // // })

    // if (isPaymentHistoryLoading ) {
    //     return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
    // }

    const handleDeleteClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            customClass: { title: "text-lg font-semibold", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteClass/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Class deleted.',
                                'success'
                            )
                            setIsLoadingData(!isLoadingData)
                            // refetchSelectedClaas()
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
            <Helmet>
                <title>Light & Shadow | Student</title>
            </Helmet>
            <div className='flex justify-center my-4'>
                <button className={` p-3 text-xs w-40 rounded-tl-lg rounded-bl-lg gap-0.5 transition-colors flex items-center duration-300 border-r ${status === "pending" ? 'bg-[#fad932] font-semibold' : 'bg-zinc-400'} `} onClick={() => handlePendingClasses()}><FaWallet /> Pending Payment</button>
                <button className={` p-3 text-xs w-40 transition-colors flex items-center gap-0.5 duration-300 border-r ${status === "enrolled" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={() => handleEnrolledClasses()}><FaChalkboard /> Enrolled Classes</button>
                <button className={` p-3 text-xs w-40 rounded-tr-lg rounded-br-lg flex gap-0.5 items-center transition-colors duration-300 border-r ${status === "" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={() => handlePaymentHistory()}><FaDollarSign /> Payment History</button>
            </div>

            {selectedClass ? (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {selectedClass.map(singleClass => (
                        <div key={singleClass._id}>
                            <div className="card w-96 text-black bg-[#d7d2b7] shadow-xl">
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
                    status === "" && paymentHistory.map(history => <div key={history._id}>
                        <div className="card text-black w-96 bg-[#d7d2b7] shadow-xl">
                            <figure className='h-56'><img src={history?.paidForClass?.image_link} alt="class image" className='h-full w-full' /></figure>
                            <div className="card-body">
                                <p>Class Title: <span className='font-semibold text-xl'>{history?.paidForClass?.class_title}</span></p>
                                <p>Class Instructor: <span className='font-semibold text-lg'>{history?.paidForClass?.class_instructor_name}</span></p>
                                <p>Satus: <span className='font-semibold'>{history?.status}</span></p>
                                <p>User Email: <span className='font-semibold'>{history?.email}</span></p>
                                <p>Price: <span className='font-semibold'>${history?.price}</span></p>
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
