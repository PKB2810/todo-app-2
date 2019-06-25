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
      
    this.addTodo = this.addTodo.bind(this);
    this.state = {value:''};

  }
  textboxChangeHandler = (e) =>{
    e.persist();
    this.setState({value : e.target.value});

  }
  addTodo = () => {
     
    const todo = { task: this.state.value, status :'pending'}
    this.setState({value : ''});
    this.props.addTodo(todo);
  }
  completedTodo = (item) => {
    console.log('in completedtodo');
    console.log(item);
    this.props.completedTodo(item);
  }
  
  render (){
    
    return <div>
     <form action="">
          <label>Todo
            <input type="textbox" id="textbox1" value={this.state.value} onChange={this.textboxChangeHandler}/>
          </label>
          
         <input type="button" onClick={this.addTodo}  value="Add"/>
     </form>
      <ListTodo todo={this.props.todoList} changeToComplete={this.completedTodo}/>

    </div>


  }

}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
