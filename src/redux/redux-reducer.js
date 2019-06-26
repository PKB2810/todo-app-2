import { ADD_TODO,COMPLETED_TODO} from "./actionTypes";
import initialState from './initialState';

function reducer(state=initialState,action){
switch (action.type) {
   case ADD_TODO: 
    
    const todoList = state.todoList.concat(action.payload);
    localStorage.setItem('todoList' , JSON.stringify(todoList));
    return { ...state, todoList:todoList};

    case COMPLETED_TODO : 
    const pendingtodoList = state.todoList.filter((item) => item.task !== action.payload.task);
    localStorage.setItem('todoList' , JSON.stringify(pendingtodoList));
    return { ...state, todoList: pendingtodoList };
    
  default: return state;
}


}

export default reducer;