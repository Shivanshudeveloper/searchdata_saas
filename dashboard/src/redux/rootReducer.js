import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsers/fetchUsersReducer";

const rootReducer = combineReducers({
    usersList: fetchUsersReducer
  });
  
export default rootReducer;