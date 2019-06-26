import React, { Component, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Button } from "reactstrap";
import { COMPLETED } from "../globalConstants";

function EditTask({ task, textboxChangeHandler }) {
  console.log("abc");
  return (
    <input type="text" value={task.task} onChange={textboxChangeHandler} />
  );
}
function ListTodo({ todo, changeToComplete, textboxChangeHandler }) {
  if (Array.isArray(todo)) {
    const [clicked, setClicked] = useState(false);
    const list = todo.filter(item => item.status !== COMPLETED);
    const listOfTodo = list.map((item, index) => {
      return (
        <ListGroupItem key={index}>
          <div
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            {item.id + " " + item.task + " " + "status: " + item.status + " "}
          </div>
          <Button color="success" onClick={() => changeToComplete(item)}>
            Mark as Complete
          </Button>
        </ListGroupItem>
      );
    });

    return <ListGroup>{listOfTodo}</ListGroup>;
  }
  return <div> </div>;
}

export default ListTodo;
