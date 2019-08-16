import TODOLIST from "./TODOLIST";
import { connect } from "react-redux";
import { GetTodos, DeleteTodo } from "../../../Redux/Actions/TodoAction";
const mapStateToProp = state => {
  return {
    Todo: state.Todos
  };
};
const mapDispatchToProp = dispatch => {
  return {
    GetTodos: () => dispatch(GetTodos()),
    DeleteTodo: todoId => dispatch(DeleteTodo(todoId))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(TODOLIST);
