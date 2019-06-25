import { ADD_TODO,COMPLETED_TODO} from "./actionTypes";
//import COMPLETED_TODO from "./actionTypes";

 export function completedTodo(task) {
  return { type: COMPLETED_TODO, payload: task }

}

 export function addTodo(task) {
  return { type: ADD_TODO, payload: task }

}