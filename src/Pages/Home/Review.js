import React from 'react';

const Review = ({ img, p, name, city }) => {
    return (
        <div className='shadow-xl p-10 md:p-5 rounded-2xl'>
            <p className='font-medium'>{p}</p>
            <div className="avatar flex items-center pt-5 gap-0 ">
                <div className="w-24 rounded-full ring ring-secondary">
                    <img src={img} />
                </div>
                <div className='pt-5 pl-5 h-24 w-full'>
                    <h1 className='text-lg font-bold'>{name}</h1>
                    <h3 className='font-medium'>{city}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;