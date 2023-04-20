import { getUserFromLocalStorage } from "../../utils/localStorage";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage() || {}
}

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
  
      case USER_LOGIN_SUCCESS:
        return {
          isLoading: false,
          user: action.payload,
        };
  
      default:
        return state;
    }
  };