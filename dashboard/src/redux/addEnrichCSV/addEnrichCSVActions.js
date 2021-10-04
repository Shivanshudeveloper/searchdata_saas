import {ADD_ENRICH_CSV_REQUEST, ADD_ENRICH_CSV_SUCCESS, ADD_ENRICH_CSV_FAILURE} from './addEnrichCSVTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';

const addEnrichCSVRequest=()=>{
    return{
        type: ADD_ENRICH_CSV_REQUEST
    }
}

const addEnrichCSVSuccess=(refNo)=>{
    return{
        type: ADD_ENRICH_CSV_SUCCESS,
        payload:refNo
    }
}

const addEnrichCSVFailure=(errorMessage)=>{
    return {
        type: ADD_ENRICH_CSV_FAILURE,
        payload: errorMessage
    }
}

export const addEnrichCSV=(user_id, enrich_csv)=>{
    
    return (dispatch)=>{
        dispatch(addEnrichCSVRequest())
        axios.request({
            url:`${API_SERVICE}/api/add-enrich-csv`,
       method:"POST",
       data: {user_id: user_id, enrich_csv: enrich_csv} 
    }).then((resp)=>{
         if(resp.data.error)
                {dispatch(addEnrichCSVFailure(resp.data.error))}
        else
            {console.log("SUCCESS"); dispatch(addEnrichCSVSuccess(resp.data.refNo))}}
        ).catch((err)=>{
        dispatch(addEnrichCSVFailure(err.message))
        }
        )
  
    }
}