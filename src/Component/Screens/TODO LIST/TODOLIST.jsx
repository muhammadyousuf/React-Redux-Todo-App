import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { Table, Popconfirm} from "antd";



class TODOLIST extends React.Component {
  constructor(props) {
    super(props);

    const { GetTodos } = this.props;
    GetTodos();
  
 this.columns = [
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
        <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record)}
            >
              <a href="javascript:;">Delete</a>
            </Popconfirm>
      )
    }
  ];
}
  handleDelete(todoId){
     const { DeleteTodo} = this.props;
     DeleteTodo(todoId.id);
   console.log('todo', todoId.id)
  }

  render() {
    const { Todo } = this.props;

    return (
      <div>
        <Navbar />
        <Table columns={this.columns} dataSource={Todo} rowKey='id' />
      </div>
    );
  }
}
export default withRouter(TODOLIST);
