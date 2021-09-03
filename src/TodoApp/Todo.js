import Button from "../Button";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";

function Todo() {
    const [todoList, settodoList] = useState([]);
    const [inputValue, setinputValue] = useState("");

    const deleteTodo = i => {
        const newTodoList = [...todoList];
        newTodoList.splice(i,1);
        settodoList(newTodoList);
    }

    const displaytodoList = () => {
        if (todoList.length === 0) return null;
        const displayTodo =
            <ol>
                {
                    todoList.map((element,i) => {
                        return(
                        <div className="todo-item-div">
                            <li>{element}</li>
                            <Button onClick={()=>{
                                deleteTodo(i);
                            }}>Delete</Button>
                        </div>);
                    })
                }
            </ol>;
        return displayTodo;
    }
    const addToDoItem = () => {
        if(inputValue.trim() === ''){
            alert("Please enter something !!");
            setinputValue("");
            return;
        }
        settodoList([...todoList, inputValue]);
        setinputValue("");
    }
    return (
        <div className="container-div">
            <div>
                <input placeholder="Type here"
                    value={inputValue}
                    onChange={(e) => {
                        setinputValue(e.target.value);
                    }} />
                <Button onClick={addToDoItem}>Done</Button>
            </div>
            {displaytodoList()}
        </div>
    );

}
export default Todo;