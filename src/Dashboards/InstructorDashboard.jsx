import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

const InstructorDashboard = () => {
    const [view, setView] = useState("myClasses")
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const [myClasses, setMyClasses] = useState([])
    console.log(myClasses);
    const handleAddClass = () => {
        setView("addClass")
    }
    const handleUpdateClass = (id) => {

    }
    const handleFeedBack = (feedback)=>{
        
    }
    const handleAllClasses = () => {
        axiosSecure.get(`/instructorsAllClass?email=${user?.email}`)
            .then(res => {
                setMyClasses(res.data);
            })
        setView("myClasses")
    }

    // form elements
    const initialValues = {
        className: "",
        classImage: null,
        instructorName: user.displayName || "",
        instructorEmail: user.email || "",
        availableSeats: "",
        price: "",
    };
    const validationSchema = Yup.object({
        className: Yup.string().required("Class name is required"),
        classImage: Yup.mixed().required("Class image is required"),
        availableSeats: Yup.number().required("Available seats is required"),
        price: Yup.number().required("Price is required"),
    });
    const onSubmit = (data, { setSubmitting }) => {
        const formData = new FormData();
        formData.append('image', data.classImage)
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                const newClass = { available_seats: data.availableSeats, class_instructor_name: data.instructorName, class_title: data.className, image_link: imageResponse.data.display_url, instructor_email: data.instructorEmail, price: data.price }
                axiosSecure.post("/addNewClass", newClass)
                    .then(res => {
                        console.log(res);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        setSubmitting(false);

                    })
            });
    };

    return (
        <div className='pt-20 mx-6'>
            <div className='text-center my-4'>
                <button className={` p-3 w-40 transition-colors rounded-tl-lg rounded-bl-lg duration-300 border-r ${view === "myClasses" ? 'bg-[#fad932] font-semibold ' : 'bg-zinc-400'} `} onClick={() => handleAllClasses()}>My Classes</button>
                <button className={` p-3 w-40 rounded-tr-lg rounded-br-lg transition-colors duration-300 border-r ${view === "addClass" ? 'bg-[#fad932] font-semibold' : 'bg-zinc-400'} `} onClick={() => handleAddClass()}>Add A class</button>
            </div>
            <div>
                {
                    view === "addClass" && (
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ isSubmitting, setFieldValue }) => (
                                <Form className='bg-[#d7d2b7] lg:w-[50%] mx-auto px-4 py-4 rounded-lg'>
                                    <div>
                                        <label htmlFor="className">Class Name</label>
                                        <Field type="text" id="className" className="py-2 block px-2 w-[90%] my-2 rounded" name="className" placeholder="Enter class name" />
                                        <ErrorMessage className="text-red-500" name="className" component="div" />
                                    </div>

                                    <div>
                                        <label htmlFor="classImage">Class Image</label>
                                        <input
                                            className='block mt-1 mb-2'
                                            type="file"
                                            id="classImage"
                                            name="classImage"
                                            onChange={(event) => {
                                                setFieldValue("classImage", event.currentTarget.files[0]);
                                            }}
                                        />
                                        <ErrorMessage name="classImage" component="div" className="text-red-500" />
                                    </div>

                                    <div>
                                        <label htmlFor="instructorName">Instructor Name</label>
                                        <Field className="py-2 bg-[#f2645c] block px-2 w-[90%] my-2 rounded" type="text" id="instructorName" name="instructorName" readOnly />
                                    </div>

                                    <div>
                                        <label htmlFor="instructorEmail">Instructor Email</label>
                                        <Field className="py-2 bg-[#f2645c] block px-2 w-[90%] my-2 rounded" type="email" id="instructorEmail" name="instructorEmail" readOnly />
                                    </div>

                                    <div>
                                        <label htmlFor="availableSeats">Available Seats</label>
                                        <Field className="py-2 block px-2 w-[50%] my-2 rounded" type="number" id="availableSeats" name="availableSeats" placeholder="Enter available seats" />
                                        <ErrorMessage className="text-red-500" name="availableSeats" component="div" />
                                    </div>

                                    <div>
                                        <label htmlFor="price">Price</label>
                                        <Field className="py-2 block px-2 w-[50%] my-2 rounded" type="number" id="price" name="price" placeholder="Enter price" />
                                        <ErrorMessage className="text-red-500" name="price" component="div" />
                                    </div>

                                    <button type="submit" className='bg-[#031003] py-1 px-2 rounded-lg hover:bg-[#111827] text-white cursor-pointer' disabled={isSubmitting}>
                                        {isSubmitting ? 'Adding...' : 'Add'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    )
                }
            </div>
            {view ==="myClasses" && (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {myClasses.map(singleClass => (
                        <div key={singleClass._id}>
                            <div className="card w-96 bg-[#d7d2b7] shadow-xl">
                                <figure className='h-56'><img src={singleClass.image_link} className='h-full w-full' alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{singleClass.class_title}</h2>
                                    <p>Instructor: <span className='font-semibold'>{singleClass.class_instructor_name}</span></p>
                                    <p>Instructor Email: <span className='font-semibold'>{singleClass?.instructor_email}</span></p>
                                    <p>Price: <span className='font-semibold'>{singleClass.price}</span></p>
                                    {singleClass?.status !=="denied" && <p>Available Seats: <span className='font-semibold '>{singleClass.available_seats}</span></p>}
                                    <p>Status: <span className='font-semibold '>{singleClass?.status}</span></p>
                                    {singleClass?.status ==="denied" && (singleClass?.feedback ? <p>feedback <span className='font-semibold '>{singleClass?.feedback}</span></p> : <p>feedback <span className='font-semibold '>No feedback available</span></p> )}
                                    {singleClass?.status !=="denied" && <p>Enrolled Students: <span className='font-semibold '>{singleClass?.students_in_class}</span></p>}

                                    <div className={`flex gap-6`}>
                                        {
                                             singleClass?.status !=="denied" &&
                                            <button onClick={() => handleUpdateClass(singleClass._id)} className='bg-red-500 py-1 px-2 rounded-lg text-white cursor-pointer' >Update</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}

        </div>
    );
};

export default InstructorDashboard;
