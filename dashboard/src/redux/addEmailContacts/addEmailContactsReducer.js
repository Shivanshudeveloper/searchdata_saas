import {ADD_EMAIL_CONTACTS_REQUEST, ADD_EMAIL_CONTACTS_SUCCESS, ADD_EMAIL_CONTACTS_FAILURE} from './addEmailContactsTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const addEmailContactsReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case ADD_EMAIL_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_EMAIL_CONTACTS_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case ADD_EMAIL_CONTACTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default addEmailContactsReducer