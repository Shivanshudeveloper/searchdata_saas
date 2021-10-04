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
import setEmailSettingsReducer from "./setEmailSettings/setEmailSettingsReducer";
import fetchEmailSettingsReducer from "./fetchEmailSettings/fetchEmailSettingsReducer";
import fetchEnrichCSVReducer from "./fetchEnrichCSV/fetchEnrichCSVReducer";
import addEnrichCSVReducer from "./addEnrichCSV/addEnrichCSVReducer"

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
    addTaskRef: addTaskReducer,
    setEmailSettingsRef: setEmailSettingsReducer,
    fetchEmailSettings: fetchEmailSettingsReducer,
    fetchEnrichCSV: fetchEnrichCSVReducer,
    addEnrichCSVRef: addEnrichCSVReducer 
  });
  
export default rootReducer;