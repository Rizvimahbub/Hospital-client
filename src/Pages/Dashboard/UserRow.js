import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://mysterious-ridge-08700.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const deleteUser = () => {
        
        fetch(`https://mysterious-ridge-08700.herokuapp.com/user/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(` ${email} is deleted.`)

                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs text-white border-0 bg-green-700">Make Admin</button>}</td>
            <td><button class="btn btn-xs bg-red-700 border-0 text-white" onClick={deleteUser}>Remove User</button></td>
        </tr>
    );
};

export default UserRow;