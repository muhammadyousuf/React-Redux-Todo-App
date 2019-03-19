import {
    GET_TODOS_SUCCESS
    
} from '../Actions/TodoAction';


const Todos = (state = '',action)=>{
    switch (action.type) {
    
    case GET_TODOS_SUCCESS: {   
        return { ...state, Todo: action.res }
        
    }
       
        default:
            return state
    }
}

export default Todos