import {FETCH_ENRICH_CSV_REQUEST, FETCH_ENRICH_CSV_SUCCESS, FETCH_ENRICH_CSV_FAILURE} from './fetchEnrichCSVTypes'

const initialState={
    loading: false, 
    enrich_csv: [],
    error: ''
}

const fetchEnrichCSVReducer=(state=initialState,action)=>{
    
    switch(action.type)
    {
        case FETCH_ENRICH_CSV_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ENRICH_CSV_SUCCESS:
            return{
                ...state,
                loading:false,
                enrich_csv: action.payload,
                error:''
            }

        case FETCH_ENRICH_CSV_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default: return state
    }
}


export default fetchEnrichCSVReducer