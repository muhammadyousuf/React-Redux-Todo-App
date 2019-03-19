import TODOLIST from './TODOLIST';
import { connect } from 'react-redux';
import {GetTodos} from '../../../Redux/Actions/TodoAction';
const mapStateToProp = (state) => {
    console.log('UPADTED STATE', state);
    return {
        Todo : state.Todos
     }
}
const mapDispatchToProp = (dispatch) => {
    return{
        GetTodos: () => dispatch(GetTodos()) 
    }
 
}

export default connect(mapStateToProp,mapDispatchToProp)(TODOLIST) 