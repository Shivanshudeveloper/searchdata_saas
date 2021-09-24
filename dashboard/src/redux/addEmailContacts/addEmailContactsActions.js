import {ADD_EMAIL_CONTACTS_REQUEST, ADD_EMAIL_CONTACTS_SUCCESS, ADD_EMAIL_CONTACTS_FAILURE} from './addEmailContactsTypes'
import axios from 'axios'


const addEmailContactsRequest=()=>{
    return{
        type: ADD_EMAIL_CONTACTS_REQUEST
    }
}

const addEmailContactsSuccess=(refNo)=>{
    return{
        type: ADD_EMAIL_CONTACTS_SUCCESS,
        payload:refNo
    }
}

const addEmailContactsFailure=(errorMessage)=>{
    return {
        type: ADD_EMAIL_CONTACTS_FAILURE,
        payload: errorMessage
    }
}

export const addEmailContacts=(user_id,email_adding)=>{
    
    return (dispatch)=>{
        dispatch(addEmailContactsRequest())
        axios.request({
            url:"http://localhost:5000/api/add-user-contact-email",
       method:"POST",
       data: {user_id: user_id, email_adding: email_adding} 
    }).then((resp)=>{
         if(resp.data.error)
                {dispatch(addEmailContactsFailure(resp.data.error))}
        else
            {dispatch(addEmailContactsSuccess(resp.data.refNo))}}
        ).catch((err)=>{
        dispatch(addEmailContactsFailure(err.message))
        }
        )
  
    }
}