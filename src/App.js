import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

  const [task,settask]=useState();

  const [todos,settodos]=useState([]);

  const onchangehandler =(e)=>{
    settask(e.target.value)
  }
  const onsubmithandler =(e)=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    settodos(newTodos);
    settask("");
    console.log(todos);
  }

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    settodos(newTodos);
  }
  

  return (
    <div >
      <center>
      <div className="card">
        <div className="card-body">
        <h5 class="card-title">Task Management System</h5>
          <form onSubmit={onsubmithandler}>
            <input type='text' name='task' value={task}  onChange={onchangehandler}/> &nbsp; &nbsp; 
            <input type='submit' value='Add Task' />
          </form>
          <TodoList todolist={todos} deleteHandler={deleteHandler}/>
        </div>
      </div> 
      </center>
     </div>
  );
}

export default App;
