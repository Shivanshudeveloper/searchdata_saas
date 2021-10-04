import {FETCH_ENRICH_CSV_REQUEST, FETCH_ENRICH_CSV_SUCCESS, FETCH_ENRICH_CSV_FAILURE} from './fetchEnrichCSVTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const fetchEnrichCSVRequest=()=>{
    return{
        type: FETCH_ENRICH_CSV_REQUEST
    }
}

const fetchEnrichCSVSuccess=(enrichCSV)=>{
    return{
        type: FETCH_ENRICH_CSV_SUCCESS,
        payload: enrichCSV
    }
}

const fetchEnrichCSVFailure=(errorMessage)=>{
    return {
        type: FETCH_ENRICH_CSV_FAILURE,
        payload: errorMessage
    }
}

export const fetchEnrichCSV=(user_id)=>{
    
    return (dispatch)=>{
        dispatch(fetchEnrichCSVRequest())
        axios.get(`${API_SERVICE}/api/fetch_enrich_csv`,{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{

        if(resp.data.error)
                {dispatch(fetchEnrichCSVFailure(resp.data.error))}
        else
            {  // console.log(resp.data.email_contacts)
            dispatch(fetchEnrichCSVSuccess(resp.data.enrich_csv))}
    
        }).catch((err)=>
        {
        dispatch(fetchEnrichCSVFailure(err.message))
        }
        )
  
    }
}