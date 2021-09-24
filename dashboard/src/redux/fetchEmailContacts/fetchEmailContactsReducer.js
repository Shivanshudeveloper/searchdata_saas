import {FETCH_EMAIL_CONTACTS_REQUEST, FETCH_EMAIL_CONTACTS_SUCCESS, FETCH_EMAIL_CONTACTS_FAILURE} from './fetchEmailContactsTypes'

const initialState={
    loading: false, 
    emailContacts: [],
    error: ''
}

const fetchEmailContactsReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case FETCH_EMAIL_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMAIL_CONTACTS_SUCCESS:
            return{
                ...state,
                loading:false,
                emailContacts: action.payload,
                error:''
            }

        case FETCH_EMAIL_CONTACTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default fetchEmailContactsReducer