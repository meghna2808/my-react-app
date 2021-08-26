import Button from "../Button";
import "./People.css";
import axios from "axios";
import { useState, useEffect } from "react";
function People() {
    const [nameValue, setnameValue] = useState("")
    const [age, setage] = useState("");
    const [relation, setrelation] = useState("");
    const [addtodo, setaddtodo] = useState([]);
    const addtolist = () => {
        setaddtodo([...addtodo, nameValue, age, relation]);
        const url = "https://react-project-89f86-default-rtdb.firebaseio.com/people.json";
        const postdata = {
            Name: nameValue,
            Age: age,
            Relation: relation
        }
        axios.post(url, postdata);
        setnameValue("");
        setrelation("");
        setage("");

    }
    const displaytodo = () => {
        if (addtodo.length == 0) return null;
        const abc =
            <ol>
                {
                    addtodo.map((element, i) => {
                        return (
                            <div>
                                <li>{element}</li>
                            </div>

                        );
                    }
                    )

                }

            </ol>
            return abc;
    }
    return (
        <div className="container-div">
            <div className="type">
                <input placeholder="Type name here" value={nameValue}
                    onChange={(e) => {
                        setnameValue(e.target.value);
                    }}
                />
                <input placeholder="Type age here" value={age}
                    onChange={(e) => {
                        setage(e.target.value);
                    }}
                />
                <input placeholder="Type relation here" value={relation}
                    onChange={(e) => {
                        setrelation(e.target.value);
                    }}
                />
                <Button onClick={addtolist}>Add</Button>
            </div>
            <div className="display">
                {displaytodo()}
            </div>
        </div>


    );
}
export default People;
