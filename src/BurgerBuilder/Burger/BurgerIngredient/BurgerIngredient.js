import Button from "../../../Button";
import { useState } from "react";
import "./BurgerIngredient.css"
// import axios from "axios";

function BurgerIngredient(props) {
    let ingredient;
    switch (props.type) {
        case "top-bread":
            ingredient = <div className="top-bread"></div>;
            break;

        case "bottom-bread":
            ingredient = <div className="bottom-bread"></div>;
            break;

        case "meat":
            ingredient = <div className="meat"></div>;
            break;

        case "bacon":
            ingredient = <div className="bacon"></div>;
            break;

        case "salad":
            ingredient = <div className="salad"></div>;
            break;

        case "cheese":
            ingredient = <div className="cheese"></div>;
            break;
        default: break;
    }
    return ingredient;
}

export default BurgerIngredient;