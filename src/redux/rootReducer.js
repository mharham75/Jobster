import { combineReducers } from "redux";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";
import { profileReducer } from "./reducers/profileReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  profileReducer,
  //more reducers come here
});

export default rootReducer;
