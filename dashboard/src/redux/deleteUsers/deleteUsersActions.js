import {DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE} from './deleteUsersTypes'
import axios from 'axios'


const deleteUsersRequest=()=>{
    return{
        type: DELETE_USERS_REQUEST
    }
}

const deleteUsersSuccess=(refNo)=>{
    return{
        type: DELETE_USERS_SUCCESS,
        payload:refNo
    }
}

const deleteUsersFailure=(errorMessage)=>{
    return {
        type: DELETE_USERS_FAILURE,
        payload: errorMessage
    }
}

export const deleteUsers=(userdata)=>{
    
    return (dispatch)=>{
        dispatch(deleteUsersRequest())
        axios.request({
            method: 'post',
        url: 'http://localhost:5000/api/delete-user',
        data: {
                id: userdata.user_id,
            }
        }).then((resp)=>{
   if(resp.data.error)
        {dispatch(deleteUsersFailure(resp.data.error))}
    else
      {console.log("SUCCESSS SAVE"); dispatch(deleteUsersSuccess(resp.data.refNo))}
    
  }).catch((err)=>
  {
   dispatch(deleteUsersFailure(err.message))
  })
    }
}