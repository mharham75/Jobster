import { toast } from "react-toastify"
import { ADD_JOB_REQUEST, ADD_JOB_SUCCESS } from "../actionTypes"
import axios from "axios"
import { baseUrl } from "../../utils/constants/constants"
import { getUserDetailsTokenFromLocalStorage } from "../../utils/localStorage"

const addJobRequest = () => {
    return{
        type: ADD_JOB_REQUEST
    }
}

const addJobSuccess = (addJob) => {
    return{
        type: ADD_JOB_SUCCESS,
        payload: addJob
    }
}

//thunk
export const addJobThunk = (addJobDetails) => {
    return async(dispatch) => {
        try {
            const response = await axios.post(baseUrl+'/jobs',addJobDetails,{
                headers:{
                    Authorization: `Bearer ${getUserDetailsTokenFromLocalStorage()}`
                }
            });
            if(response){
                dispatch(addJobSuccess(response.data))
                toast.success('Job Added Successfully')
            }
        } catch (error) {
            toast.error('Failed to add job')
        }
    }
}