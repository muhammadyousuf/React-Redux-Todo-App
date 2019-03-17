import React, { Component } from 'react';
import {
    Form, Icon, Input, Button,
} from 'antd';
import { connect } from 'react-redux';
import { addUser } from '../../../Redux/Actions/AuthAction';

class Signup extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.addUser(values);
                this.props.history.push('/')
            }
        });
    }
  
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                        {getFieldDecorator('firstname', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="First Name" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastname', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Last Name" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <Input  prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />
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
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
          </Button>
                        <div> <a href="/">Login Here!</a></div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateToProp = (state) => {
    console.log('UPADTED STATE',state);
    return {
       user : state.user
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        addUser: (user) => dispatch(addUser(user)) 
    }
 
}

const SignupForm = Form.create({ name: 'normal_login' })(Signup);
export default connect(mapStateToProp, mapDispatchToProp)(SignupForm) 