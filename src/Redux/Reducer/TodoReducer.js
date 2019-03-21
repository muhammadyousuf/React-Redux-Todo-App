import {
    GET_TODOS_SUCCESS
    
} from '../Actions/TodoAction';


const Todos = (state = '',action)=>{
    switch (action.type) {
    
        case GET_TODOS_SUCCESS: {   
            return action.resData
            
        }
       
        default:
            return state
    }
}

export default Todos