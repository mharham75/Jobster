import axios from "axios";
import {
  ALL_JOBS_FAILURE,
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
} from "../actionTypes";
import { toast } from "react-toastify";
import { baseUrl } from "../../utils/constants/constants";
import { getUserDetailsTokenFromLocalStorage } from "../../utils/localStorage";

const allJobsRequest = () => {
  return {
    type: ALL_JOBS_REQUEST,
  };
};

const allJobsSuccess = (allJobs) => {
  return {
    type: ALL_JOBS_SUCCESS,
    payload: allJobs,
  };
};

const allJobsFailure = (error) => {
  return {
    type: ALL_JOBS_FAILURE,
    payload: error,
  };
};

//thunk
export const allJobsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(allJobsRequest());
      const response = await axios.get(baseUrl+'/jobs',{
        headers:{
            authorization: `Bearer ${getUserDetailsTokenFromLocalStorage()}`
        }
      });
      if (response) {
        dispatch(allJobsSuccess(response.data));
        console.log("all jobs in thunk", response.data);
      }
    } catch (error) {
      toast.error("Error occured");
    }
  };
};
