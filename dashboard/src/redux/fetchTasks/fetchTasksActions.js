import {FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE} from './fetchTasksTypes'
import axios from 'axios'
import { API_SERVICE } from '../../URI';


const fetchTasksRequest=()=>{
    return{
        type: FETCH_TASKS_REQUEST
    }
}

const fetchTasksSuccess=(tasks)=>{
    return{
        type: FETCH_TASKS_SUCCESS,
        payload: tasks
    }
}

const fetchTasksFailure=(errorMessage)=>{
    return {
        type: FETCH_TASKS_FAILURE,
        payload: errorMessage
    }
}

export const fetchTasks=(user_id)=>{
    
    return (dispatch)=>{
        dispatch(fetchTasksRequest())
        axios.get(`${API_SERVICE}/api/fetch_tasks`,{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
   // console.log(resp.data.tasks)
   dispatch(fetchTasksSuccess(resp.data.tasks))
    
  }).catch((err)=>
  {
   dispatch(fetchTasksFailure(err.message))
  })
    }
}