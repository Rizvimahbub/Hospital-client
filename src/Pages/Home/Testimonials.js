import React from 'react';
import People1 from '../../assets/images/people1.png';
import People2 from '../../assets/images/people2.png';
import People3 from '../../assets/images/people3.png';
import Quote from '../../assets/icons/quote.svg';
import Review from './Review';


const Testimonial = () => {
    return (
        <div>
            <div className='flex justify-between px-5 mt-20 '>
                <div>
                    <h3 className='text-[#6350f2] font-bold text-lg mb-4'>Testimonial</h3>
                    <h1 className='text-4xl mb-4'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='lg:w-48 md:w-24 sm:w-12' src={Quote}></img>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20   md:p-5 sm:p-0'>
                <Review img={People1} p='" It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content. "' name='Winson Herry' city='California'></Review>
                <Review img={People2} p='" It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content. "' name='Rachel Weisz' city='New York'></Review>
                <Review img={People3} p='" It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content. "' name='Fiona Loudon' city='New Jersey'></Review>
            </div>
        </div>
    );
};

export default Testimonial;