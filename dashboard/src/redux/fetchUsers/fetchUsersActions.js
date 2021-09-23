import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './fetchUsersTypes'
import axios from 'axios'


const fetchUsersRequest=()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure=(errorMessage)=>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: errorMessage
    }
}

export const fetchUsers=()=>{
    
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("http://localhost:5000/api/fetch_users").then((resp)=>{
    console.log(resp.data.users)
   dispatch(fetchUsersSuccess(resp.data.users))
    
  }).catch((err)=>
  {
   dispatch(fetchUsersFailure(err.message))
  })
    }
}