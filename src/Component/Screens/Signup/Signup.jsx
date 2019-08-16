import React, { Component } from "react";
import { Form, Icon, Input, Button, Card } from "antd";
import { withRouter } from "react-router-dom";
import { reset } from "../../Function/function";
import Navbar from "../Navbar/Navbar";
import "./Signup.css";

class Signup extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.addUser(values);
        reset(this.props);
        this.props.history.push("/");
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Navbar />
        <div
          style={{
            width: "100",
            textAlign: "center",
            marginTop: 100
          }}
        >
          <Card
            title="User Registeration"
            headStyle={{ fontSize: 40, fontFamily: "roboto" }}
            style={{ width: 400, display: "inline-block" }}
          >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item className="Signup-input-box">
                {getFieldDecorator("firstname", {
                  rules: [
                    { required: true, message: "Please input your first name!" }
                  ]
                })(
                  <Input
                    id="normal_login_firstname"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="First Name"
                  />
                )}
              </Form.Item>
              <Form.Item className="Signup-input-box">
                {getFieldDecorator("lastname", {
                  rules: [
                    { required: true, message: "Please input your last name!" }
                  ]
                })(
                  <Input
                    id="normal_login_lastname"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Last Name"
                  />
                )}
              </Form.Item>
              <Form.Item className="Signup-input-box">
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    id="normal_login_email"
                    prefix={
                      <Icon type="fund" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="email"
                  />
                )}
              </Form.Item>
              <Form.Item className="Signup-input-box">
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    id="normal_login_password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button loginbtn"
                >
                  Register
                </Button>
                <div>
                  {" "}
                  <a href="/">Login Here!</a>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const SignupForm = Form.create({ name: "normal_login" })(Signup);
export default withRouter(SignupForm);
