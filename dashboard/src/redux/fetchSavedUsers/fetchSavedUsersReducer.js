import {FETCH_SAVED_USERS_REQUEST, FETCH_SAVED_USERS_SUCCESS, FETCH_SAVED_USERS_FAILURE} from './fetchSavedUsersTypes'

const initialState={
    loading: false, 
    users: [],
    error: ''
}

const fetchSavedUsersReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_SAVED_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SAVED_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users: action.payload,
                error:''
            }

        case FETCH_SAVED_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users: [],
                error:action.payload
            }

        default: return state
    }
}


export default fetchSavedUsersReducer