import ADDTODO from './ADDTODO';
import { connect } from 'react-redux';
import { CreateTodo } from '../../../Redux/Actions/TodoAction';
function mapStateToProps(state) {
    const { todo } = state;
    return { todo };
  }
const mapDispatchToProp = (dispatch) => {
    return{
        CreateTodo: (todo) => dispatch(CreateTodo(todo)) 
    }
 
}

export default connect(mapStateToProps,mapDispatchToProp)(ADDTODO) 