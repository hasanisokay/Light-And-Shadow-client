import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import loadingJson from '../assets/loading.json';
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';
import { FaUsers } from 'react-icons/fa';
import { MdClass } from "react-icons/md";
const AdminDashboard = () => {
  const [view, setView] = useState("allClasses")
  const { user } = useAuth()
  const loggedUser = user;
  const [axiosSecure] = useAxiosSecure();
  const [allClasses, setAllClasses] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [reload, setReload] = useState(false)
  const [status, setStatus] = useState("")
  const [fetchingId, setFetchingId] = useState(null)
  const handleShowAllClasses = () => {
    setView("allClasses")
    refetchAllClasses()
  }
  const handleShowUsers = () => {
    setView("users")
    refetchAllUsers()
  }
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your are making this user role Admin.",
      icon: 'warning',
      customClass: { title: "text-xl font-bold", text: "font-semibold text-lg", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
      showCancelButton: true,
      confirmButtonColor: '#1fb141',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, do it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/makeAdmin", { email })
          .then(res => {
            if (res.data.modifiedCount > 0) {
              Swal.fire(
                'Success!',
                'This user is now an Admin',
                'success'
              )
              refetchAllUsers()

            }
          })
      }
    })

  }
  const handleMakeInstructor = (email) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your are making this user role Instructor.",
      icon: 'warning',
      customClass: { title: "text-xl font-bold", text: "font-semibold text-lg", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
      showCancelButton: true,
      confirmButtonColor: '#1fb141',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, do it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/makeInstructor", { email })
          .then(res => {
            if (res.data.modifiedCount > 0) {
              Swal.fire(
                'Success!',
                'This user is now an Instructor',
                'success'
              )
              refetchAllUsers()
            }
          })
      }
    })
  }

  const { data: loadedAllUsers = [], isLoading: isAllUsersLoading, refetch: refetchAllUsers, error: allUsersError } = useQuery({
    queryKey: ["loadedAllUsers", user?.email],
    queryFn: async () => {
      const data = await axiosSecure.get(`/users`)
      setAllUsers(data.data);
      return data.data;
    }
  })

  const { data: loadedAllClasses = [], isLoading: isAllClassesLoading, refetch: refetchAllClasses, error: allClassesError } = useQuery({
    queryKey: ["loadedAllClasses", user?.email],
    queryFn: async () => {
      const data = await axiosSecure.get(`/getAllClasses`)
      setAllClasses(data.data);
      return data.data;
    }
  })

  // const { data: loadedUpdateStatus = [], isLoading: isUpdateStatusLoading, refetch: refetchUpdateStatus, error: updateStatusError } = useQuery({
  //   queryKey: ["loadedUpdateStatus", user?.email],
  //   queryFn: async () => {

  //     setAllClasses(data.data);
  //     setStatus("")
  //     setFetchingId(null)
  //     return data.data;
  //   }
  // })

  const handleApprove = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your are approving this class.",
      icon: 'warning',
      customClass: { title: "text-xl font-bold", text: "font-semibold text-lg", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
      showCancelButton: true,
      confirmButtonColor: '#1fb141',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, approve it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post(`/changeClassStatus/${id}`, { status: "approved" })
          .then(res => {
            Swal.fire(
              'Success!',
              'Class approved successfully',
              'success'
            )
          })
      }
    })
  }
  const handleDeny = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your are denying this class.",
      icon: 'warning',
      customClass: { title: "text-xl font-bold", text: "font-semibold text-lg", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
      showCancelButton: true,
      confirmButtonColor: '#1fb141',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, deny it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post(`/changeClassStatus/${id}`, { status: "denied" })
          .then(res => {
            Swal.fire(
              'Success!',
              'Class denied successfully',
              'success'
            )
          })
      }
    })

  }
  const handleFeedback = async (id) => {
    const result = await Swal.fire({
      title: 'Feedback',
      input: 'textarea',
      customClass: { input: "mx-4", title: "text-xl font-semibold", confirmButton: "mr-2 p-2", cancelButton: "p-2", },
      inputPlaceholder: 'Enter your feedback',
      showCancelButton: true,
      confirmButtonText: 'Send Feedback',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      const feedback = result.value;
      axiosSecure.post("/addFeedback", { id, feedback })
        .then(res => {
          if(res.data.matchedCount > 0){
            Swal.fire(
              'Success!',
              'Feedback sent!',
              'success'
            )
          }
        })
    }
  };

  if (isAllClassesLoading || isAllUsersLoading) {
    return <Lottie className='w-60 pt-20 h-72 mx-auto ' animationData={loadingJson} loop={true} />;
  }
  return (
    <div className='mx-6 pt-20'>
        <Helmet>
                <title>Light & Shadow | Admin</title>
            </Helmet>
      <div className='flex text-black justify-center my-4'>
        <button className={` p-3 w-40 transition-colors rounded-tl-lg flex items-center rounded-bl-lg duration-300 border-r text-sm ${view === "allClasses" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={() => handleShowAllClasses()}><MdClass className='inline'/> All Classes</button>
        <button className={` p-3 w-40 rounded-tr-lg rounded-br-lg transition-colors flex items-center duration-300 border-r text-sm ${view === "users" ? 'bg-[#fad932] font-semibold' : 'bg-zinc-400'} `} onClick={() => handleShowUsers()}><FaUsers className='w-8 inline'/>All Users</button>
      </div>
      {
        view === "users" && <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 text-black'>
          {allUsers.map(user => <div key={user._id}>
            <div className="card w-96 bg-[#d7d2b7] shadow-xl">
              {user?.image && <figure className='h-56'><img src={user.image} className='h-full w-full' alt="user" /></figure>}
              <div className="card-body">
                <p className='lg:text-lg'>Name: <span className='font-semibold'>{user.name}</span> </p>
                <p className='lg:text-lg'>Email: <span className='font-semibold'>{user.email}</span> </p>
                <p className='lg:text-lg'>Status: <span className='font-semibold'>{user.role}</span> </p>
                <div className='flex gap-4'>
                  <button disabled={user.role === "instructor" || user.email === loggedUser.email} onClick={() => handleMakeInstructor(user.email)} className={` py-1 px-2 rounded-lg text-white cursor-pointer ${user.role === "instructor" || user.email === loggedUser.email ? "bg-gray-400 cursor-default" : "bg-[#031003]"}`}>Make Instructor</button>
                  <button disabled={user.role === "admin"} onClick={() => handleMakeAdmin(user.email)} className={` ${user.role === "admin" ? "bg-gray-400 cursor-default" : "bg-red-500"} py-1 px-2 rounded-lg text-white cursor-pointer`}>Make Admin</button>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      }
      {
        view === "allClasses" && <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 text-black'>
          {
            allClasses.map((singleClass) => <div key={singleClass?._id}>
              <div className="card w-96 bg-[#d7d2b7] shadow-xl">
                <figure className='h-56'><img src={singleClass?.image_link} className='h-full w-full' alt="" /></figure>
                <div className="card-body">
                  <p className='text-lg'>Class Title: <span className='font-semibold'>{singleClass?.class_title}</span></p>
                  <p className='text-lg'>Instructor: <span className='font-semibold'>{singleClass?.class_instructor_name}</span></p>
                  <p className='text-lg'>Instructor Email: <span className='font-semibold'>{singleClass?.instructor_email}</span></p>
                  <p className='text-lg'>Available Seats: <span className='font-semibold'>{singleClass?.available_seats}</span></p>
                  <p className='text-lg'>Students in Class: <span className='font-semibold'>{singleClass?.students_in_class}</span></p>
                  <p className='text-lg'>Price: <span className='font-semibold'>{singleClass?.price}</span></p>
                  <p className='text-lg'>Status: <span className='font-semibold'>{singleClass?.status}</span></p>
                  {singleClass.feedback && <p className='text-lg'>Feedback <span className='font-semibold'>{singleClass?.feedback}</span></p>}
                  <div className={`flex gap-6 ${singleClass.status === 'approved' && "hidden"}`}  >
                    <button onClick={() => handleApprove(singleClass._id)} disabled={singleClass.status === "denied"} className={`text-xs ${singleClass.status === "denied" ? "bg-gray-500 cursor-default" : "bg-[#031003] hover:bg-[#111827] cursor-pointer"} py-1 px-1 rounded-lg  `}  >Approve</button>
                    <button onClick={() => handleDeny(singleClass._id)} disabled={singleClass.status === "denied"} className={`text-xs ${singleClass.status === "denied" ? "bg-gray-500 cursor-default" : "bg-red-500 cursor-pointer"} py-1 px-1 rounded-lg `}>Deny</button>
                    <button onClick={() => handleFeedback(singleClass._id)} disabled={singleClass.feedback || singleClass.status !== "denied" } className={`${singleClass.feedback ? "bg-gray-500 cursor-default" : "bg-[#031003] cursor-pointer"} py-1 px-1 text-xs rounded-lg`}>Send Feedback</button>
                  </div>
                </div>

              </div>
            </div>)
          }
        </div>
      }
    </div>
  );
};

export default AdminDashboard;