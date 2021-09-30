import {FETCH_EMAIL_SETTINGS_REQUEST, FETCH_EMAIL_SETTINGS_SUCCESS, FETCH_EMAIL_SETTINGS_FAILURE} from './fetchEmailSettingsTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const fetchEmailSettingsRequest=()=>{
    return{
        type: FETCH_EMAIL_SETTINGS_REQUEST
    }
}

const fetchEmailSettingsSuccess=(email_provider_settings)=>{
    return{
        type: FETCH_EMAIL_SETTINGS_SUCCESS,
        payload: email_provider_settings
    }
}

const fetchEmailSettingsFailure=(errorMessage)=>{
    return {
        type: FETCH_EMAIL_SETTINGS_FAILURE,
        payload: errorMessage
    }
}

export const fetchEmailSettings=(user_id)=>{
    
    return (dispatch)=>{
        dispatch(fetchEmailSettingsRequest())
        axios.get(`${API_SERVICE}/api/fetch_email_provider_details`,{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
   // console.log(resp.data.tasks)
   dispatch(fetchEmailSettingsSuccess(resp.data.email_provider_settings))
    
  }).catch((err)=>
  {
   dispatch(fetchEmailSettingsFailure(err.message))
  })
    }
}