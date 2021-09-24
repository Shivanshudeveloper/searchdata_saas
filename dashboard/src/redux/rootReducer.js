import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsers/fetchUsersReducer";
import saveUsersReducer from './saveUsers/saveUsersReducer'
import fetchSavedUsersReducer from "./fetchSavedUsers/fetchSavedUsersReducer";
import deleteUsersReducer from "./deleteUsers/deleteUsersReducer";

const rootReducer = combineReducers({
    usersList: fetchUsersReducer,
    saveUserRef: saveUsersReducer,
    savedUsers: fetchSavedUsersReducer,
    deleteUserRefNo: deleteUsersReducer
  });
  
export default rootReducer;