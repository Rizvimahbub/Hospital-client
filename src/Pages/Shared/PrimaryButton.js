import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn  uppercase text-white font-bold bg-gradient-to-r from-[#6350f2] to-[#8c63f4] border-0 w-40">{children}</button>
    );
};

export default PrimaryButton;