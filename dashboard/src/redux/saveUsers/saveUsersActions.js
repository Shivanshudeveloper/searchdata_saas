import {SAVE_USERS_REQUEST, SAVE_USERS_SUCCESS, SAVE_USERS_FAILURE} from './saveUsersTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const saveUsersRequest=()=>{
    return{
        type: SAVE_USERS_REQUEST
    }
}

const saveUsersSuccess=(refNo)=>{
    return{
        type: SAVE_USERS_SUCCESS,
        payload:refNo
    }
}

const saveUsersFailure=(errorMessage)=>{
    return {
        type: SAVE_USERS_FAILURE,
        payload: errorMessage
    }
}

export const saveUsers=(userdata)=>{
    
    return (dispatch)=>{
        dispatch(saveUsersRequest())
        axios.request({
            method: 'post',
        url: `${API_SERVICE}/api/add-user`,
        data: {
                id: userdata.user_id,
                name: userdata.full_name,
                country: userdata.country,
                linkedin: userdata.linkedin,
                email:userdata.email
            }
        }).then((resp)=>{
   if(resp.data.error)
        {dispatch(saveUsersFailure(resp.data.error))}
    else
      {console.log("SUCCESSS SAVE"); dispatch(saveUsersSuccess(resp.data.refNo))}
    
  }).catch((err)=>
  {
   dispatch(saveUsersFailure(err.message))
  })
    }
}