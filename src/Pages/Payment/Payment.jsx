import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import useAuth from '../../Hooks/useAuth';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';
const stripePromise = loadStripe(import.meta.env.VITE_Payement_Gateway_Pk);

const Payment = () => {
    const { paymentClass } = useAuth()
    console.log(paymentClass);
    return (
        <div className='mx-6 pt-20 text-white'>
              <Helmet>
                <title>Light & Shadow | Payment</title>
            </Helmet>
            <h1 className='text-3xl font-semibold text-center '>Pay With Card</h1>
           {
            paymentClass &&  <div className='lg:ml-8 ml-2'>
            <p>Pay for,</p>
            <p className='text-xl text-white'>{paymentClass.class_title}</p>
            <p className='text-lg text-white'>Price: ${paymentClass.price}</p>
        </div>
           }
            <Elements stripe={stripePromise}>
                <CheckOutForm />
            </Elements>

        </div>
    );
};

export default Payment;