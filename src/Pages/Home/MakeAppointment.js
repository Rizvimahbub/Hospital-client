import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='grid md:grid-cols-1 lg:grid-cols-2 justify-center items-center m-5 h-2/4 :p-3'>
            <div className='flex-1 justify-center items-center '>
                <img className='w-7/12  mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-[#6350f2] font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;