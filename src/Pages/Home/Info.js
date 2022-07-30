import React from 'react';
import Infocard from './Infocard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 p-5'>
            <Infocard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-[#6350f2] to-[#8c63f4]" img={clock}  paragraph='Time : 10am to 10pm'></Infocard>
            <Infocard cardTitle="Our Locations" bgClass="bg-gradient-to-r from-[#6350f2] to-[#8c63f4]" img={marker}  paragraph='Brooklyn,NY 10036,United States'></Infocard>
            <Infocard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-[#6350f2] to-[#8c63f4]" img={phone}  paragraph='+000 123 456789'></Infocard>
        </div>
    );
};

export default Info;