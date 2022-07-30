import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4JBiKulUBEIW5Lj8Zf0l5FBPuEhuryA1F12qFaxJhI1wkcKqVbMXAl49HsLd1V8OZu5uC3zThzqWmTzVVs1hNE00xwH8nUc9');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    // const [appointment, setAppointment] = useState({});
    // useEffect(() => {
    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => res.json())
    //         .then(data => setAppointment(data));
    // },[id])
    
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-full max-w-md border-2 bg-base-100 mx-auto shadow-xl my-12">
                <div class="card-body">
                    <p className="mb-3 text-[#6350f2] text-2xl text-center font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title  text-md font-bold">Please Pay to : {appointment.treatment}</h2>
                    <p className=' text-md  font-bold'>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at <span className='text-orange-700'>{appointment.slot}</span></p>
                    <p className='text-md  font-bold '>Please pay: $<span className='text-orange-700'>{appointment.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 mx-auto  max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;