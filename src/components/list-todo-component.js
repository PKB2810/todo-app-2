import React, { Component } from 'react';
import {ListGroup, ListGroupItem } from 'reactstrap';
import { Button} from 'reactstrap';




function ListTodo ({todo ,changeToComplete}){
  
  const listOfTodo = todo.map((item ,index) => {
    return <ListGroupItem key={index}>{item.task + ' ' + 'status: ' + item.status + ' '}<Button color="success" onClick={() => changeToComplete(item)}>Completed</Button></ListGroupItem>

    })
   
  return <ListGroup>
    {listOfTodo}
    </ListGroup>
 
}

export default ListTodo;