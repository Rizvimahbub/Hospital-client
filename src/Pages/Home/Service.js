import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = ({service}) => {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;