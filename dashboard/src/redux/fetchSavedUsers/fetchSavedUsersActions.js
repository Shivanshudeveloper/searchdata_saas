import {FETCH_SAVED_USERS_REQUEST, FETCH_SAVED_USERS_SUCCESS, FETCH_SAVED_USERS_FAILURE} from './fetchSavedUsersTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const fetchSavedUsersRequest=()=>{
    return{
        type: FETCH_SAVED_USERS_REQUEST
    }
}

const fetchSavedUsersSuccess=(users)=>{
    return{
        type: FETCH_SAVED_USERS_SUCCESS,
        payload: users
    }
}

const fetchSavedUsersFailure=(errorMessage)=>{
    return {
        type: FETCH_SAVED_USERS_FAILURE,
        payload: errorMessage
    }
}

export const fetchSavedUsers=()=>{
    
    return (dispatch)=>{
        dispatch(fetchSavedUsersRequest())
        axios.get(`${API_SERVICE}/api/fetch_saved_users`).then((resp)=>{
    if(resp.data.error)
        {
            console.log(resp.data.error)
            dispatch(fetchSavedUsersFailure(resp.data.error))}
    else
   {console.log("SUCCESS FETCH SAVE")
       dispatch(fetchSavedUsersSuccess(resp.data.users))}
    
  }).catch((err)=>
  {
   dispatch(fetchSavedUsersFailure(err.message))
  })
    }
}