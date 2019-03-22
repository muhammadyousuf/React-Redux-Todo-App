import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { Table} from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "name",
   
  },
  {
    title: "TITLE",
    dataIndex: "title",
    key: "title",
   
  },
  {
    title: "ORDER",
    dataIndex: "order",
    key: "order",
   
  },

  {
    title: "DELETE",
    key: "action",
    render: (text, record) => (
      <span>
        {/* {console.log(record.id)} */}
        <a  >Delete</a>
      </span>
    )
  }
];

class TODOLIST extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.handleDelete.bind(this);
    const { GetTodos } = this.props;
    GetTodos();
  }
  handleDelete(todoId){
    // const { DeleteTodo, history } = this.props;
    // DeleteTodo(todoId.id, history);
 //   console.log('todo', todoId)
  }

  render() {
    const { Todo } = this.props;

    return (
      <div>
        <Navbar />
        <Table columns={columns} dataSource={Todo} rowKey='id' />
      </div>
    );
  }
}
export default withRouter(TODOLIST);
