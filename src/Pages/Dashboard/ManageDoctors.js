import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';
import { useSelector, useDispatch } from 'react-redux';
import allTodos from '../../Services/Actions/Actions';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const {todos} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allTodos())
    }, [])
    // const [doctors, setDoctors] = useState([]);

    // useEffect(() => {
    //     fetch('https://mysterious-ridge-08700.herokuapp.com/doctor', {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setDoctors(data))
    // }, [])


    return (
        <div>
            <h2 className="text-3xl text-center my-10  font-bold">Doctors: {todos.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctors</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map((todo, index) => <DoctorRow
                                key={todo._key}
                                doctor={todo}
                                index={index}

                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                setDeletingDoctor={setDeletingDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;