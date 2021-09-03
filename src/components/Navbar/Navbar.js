import React from "react";
import Button from "../../Button";
import "./Navbar.css"

function Navbar(props) {
    return <div className="navbar">
        <Button onClick={()=>{props.updateProject("burger-builder")}} customClassName="nav-btn">Burger Builder</Button>
        <Button onClick={()=>{props.updateProject("todo-list")}} customClassName="nav-btn">Todo List</Button>
        <Button onClick={()=>{props.updateProject("scoreboard")}} customClassName="nav-btn">Scoreboard</Button>
    </div>
    
}

export default Navbar;