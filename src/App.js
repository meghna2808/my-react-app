// import { useState } from 'react';
import './App.css';
// import Button from './Button.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Todos from './AxiosApiCall/Todos.js';
import Todo from './TodoApp/Todo';
import Burger from './BurgerBuilder/BurgerContainer';

function App() {

  return (
    <div className="App">
        {/* <Scoreboard></Scoreboard> */}
        {/* <Todos/> */}
        <Todo/>
        
        {/* <Burger/> */}
    </div>
  );
}

export default App;
