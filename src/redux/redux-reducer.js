import { ADD_TODO, COMPLETED_TODO, UPDATE_TODO } from "./actionTypes";
import initialState from "./initialState";
import { COMPLETED } from "../globalConstants";

function reducer(state = initialState.todoList, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(state); //display all tasks
      const todoList = state.concat(action.payload);
      console.log(todoList); //display all tasks
      localStorage.setItem("todoList", JSON.stringify(todoList));
      return todoList;

    case COMPLETED_TODO:
      const currentTodoList = state.map(item => {
        if (item.id === action.payload.id) {
          item.status = COMPLETED;
        }
        return item;
      });

      console.log(currentTodoList); //display all tasks
      localStorage.setItem("todoList", JSON.stringify(currentTodoList));

      return currentTodoList;

    case UPDATE_TODO:
      const updatedTodoList = state.map(item => {
        if (item.id === action.payload.task.id) {
          item.task = action.payload.updatedTask;
        }
        return item;
      });

      console.log(updatedTodoList); //display all tasks
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));

      return updatedTodoList;

    default:
      return state;
  }
}

export default reducer;
