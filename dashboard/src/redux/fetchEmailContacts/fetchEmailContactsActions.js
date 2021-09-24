import {FETCH_EMAIL_CONTACTS_REQUEST, FETCH_EMAIL_CONTACTS_SUCCESS, FETCH_EMAIL_CONTACTS_FAILURE} from './fetchEmailContactsTypes'
import axios from 'axios'


const fetchEmailContactsRequest=()=>{
    return{
        type: FETCH_EMAIL_CONTACTS_REQUEST
    }
}

const fetchEmailContactsSuccess=(emailContacts)=>{
    return{
        type: FETCH_EMAIL_CONTACTS_SUCCESS,
        payload: emailContacts
    }
}

const fetchEmailContactsFailure=(errorMessage)=>{
    return {
        type: FETCH_EMAIL_CONTACTS_FAILURE,
        payload: errorMessage
    }
}

export const fetchEmailContacts=(user_id)=>{
    
    return (dispatch)=>{
        dispatch(fetchEmailContactsRequest())
        axios.get("http://localhost:5000/api/fetch_contact_emails",{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{

        if(resp.data.error)
                {dispatch(fetchEmailContactsFailure(resp.data.error))}
        else
            {console.log(resp.data.email_contacts)
            dispatch(fetchEmailContactsSuccess(resp.data.email_contacts))}
    
        }).catch((err)=>
        {
        dispatch(fetchEmailContactsFailure(err.message))
        }
        )
  
    }
}