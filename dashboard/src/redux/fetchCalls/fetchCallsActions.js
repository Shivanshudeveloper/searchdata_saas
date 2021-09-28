import {FETCH_CALLS_REQUEST, FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE} from './fetchCallsTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const fetchCallsRequest=()=>{
    return{
        type: FETCH_CALLS_REQUEST
    }
}

const fetchCallsSuccess=(calls)=>{
    return{
        type: FETCH_CALLS_SUCCESS,
        payload: calls
    }
}

const fetchCallsFailure=(errorMessage)=>{
    return {
        type: FETCH_CALLS_FAILURE,
        payload: errorMessage
    }
}

export const fetchCalls=(user_id)=>{
    
    return (dispatch)=>{
        dispatch(fetchCallsRequest())
        axios.get(`${API_SERVICE}/api/fetch_calls`,{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
    console.log(resp.data.calls)
   dispatch(fetchCallsSuccess(resp.data.calls))
    
  }).catch((err)=>
  {
   dispatch(fetchCallsFailure(err.message))
  })
    }
}