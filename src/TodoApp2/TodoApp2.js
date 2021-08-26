import Button from "../Button";
import { useState, useEffect } from "react";
import "./TodoApp2.css";

function Todo2() {
    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);

    const addtolist = () => {
        settodoList([...todoList, inputValue]);
        setinputValue("");
    }
    const displaytodoList = () => {
        if (todoList.length == 0) return null;
        const abc =
            <ol>
                {
                    todoList.map((element, i) => {
                        return (
                            <div className="todo">
                                <li>{element}</li>
                                <Button>Delete</Button>
                            </div>
                        )
                    })
                }
            </ol>
        return abc;

    }


    return (
        <div className="container-div">
            <div className="type">
                <input placeholder="Type here" value={inputValue}
                    onChange={(e) => {
                        setinputValue(e.target.value);
                    }}></input>
                <Button onClick={addtolist}>ADD</Button>
            </div>
            <div>
                {displaytodoList()}
            </div>
        </div>



    );
}
export default Todo2;