import {ADD_CALL_REQUEST, ADD_CALL_SUCCESS, ADD_CALL_FAILURE} from './addCallTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const addCallReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case ADD_CALL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_CALL_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case ADD_CALL_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default addCallReducer