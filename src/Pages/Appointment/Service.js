import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price, post } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-[#6350f2]">{name}</h2>
                <h2 className="text-md font-bold ">{post}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn  btn-secondary text-white uppercase bg-gradient-to-r from-[#6350f2] to-[#8c63f4] border-0"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;