import { combineReducers } from "redux";
import fetchUsersReducer from "./fetchUsers/fetchUsersReducer";
import saveUsersReducer from './saveUsers/saveUsersReducer'
import fetchSavedUsersReducer from "./fetchSavedUsers/fetchSavedUsersReducer";
import deleteUsersReducer from "./deleteUsers/deleteUsersReducer";
import fetchEmailContactsReducer from "./fetchEmailContacts/fetchEmailContactsReducer";
import addEmailContactsReducer from "./addEmailContacts/addEmailContactsReducer";
import addCallReducer from "./addCall/addCallReducer";
import fetchCallsReducer from "./fetchCalls/fetchCallsReducer";
import fetchTasksReducer from "./fetchTasks/fetchTasksReducer";
import addTaskReducer from "./addTask/addTaskReducer";

const rootReducer = combineReducers({
    usersList: fetchUsersReducer,
    saveUserRef: saveUsersReducer,
    savedUsers: fetchSavedUsersReducer,
    deleteUserRefNo: deleteUsersReducer,
    userContactsEmail: fetchEmailContactsReducer,
    addEmailContactRef: addEmailContactsReducer,
    addCallRef: addCallReducer,
    fetchCallsList: fetchCallsReducer,
    fetchTasksList: fetchTasksReducer,
    addTaskRef: addTaskReducer
  });
  
export default rootReducer;