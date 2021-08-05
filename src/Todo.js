import './Todo.css';
import Tile from './Tile.js';
import Button from './Button.js';

function Todo() {

  return (
    <div className="Todo">
      <Tile>Do exercise</Tile>
      <Tile>Do exercise</Tile>
      <Tile>Do exercise</Tile>
      <Tile>Do exercise</Tile>
      <Tile>Do exercise</Tile>
    </div>
  );
}

export default Todo;