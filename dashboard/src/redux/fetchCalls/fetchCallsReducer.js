import {FETCH_CALLS_REQUEST, FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE} from './fetchCallsTypes'

const initialState={
    loading: false, 
   calls: [],
    error: ''
}

const fetchCallsReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_CALLS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CALLS_SUCCESS:
            return{
                ...state,
                loading:false,
               calls: action.payload,
                error:''
            }

        case FETCH_CALLS_FAILURE:
            return{
                ...state,
                loading:false,
               calls: [],
                error:action.payload
            }

        default: return state
    }
}


export default fetchCallsReducer