import React from 'react';
import fluoride from '../../assets/images/feature1.png';
import cavity from '../../assets/images/feature2.png';
import whitening from '../../assets/images/feature3.png';
import F4 from '../../assets/images/feature4.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'EXCELLENT SERVICE',
            description: 'New York Diagnostic Center offers you a great excellant service in health sector. Aalok has the diagnostic service & Hospital service',
            img: fluoride
        },
        {
            _id: 2,
            name: 'QUALIFIED DOCTORS',
            description: 'Aalok Healthcare Ltd has many specialist doctors.Most of them are Professor & Assoc. Professor',
            img: cavity
        },
        {
            _id: 3,
            name: 'QUALITY EQUIPMENT',
            description: 'Aalok Healthcare Ltd always offers the qualityfull equipments. All Machines are imported from Abroad',
            img: whitening
        },
        {
            _id: 4,
            name: 'EMERGENCY SERVICES',
            description: 'Aalok Healthcare Ltd is always ready with their Emmergency Service for the critical patients',
            img: F4
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-[#6350f2]  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-3'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;