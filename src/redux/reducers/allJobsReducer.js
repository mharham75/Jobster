import {
  ALL_JOBS_FAILURE,
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  allJobs: [],
  error: "",
};

export const allJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_JOBS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ALL_JOBS_SUCCESS:
      return {
        isLoading: false,
        allJobs: action.payload,
        error: "",
      };

    case ALL_JOBS_FAILURE:
      return {
        isLoading: false,
        allJobs: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
