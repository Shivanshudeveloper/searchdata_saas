import {ADD_ENRICH_CSV_REQUEST, ADD_ENRICH_CSV_SUCCESS, ADD_ENRICH_CSV_FAILURE} from './addEnrichCSVTypes'

const initialState={
    loading: false, 
    refNo: '',
    error: ''
}

const addEnrichCSVReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case ADD_ENRICH_CSV_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_ENRICH_CSV_SUCCESS:
            return{
                ...state,
                loading:false,
                refNo: action.payload,
                error:''
            }

        case ADD_ENRICH_CSV_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default addEnrichCSVReducer