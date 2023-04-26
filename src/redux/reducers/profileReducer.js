import { EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS } from "../actionTypes";

const initialState = {
  isLoading: false,
  user: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE_REQUEST:
      return {
        isLoading: true,
        user: {},
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
      };

    default:
      return state;
  }
};
