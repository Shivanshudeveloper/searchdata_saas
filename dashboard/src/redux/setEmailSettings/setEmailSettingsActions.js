import {SET_EMAIL_SETTINGS_REQUEST, SET_EMAIL_SETTINGS_SUCCESS, SET_EMAIL_SETTINGS_FAILURE} from './setEmailSettingsTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';

const setEmailSettingsRequest=()=>{
    return{
        type: SET_EMAIL_SETTINGS_REQUEST
    }
}

const setEmailSettingsSuccess=(refNo)=>{
    return{
        type: SET_EMAIL_SETTINGS_SUCCESS,
        payload:refNo
    }
}

const setEmailSettingsFailure=(errorMessage)=>{
    return {
        type: SET_EMAIL_SETTINGS_FAILURE,
        payload: errorMessage
    }
}

export const setEmailSettings=(user_id,email_settings)=>{
    
    return (dispatch)=>{
        dispatch(setEmailSettingsRequest())
        axios.request({
            url:`${API_SERVICE}/api/set-email-provider`,
       method:"POST",
       data: {user_id: user_id, email_provider_settings: email_settings} 
    }).then((resp)=>{
         if(resp.data.error)
                {dispatch(setEmailSettingsFailure(resp.data.error))}
        else
            {dispatch(setEmailSettingsSuccess(resp.data.refNo))}}
        ).catch((err)=>{
        dispatch(setEmailSettingsFailure(err.message))
        }
        )
  
    }
}