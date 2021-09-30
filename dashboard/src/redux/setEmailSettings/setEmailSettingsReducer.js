import {SET_EMAIL_SETTINGS_REQUEST, SET_EMAIL_SETTINGS_SUCCESS, SET_EMAIL_SETTINGS_FAILURE} from './setEmailSettingsTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const setEmailSettingsReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case SET_EMAIL_SETTINGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SET_EMAIL_SETTINGS_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case SET_EMAIL_SETTINGS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default setEmailSettingsReducer