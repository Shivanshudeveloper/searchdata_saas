import {DELETE_USERS_REQUEST, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE} from './deleteUsersTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const deleteUsersReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case DELETE_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case DELETE_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                refNo:'',
                error:action.payload
            }

        default: return state
    }
}


export default deleteUsersReducer