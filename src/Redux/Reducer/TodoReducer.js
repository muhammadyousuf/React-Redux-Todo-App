import {
    GET_TODOS_SUCCESS,
    CREATE_TODO_SUCCESS
    
} from '../Actions/TodoAction';


const Todos = (state = '',action)=>{
    switch (action.type) {
        case CREATE_TODO_SUCCESS: {
            return [...state, action.todo];
          }
        case GET_TODOS_SUCCESS: {   
            return action.resData
            
        }
       
        default:
            return state
    }
}

export default Todos