import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "../Constants/Constants";


const initialState = {
    todos: [],
    isLoading: false,
    error: null
}


const Reducer = (state=initialState,action) => {
    switch(action.type){
        case GET_REQUEST :
            return{
                ...state,
                isLoading: true
            }
        case GET_SUCCESS :
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_FAILED :
            return{
                isLoading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;