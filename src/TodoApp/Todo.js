import Button from "../Button";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";

function Todo() {
    const [todoList, settodoList] = useState([]);
    const [inputValue, setinputValue] = useState("");

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/todos/1"
        axios.get(url)
            .then(response => {
                settodoList([...todoList, response.data.title])
            })

    }, []);

    const displaytodoList = () => {
        if (todoList.length === 0) return null;
        // console.log(todoList);
        const abc =
            <ol>
                {
                    todoList.map((element,i) => {
                        return(
                        <div className="todo-item-div">
                            <li>{element}</li>
                            <Button onClick={(i)=>{
                                console.log(i);
                            }}>Delete</Button>
                        </div>);
                    })
                }
            </ol>;
        return abc;
    }
    const addToDoItem = () => {
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