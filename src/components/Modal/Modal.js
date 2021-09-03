import React from "react";
// import Button from "../Button";
// import { useState } from "react";
import "./Modal.css"
// // import axios from "axios";
// import Burger from "./Burger/Burger";
// import BuildControls from "./BuildControls/BuildControls";


function Modal(props) {
    return <div className="modal-container" style={{display: props.modalOpen ? "flex" : "none"}}>
        <div className="modal-inner">
            {props.children}
        </div>
    </div>
    
}

export default Modal;