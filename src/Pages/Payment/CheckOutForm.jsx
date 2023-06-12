import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure();
    const { user, paymentClass } = useAuth();
    const elements = useElements();
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState("");
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError("")
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            })
            if (confirmError) {
                console.log(confirmError);
            }

            console.log('payment intent', paymentIntent)
            setProcessing(false)
            if(paymentIntent.status ==="succeeded"){
                setTransactionId(paymentIntent.id);
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price: paymentClass?.price?.toFixed(2),
                    date: new Date(),
                    status: 'service pending',
                    paidForClass : paymentClass,
                }
                axiosSecure.post("/payments", payment)
                .then(res=>console.log("from payment added", res))
                
                axiosSecure.patch(`/selectedClass/${paymentClass._id}`)
                .then(res=>console.log("from enrolled update", res))
                axiosSecure.get(`/updateSeatAndStudent/?id=${paymentClass._id}`)
                .then(res=>console.log("from update number", res.data))

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Payment Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/dashboard/student")
            }

    }
    useEffect(() => {
        axiosSecure.post("/create-payment-intent",{ price: paymentClass?.price?.toFixed(2) })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [paymentClass, axiosSecure])
    return (
        <form onSubmit={handleSubmit} className='lg:w-[50%] px-4 py-10 bg-gray-400 rounded mt-4 mx-4'>
            <CardElement className=''
                options={{
                    style: {

                        base: {
                            backgroundColor: "white",
                            fontSize: '16px',
                            color: 'black',
                            '::placeholder': {
                                color: 'black',
                                iconColor: "",
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='my-btn mt-1' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay Now
            </button>
            {
                cardError && <p className='text-red-500 text-lg'>{cardError}</p>
            }
            {
                transactionId && <p className='text-black text-lg'>Transaction completed with id: {transactionId}</p>
            }
        </form>

    );
};

export default CheckOutForm;