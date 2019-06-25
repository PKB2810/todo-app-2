import React, { Component } from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';



function ListTodo ({todo ,changeToComplete}){
   
  const listOfTodo = todo.map((item ,index) => {
    return <ListGroupItem key={index}>{item.task + ' ' + 'status: ' + item.status + ' '}<button onClick={() => changeToComplete(item)}>Completed</button></ListGroupItem>

    })
 
  return <ListGroup>
    {listOfTodo}
    </ListGroup>
 
}

export default ListTodo;