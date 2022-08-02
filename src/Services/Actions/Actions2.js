import axios from "axios";
import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "../Constants/Constants"

 
const allUsers = () => async(dispatch) => {
    dispatch({type: GET_REQUEST});
    try {
        const res = await axios.get('https://mysterious-ridge-08700.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        dispatch({type: GET_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type: GET_FAILED, payload: error.message})
    }
}

export default allUsers;
