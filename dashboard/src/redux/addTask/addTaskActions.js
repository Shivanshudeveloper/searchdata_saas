import {ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE} from './addTaskTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';

const addTaskRequest=()=>{
    return{
        type: ADD_TASK_REQUEST
    }
}

const addTaskSuccess=(refNo)=>{
    return{
        type: ADD_TASK_SUCCESS,
        payload:refNo
    }
}

const addTaskFailure=(errorMessage)=>{
    return {
        type: ADD_TASK_FAILURE,
        payload: errorMessage
    }
}

export const addTask=(user_id,taskInfo)=>{
    
    return (dispatch)=>{
        dispatch(addTaskRequest())
        axios.request({
            url:`${API_SERVICE}/api/add-task`,
       method:"POST",
       data: {user_id: user_id, taskInfo: taskInfo} 
    }).then((resp)=>{
         if(resp.data.error)
                {dispatch(addTaskFailure(resp.data.error))}
        else
            {dispatch(addTaskSuccess(resp.data.refNo))}}
        ).catch((err)=>{
        dispatch(addTaskFailure(err.message))
        }
        )
  
    }
}