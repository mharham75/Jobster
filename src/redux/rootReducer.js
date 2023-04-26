import { combineReducers } from "redux";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";
import { profileReducer } from "./reducers/profileReducer";
import { addJobReducer } from "./reducers/addJobReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  profileReducer,
  addJob: addJobReducer,
  //more reducers come here
});

export default rootReducer;
