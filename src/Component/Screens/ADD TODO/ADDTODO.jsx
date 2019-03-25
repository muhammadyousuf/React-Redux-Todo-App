import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Form, Icon, Input, Button, Card } from "antd";
import { reset } from "../../Function/function";

class ADDTODO extends Component {
    constructor(props) {
        super(props);
    
        const value = props.value || {};
        this.state = {
          number: value.number || 0,
          currency: value.currency || 'rmb',
        };
      }
  componentDidMount() {
    console.log("user", this.props);
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let title = values.todo
        let obj = {
            title,
            order: this.state.number
        }
        this.props.CreateTodo(obj);
        reset(this.props);
        this.props.history.push("/TODOLIST");
      }
    });
  };
  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  }
  triggerChange = (changedValue) => {
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { size } = this.props;
    const state = this.state;
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
            title="ADD TODO"
            headStyle={{ fontSize: 40, fontFamily: "roboto" }}
            style={{ width: 400, display: "inline-block" }}
          >
            <Form onSubmit={this.handleSubmit} >
              <Form.Item >
                {getFieldDecorator("todo", {
                  rules: [{ required: true, message: "Please add todo!" }]
                })(
                  <Input
                  id="normal_todo_todo"
                    prefix={
                      <Icon type="form" style={{ color: "rgba(0,0,0,.25)" }}  />
                    }
                    placeholder="TODO"
                  />
                )}
              </Form.Item>
              <Form.Item >
                  
                <Input
                  type="text"
                  size={size}
                  value={state.number}
                  onChange={this.handleNumberChange}
                  style={{ width: "100%", marginRight: "3%" }}
                  id="order"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  className="todo-form-button"
                  htmlType="submit"
                >
                  ADD TODO
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const ADDTODOForm = Form.create({ name: "normal_todo" })(ADDTODO);
export default withRouter(ADDTODOForm);
