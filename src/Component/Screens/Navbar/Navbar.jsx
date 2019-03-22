import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import './Navbar.css';
const { Header } = Layout;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,

        }
    }


    componentWillMount() {
        const token = localStorage.getItem('token');
        this.setState({ token: token })
    }
    Login = () => {
            this.props.history.push('/');
    }
    Signup = () => {
            this.props.history.push('/Signup')
    }
    List = () => {
        this.props.history.push('./TODOLIST')
    }
    add = () => {
        this.props.history.push('./ADDTODO')
    }
    logout = () => {
        this.props.history.replace('/');
        localStorage.clear();
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    {
                        this.state.token === null ?
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1" onClick={this.Login} >Login</Menu.Item>
                                <Menu.Item key="2" onClick={this.Signup} >Signup</Menu.Item>
                            </Menu>
                            :
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1" onClick={this.List} >LIST</Menu.Item>
                                <Menu.Item key="2" onClick={this.add} >ADD TODO</Menu.Item>
                                <Menu.Item key="3" onClick={this.logout} >Logout</Menu.Item>
                            </Menu>

                    }
                </Header>
            </Layout>
        )
    }
}
export default withRouter(Navbar);
