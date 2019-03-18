import React, { Component } from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';

import {withRouter} from 'react-router-dom';
import {reset} from '../../Function/function';



class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
               let obj = this.props.user.AuthReducer.user
               
               if(obj.email === values.email && obj.password === values.password){
                   let user = obj.firstname+' '+obj.lastname
                   localStorage.setItem('token','abc12345')
                   localStorage.setItem('name',user)
                   reset(this.props);
                   this.props.history.push('/Dashboard')
               }
            }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
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
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
          </Button>
                        </div>
                        <div> <a href="/Signup">register now!</a></div>

                    </Form.Item>
                </Form>
            </div>
        );
    }
}



const LoginForm = Form.create({ name: 'normal_login' })(Login);
export default withRouter(LoginForm)