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
        <a onClick={this.handleDelete.bind(this, record)} >Delete</a>
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
// const {
//   Header, Content,
// } = Layout;
// class AllTodo extends React.Component {
//   constructor(props) {
//     super(props);
//    this.delete = this.handleDelete.bind(this);
//     const { GetTodos } = this.props;
//     GetTodos();

//   }
//   handleDelete(todoId){
//     const {DeleteTodo,history} = this.props
//     DeleteTodo(todoId.id,history)
//   }

//   render() {
//     const {todos} = this.props;
//     return (
//       <div >
//       <Layout>
//       <Header>All Todos <span className="add-todo-btn"><Link to="/addtodo">+</Link></span>

//       </Header>
//       <Content>
//     <List
//       bordered
//       dataSource={todos}
//       renderItem={(item,index) => (
//         <List.Item key={index}>
//         <Row>
//           <Col span={18}>
//           <Link to={`/edittodo/${item.id}`}>{item.title}</Link>
//           </Col>
//            <Col span={6}>
//           </Col>
//           <Col span={6}>
//           <Button type="danger"  onClick={this.handleDelete.bind(this, item)} >Delete</Button>
//           </Col>
//         </Row>
//       </List.Item>)}
//     /></Content>
//     </Layout>
//       </div>
//     );
//   }
// }
