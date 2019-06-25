import React,{Component} from 'react';
import ListTodo from './list-todo-component';
import { connect } from "react-redux";
import { addTodo,completedTodo} from '../redux/actionCreators';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    completedTodo : (todo)=> dispatch(completedTodo(todo))


  };
}
class Main extends React.Component{
  
  constructor(props){
      super(props);
      //this.state =;
    this.addTodo = this.addTodo.bind(this);

  }
  addTodo = () => {
     console.log('in todo');   
    const todo = { task: document.getElementById("textbox1").value, status :'pending'}
    
      this.props.addTodo(todo);
  }
  completedTodo = (item) => {
    console.log('in completedtodo');
    console.log(item);
    this.props.completedTodo(item);
  }
  
  render (){
    
    return <div>
      <span>Todo</span><input type="textbox" id="textbox1" />
      <button onClick={this.addTodo}  >Add</button>
      <ListTodo todo={this.props.todoList} changeToComplete={this.completedTodo}/>

    </div>


  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
