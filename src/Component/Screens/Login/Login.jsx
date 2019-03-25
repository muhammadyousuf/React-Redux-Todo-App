import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col, Card
} from 'antd';
import './Login.css';
import { withRouter } from 'react-router-dom';
import { reset } from '../../Function/function';
import Navbar from '../Navbar/Navbar';


class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let obj = this.props.user.AuthReducer.user

               // if (obj.email === values.email && obj.password === values.password) {
                if ("muhammadyousuf@gmail.com" === values.email && "123456" === values.password) {
               //     let user = obj.firstname + ' ' + obj.lastname
                    localStorage.setItem('token', 'abc12345')
                   // localStorage.setItem('name', user)
                    reset(this.props);
                    this.props.history.push('/ADDTODO')
                }
            }
        });
    }
    signup = ()  => {
        window.location = "/Signup";
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
            
                <Navbar />
                <div style={{
                    width: '100',
                    textAlign: 'center',
                    marginTop: 100
                }} >
              
                    <Card
                        title="User Login"
                        headStyle={{ fontSize: 40, fontFamily: 'roboto' }}
                        style={{ width: 400, display: 'inline-block' }}
                    >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Row>
                                <Col span={2}>

                                    <Form.Item className="Login-input-box" >
                                        {getFieldDecorator('email', {
                                            rules: [{ required: true, message: 'Please input your email!' }],
                                        })(
                                            <Input id="normal_login_email" prefix={<Icon type="fund" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item className="Login-input-box" >
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input id="normal_login_password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Form.Item >
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <div>
                                    <a className="login-form-forgot" href="/Login">Forgot password</a>
                                </div>
                                <div>
                                    <Button type="primary" htmlType="submit" className="login-form-button loginbtn ">
                                        Login
          </Button>
                                </div>
                                <div  >
                                    <p onClick={this.signup} className="Register-link">Register Now!</p>
                                </div>

                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        );
    }
}



const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default withRouter(LoginForm)