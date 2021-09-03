import { useState } from 'react';
import './App.css';
// import Button from './Button.js';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Todos from './AxiosApiCall/Todos.js';
import Todo from './TodoApp/Todo';
import Burger from './BurgerBuilder/BurgerContainer';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [project, changeProject] = useState("burger-builder");
  const updateProject = (projectName) =>{
      changeProject(projectName);
  }
  const showProject = () =>{
    switch(project){
      case "burger-builder":
        return <Burger/>;
      
      case "scoreboard":
        return <Scoreboard/>;

      case "todo-list":
        return <Todo/>;

      default: 
         return <Burger/>
    }
  }

  return (
    <div className="App">
        <Navbar
          updateProject={updateProject}
        />
        {
          showProject()
        }
    </div>
  );
}

export default App;
