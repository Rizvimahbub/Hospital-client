import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import { useSelector, useDispatch } from 'react-redux';
import allTodos from '../../Services/Actions/Actions';
import allUsers from '../../Services/Actions/Actions2';


const Users = () => {
    // const [users, setUsers] = useState([]);
    const {todos} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allUsers())
    }, [])
    // useEffect(() => {
    //     fetch('http://localhost:5000/user', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
    // const {data: users, isLoading} = useQuery('users', ()=> fetch('http://localhost:5000/user').then(res => res.json()))
    // console.log(users)

    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold my-10">All Users: {todos.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           todos.map((todo, index)=><UserRow
                           key={todo._id}
                           user={todo}
                           index={index}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Users;