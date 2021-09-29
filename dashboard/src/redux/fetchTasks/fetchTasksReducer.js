import {FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE} from './fetchTasksTypes'

const initialState={
    loading: false, 
   tasks: [],
    error: ''
}

const fetchTasksReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_TASKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASKS_SUCCESS:
            return{
                ...state,
                loading:false,
               tasks: action.payload,
                error:''
            }

        case FETCH_TASKS_FAILURE:
            return{
                ...state,
                loading:false,
               tasks: [],
                error:action.payload
            }

        default: return state
    }
}


export default fetchTasksReducer