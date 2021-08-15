// import { useState } from 'react';
import './App.css';
// import Button from './Button.js';
// import Todo from './Todo.js';
// import Scoreboard from './Scoreboard/Scoreboard.js';
import Todos from './AxiosApiCall/Todos.js';
import Todo from './TodoApp/Todo';


function App() {

  return (
    <div className="App">
        {/* <Todo></Todo> */}
        {/* <Scoreboard></Scoreboard> */}
        <Todos/>
        <Todo/>
    </div>
  );
}

export default App;
