import {FETCH_EMAIL_SETTINGS_REQUEST, FETCH_EMAIL_SETTINGS_SUCCESS, FETCH_EMAIL_SETTINGS_FAILURE} from './fetchEmailSettingsTypes'

const initialState={
    loading: false, 
    email_provider_settings:{},
    error: ''
}

const fetchEmailSettingsReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_EMAIL_SETTINGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_EMAIL_SETTINGS_SUCCESS:
            return{
                ...state,
                loading:false,
               email_provider_settings: action.payload,
                error:''
            }

        case FETCH_EMAIL_SETTINGS_FAILURE:
            return{
                ...state,
                loading:false,
               email_provider_settings:{},
                error:action.payload
            }

        default: return state
    }
}


export default fetchEmailSettingsReducer