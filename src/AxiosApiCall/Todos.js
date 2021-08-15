import Button from "../Button";
import { useState, useEffect } from "react";
import "../Scoreboard/Scoreboard.css"
import axios from "axios";

function Todos() {

    const [todoData, settodoData] = useState([]);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/todos";
        axios.get(url)
            .then(response => {
                console.log("Todos data fetched");
                settodoData(response.data);
            })
            .catch(err=>{
                console.log(err);
            });
    }, []);


    const displayTodos = () => {
        if (todoData.length === 0) return null;
        const displayTodoData = todoData.filter((element, i) => i<5);
        const html =
            <div>
                {
                    displayTodoData.map((element, i) => {
                        return <p key={element.id}>{element.title}</p>;
                    })
                }
            </div>
        return html;
    }

    return (
        <div className="container-div">
            <h1>Todos</h1>
            {
                displayTodos()
            }
        </div>

    );

}

export default Todos;