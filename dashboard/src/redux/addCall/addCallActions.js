import {ADD_CALL_REQUEST, ADD_CALL_SUCCESS, ADD_CALL_FAILURE} from './addCallTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';

const addCallRequest=()=>{
    return{
        type: ADD_CALL_REQUEST
    }
}

const addCallSuccess=(refNo)=>{
    return{
        type: ADD_CALL_SUCCESS,
        payload:refNo
    }
}

const addCallFailure=(errorMessage)=>{
    return {
        type: ADD_CALL_FAILURE,
        payload: errorMessage
    }
}

export const addCall=(user_id,callInfo)=>{
    
    return (dispatch)=>{
        dispatch(addCallRequest())
        axios.request({
            url:`${API_SERVICE}/api/add-call`,
       method:"POST",
       data: {user_id: user_id, callInfo: callInfo} 
    }).then((resp)=>{
         if(resp.data.error)
                {dispatch(addCallFailure(resp.data.error))}
        else
            {dispatch(addCallSuccess(resp.data.refNo))}}
        ).catch((err)=>{
        dispatch(addCallFailure(err.message))
        }
        )
  
    }
}