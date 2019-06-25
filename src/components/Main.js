import React, { Component } from "react";
import styled from 'styled-components';
import ListTodo from "./list-todo-component";
import { connect } from "react-redux";
import { addTodo, completedTodo } from "../redux/actionCreators";
import {PENDING} from '../globalConstants';
import { Button, Form, FormGroup, Label, Input ,Row,Col,Container} from 'reactstrap';

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    completedTodo: todo => dispatch(completedTodo(todo))
  };
};

//styled components
const Heading = styled.h1 `
    font-weight:bold;
    color:palevioletred;
    text-align:center;
`;
const StlyedLabel = styled.span`
    font-size:20px;
    color:#f442a7;
`;




class Main extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.state = { value: "" };
  }
  textboxChangeHandler = e => {
     this.setState({ value: e.target.value });
    
  };
  addTodo = () => {
    const todo = { task: this.state.value, status: PENDING};
    if( this.state.value !== ''){
     
    this.setState({ value: "" });
    this.props.addTodo(todo);
  }
  };
  completedTodo = item => {
        this.props.completedTodo(item);
  };

  render() {
    return (
      <div>
        <Heading >Todo App</Heading>
        <Form>
          <FormGroup>
            <Row>
              <Col className=" offset-2 col-12 col-sm-1"> 
              <StlyedLabel >
                   Todo:
                </StlyedLabel>
              </Col>
              <Col className=" col-12 col-sm-6">
              <Input 
              value={this.state.value}
              onChange={this.textboxChangeHandler}
            />
              </Col>
              <Col className="col-12 col-sm-3" >
                  <Button color="primary" onClick={this.addTodo} value="Add">Add</Button>
              </Col>
            </Row>
           </FormGroup>
          <FormGroup>
              <Row>
                  <Col className="offset-3 col-sm-6">
                  <ListTodo
                  todo={this.props.todoList}
                  changeToComplete={this.completedTodo}
                  />
                  </Col>
              </Row>
          </FormGroup>
          </Form>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
