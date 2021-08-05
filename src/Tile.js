import './Tile.css';
import Button from './Button.js';

function Tile(props) {
    const click = ()=>{
        alert("Button click");
    }
 
    return(
        <div class="tile-container" >
            <p>{props.children}</p>
            <Button onClick={click}>Add</Button>
        </div>
    );
}


export default Tile;