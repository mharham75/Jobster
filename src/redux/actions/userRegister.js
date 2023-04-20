import axios from "axios"
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../actionTypes"
import { baseUrl } from "../../utils/constants/constants"
import {toast} from 'react-toastify'; 


const userRegisterRequest = () => {
    return{
        type: REGISTER_USER_REQUEST
    }
}

const userRegisterSuccess = ( user) => {
    return{
        type: REGISTER_USER_SUCCESS,
        payload: user
    }
}

//middleware
export const userRegisterThunk = (user) => {
    return async (dispatch) => {
        try {
            dispatch(userRegisterRequest())
            const response = await axios.post(baseUrl+'/auth/register',user)
            if(response){
                dispatch(userRegisterSuccess(response?.data))
                toast.success(response?.data?.name+' added')
            }
        } catch (error) {
            toast.error(error?.response?.data?.msg)
        }
    }
}