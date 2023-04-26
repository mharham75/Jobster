import axios from "axios"
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes"
import { baseUrl } from "../../utils/constants/constants"
import { toast } from "react-toastify"
import { addUserToLocalStorage } from "../../utils/localStorage"

const userLoginRequest = () => {
    return{
        type: USER_LOGIN_REQUEST,
    }
}

const userLoginSucces = (user) => {
    return{
        type: USER_LOGIN_SUCCESS,
        payload: user
    }
}

//middleware
export const userLoginThunk = (userDetails) => {
    return async (dispatch) => {
        try {
            dispatch(userLoginRequest());
            const response = await axios.post(baseUrl+'/auth/login',userDetails);
            if(response){
                dispatch(userLoginSucces(response.data))
                addUserToLocalStorage(response.data)
                toast.success('Logging user in')
            }
        } catch (error) {
            toast.warn('invalid credentials');
        }
    }
}

