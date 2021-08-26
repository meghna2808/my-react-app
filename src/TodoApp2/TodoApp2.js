import Button from "../Button";
import { useState, useEffect } from "react";
import "./TodoApp2.css";
import axios from "axios";

function Todo2() {
    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);

    const addtolist = () => {
        settodoList([...todoList, inputValue]);
        const url="https://react-project-89f86-default-rtdb.firebaseio.com/people.json";
        const postData = {
            
                relation:"xyz",
                data: inputValue,
                age:22
            
        };
        axios.post(url, postData);
        setinputValue("");
    }
    useEffect(()=>{
        const url="https://jsonplaceholder.typicode.com/todos/1";
        axios.get(url)
        .then(response =>{
            settodoList([...todoList,response.data.title])

        })
    },[])
    useEffect(()=>{
        const url="https://react-project-89f86-default-rtdb.firebaseio.com/people.json";
        axios.get(url)
        .then(response =>{
            console.log("hello",response.data);

        })
    },[])
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