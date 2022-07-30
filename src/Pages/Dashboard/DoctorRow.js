import React from 'react';


const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-40">
                    <img class="rounded-full" src={img} alt={name} />
                </div>
            </div></td>
            <td className='text-2xl font-semibold'>{name}</td>
            <td className='text-xl font-semibold'>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-md text-white btn-error px-5 py-1">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;