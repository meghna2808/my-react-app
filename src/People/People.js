import Button from "../Button";
import "./People.css";
import axios from "axios";
import { useState,useEffect} from "react";
 function people(){
     const [namevalue,setnamevalue]=useState("");
     const[age,setage]=useState("");
     const[relation,setrelation]=useState("");
     return(
         <div>
             <div>
                 <input placeholder="Type name here"></input>
                 <input placeholder="Type age here"></input>
                 <input placeholder="Type relation here"></input>
             </div>
         </div>


     );
 }
export default people;
