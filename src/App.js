import logo from './logo.svg';
import './App.css';
import './Button.js';
import Button from './Button.js';

function App() {

  const click = ()=>{
    alert("hello");
  }

  return (
    <div className="App">
      <div>
        <Button btndabaya={click}>Himanshu</Button>
        <Button btnColor="red">Yadav</Button>
      </div>
    </div>
  );
}

export default App;
