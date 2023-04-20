import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  user: {},
};

export const userRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
