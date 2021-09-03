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


    console.log("hii",props.ingredients);
    return (
        
        <div className="burger-container-div">
            <BurgerIngredient type="top-bread" />
            {showBurgerIngredients()}
            <BurgerIngredient type="bottom-bread" />
        </div>
    );
}

export default Burger;