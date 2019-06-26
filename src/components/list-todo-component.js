import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";
import { COMPLETED } from "../globalConstants";

function ListTodo({ todo, changeToComplete }) {
  const list = todo.filter(item => item.status !== COMPLETED);
  const listOfTodo = list.map((item, index) => {
    return (
      <ListGroupItem key={index}>
        {item.id + " " + item.task + " " + "status: " + item.status + " "}
        <Button color="success" onClick={() => changeToComplete(item)}>
          Mark as Complete
        </Button>
      </ListGroupItem>
    );
  });

  return <ListGroup>{listOfTodo}</ListGroup>;
}

export default ListTodo;
