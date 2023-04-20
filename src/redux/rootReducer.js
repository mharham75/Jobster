import { combineReducers } from "redux";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import { userLoginReducer } from "./reducers/userLoginReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  //more reducers come here
});

export default rootReducer;
