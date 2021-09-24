import {SAVE_USERS_REQUEST, SAVE_USERS_SUCCESS, SAVE_USERS_FAILURE} from './saveUsersTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const saveUsersReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case SAVE_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SAVE_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case SAVE_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                refNo:'',
                error:action.payload
            }

        default: return state
    }
}


export default saveUsersReducer