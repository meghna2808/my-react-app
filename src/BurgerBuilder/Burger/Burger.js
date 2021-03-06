import Button from "../../Button";
import { useState } from "react";
import "./Burger.css"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
// import axios from "axios";

function Burger(props) {

    const showBurgerIngredients = () => {
        let arr = [];
        for (let key in props.ingredients) {
            for (let j = 0; j < props.ingredients[key]; j++) {
                arr.push(<BurgerIngredient key={key + j} type={key} />)
            }
        }
        return arr;
    }

    return (
        
        <div className="burger-container-div">
            <BurgerIngredient type="top-bread" />
            {showBurgerIngredients()}
            {showBurgerIngredients().length === 0 ? <h3>Please add some ingredients...</h3> : null}
            <BurgerIngredient type="bottom-bread" />
        </div>
    );
}

export default Burger;