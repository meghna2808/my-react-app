// import { useState } from 'react';
import './App.css';
// import Button from './Button.js';
// import Todo from './Todo.js';
// import Scoreboard from './Scoreboard/Scoreboard.js';
import Todos from './AxiosApiCall/Todos.js';
import Todo from './TodoApp/Todo';
import Todo2  from './TodoApp2/TodoApp2';


function App() {

  return (
    <div className="App">
        {/* <Todo></Todo> */}
        {/* <Scoreboard></Scoreboard> */}
        {/* <Todos/> */}
        {/* <Todo/> */}
        <Todo2/>
    </div>
  );
}

export default App;
