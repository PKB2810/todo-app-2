import React, { useState,useEffect} from "react";
import styled from 'styled-components';
import ListTodo from "./list-todo-component";
import { connect } from "react-redux";
import { addTodo, completedTodo } from "../redux/actionCreators";
import {PENDING} from '../globalConstants';
import { Button, Form, FormGroup, Input ,Row,Col }from 'reactstrap';

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

function Main({todoList, addTodo ,completedTodo}) {
  /* constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.state = { value: "" };
  } */
  const [value , setValue] = useState(localStorage.getItem('value') || " ");

  useEffect(() => {
     
     
     localStorage.setItem('value' , value);
      console.log('called');

  }, [value])

  const textboxChangeHandler = e => {
     setValue(e.target.value);
    
  };
  const addTask = () => {
    const todo = { task: value, status: PENDING};
    if(value.trim() !== ''){
     
    setValue(" ");
    addTodo(todo);
  }
  };
 const completeTask = item => {
        completedTodo(item);
  };

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
              value={value}
              onChange={textboxChangeHandler}
            />
              </Col>
              <Col className="col-12 col-sm-3" >
                  <Button color="primary" onClick={addTask} value="Add">Add</Button>
              </Col>
            </Row>
           </FormGroup>
          <FormGroup>
              <Row>
                  <Col className="offset-3 col-sm-6">
                  <ListTodo
                  todo={todoList}
                  changeToComplete={completeTask}
                  />
                  </Col>
              </Row>
          </FormGroup>
          </Form>
      </div>
    );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
