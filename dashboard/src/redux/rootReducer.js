import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsers/fetchUsersReducer";
import saveUsersReducer from './saveUsers/saveUsersReducer'
import fetchSavedUsersReducer from "./fetchSavedUsers/fetchSavedUsersReducer";
import deleteUsersReducer from "./deleteUsers/deleteUsersReducer";
import fetchEmailContactsReducer from "./fetchEmailContacts/fetchEmailContactsReducer";
import addEmailContactsReducer from "./addEmailContacts/addEmailContactsReducer";

const rootReducer = combineReducers({
    usersList: fetchUsersReducer,
    saveUserRef: saveUsersReducer,
    savedUsers: fetchSavedUsersReducer,
    deleteUserRefNo: deleteUsersReducer,
    userContactsEmail: fetchEmailContactsReducer,
    addEmailContactRef: addEmailContactsReducer
  });
  
export default rootReducer;