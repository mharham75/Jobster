import axios from "axios";
import { toast } from "react-toastify";
import { EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS } from "../actionTypes";
import { baseUrl } from "../../utils/constants/constants";
import { addUserToLocalStorage, getUserDetailsTokenFromLocalStorage } from "../../utils/localStorage";

const editProfileRequest = () => {
  return {
    type: EDIT_PROFILE_REQUEST,
  };
};

export const editProfileSuccess = (user) => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: user,
  };
};

export const editProfileThunk = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(baseUrl+'/auth/updateUser', user,{
        headers: {
            authorization: `Bearer ${getUserDetailsTokenFromLocalStorage()}`
        }
      });
      if (response) {
        dispatch(editProfileSuccess(response?.data));
        addUserToLocalStorage(user)
        toast.success("profile updated");
      }
    } catch (error) {
      toast.error("Error in updation");
    }
  };
};
