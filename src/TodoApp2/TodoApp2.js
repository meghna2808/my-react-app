import Button from "../Button";
import { useState,useEffect } from "react";
import "./TodoApp2.css";

function Todo2(){
    const[inputValue,setinputValue]=useState("");
    const[todoList, settodoList]=useState([]);
    const addtolist()=>{
        settodoList(...todoList,inputValue);
        setinputValue("");
    }


    return(
        <div>
            <input placeholder="Type here" value={inputValue}
            onChange={(e)=>{
                setinputValue(e.target.value);
            }}></input>
            <Button onClick={addtolist}>ADD</Button>  
        </div>
        
        

    );
}
export default Todo2;