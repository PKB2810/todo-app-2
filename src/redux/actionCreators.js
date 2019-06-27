import { ADD_TODO, COMPLETED_TODO, UPDATE_TODO } from "./actionTypes";

export function completedTodo(task) {
  return { type: COMPLETED_TODO, payload: task };
}

export function addTodo(task) {
  return { type: ADD_TODO, payload: task };
}

export function updateTodo(task, updatedTask) {
  return {
    type: UPDATE_TODO,
    payload: { task: task, updatedTask: updatedTask }
  };
}
