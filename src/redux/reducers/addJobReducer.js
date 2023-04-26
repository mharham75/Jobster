import { ADD_JOB_REQUEST, ADD_JOB_SUCCESS } from "../actionTypes";

const initialState = {
    addJob: {}
}

export const addJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_JOB_REQUEST:
            return{
                addJob: {}
            }
        case ADD_JOB_SUCCESS: {
            return{
                addJob: action.payload
            }
        }
        default: return state
    }
}