import React from 'react';

const Infocard = ({img, cardTitle, bgClass, paragraph}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass} p-3`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default Infocard;