import ADDTODO from './ADDTODO';
import { connect } from 'react-redux';
import { CreateTodo } from '../../../Redux/Actions/TodoAction';
function mapStateToProps(state) {
    const { todo } = state;
    return { todo };
  }
const mapDispatchToProp = (dispatch) => {
    return{
        CreateTodo: (user) => dispatch(CreateTodo(user)) 
    }
 
}

export default connect(mapStateToProps,mapDispatchToProp)(ADDTODO) 