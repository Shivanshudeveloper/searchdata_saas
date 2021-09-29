import {ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE} from './addTaskTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const addTaskReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case ADD_TASK_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_TASK_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case ADD_TASK_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default addTaskReducer