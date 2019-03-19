import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Table } from 'antd';

const columns = [
    { title: 'id', dataIndex: 'id', key: 'id' },
    { title: 'title', dataIndex: 'title', key: 'title' },
    { title: 'order', dataIndex: 'order', key: 'order' },
   
    {
      title: 'Delete', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a>,
    },
  ];
  
  const data = [
    {
      key: 1, todo: 'John Brown', age: 32, address: 'New York No. 1 Lake Park',
    },
   
  ];

class TODOLIST extends Component {
constructor(props){
    super(props);
    this.state = {
        todo:[]
    }
}

    componentDidMount() {
        this.props.GetTodos()
        console.log('this', this.props)
        // data.push(this.props.GetTodos())
        console.log((this.props.Todo))
        let todo = this.props.Todo
        this.setState({todo}, () =>{
            console.log('user',this.state.todo )
        })
        
        

    }
     
    render() {
        return (
            <div >
                <Navbar />
                <Table
                    columns={columns}
                    dataSource={this.state.todo}
                />
            </div>
        );
    }
}




export default withRouter(TODOLIST) 