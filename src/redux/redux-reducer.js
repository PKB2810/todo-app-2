import { ADD_TODO, COMPLETED_TODO } from "./actionTypes";
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
      const pendingtodoList = state.filter(
        item => item.id !== action.payload.id
      );
      const tempCompletedTodoList = state.filter(
        item => item.id === action.payload.id
      );
      const completedTasks = tempCompletedTodoList.map(taskItem => {
        return { ...taskItem, status: COMPLETED };
      });
      const currentTodoList = pendingtodoList.concat(completedTasks);
      console.log(currentTodoList); //display all tasks
      localStorage.setItem("todoList", JSON.stringify(currentTodoList));

      return currentTodoList;

    default:
      return state;
  }
}

export default reducer;
