import Button from "../Button";
import { useState } from "react";
import "./BurgerContainer.css"
// import axios from "axios";
import Burger from "./Burger/Burger";
import BuildControls from "./BuildControls/BuildControls";

function BurgerBuilder() {
    // const initialIngredients = [
    //     {salad:0},
    //     {bacon:0},
    //     {cheese:0},
    //     {meat:0}
    // ]
    const initialIngredients = {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    }
    const [ingredients,setingredients]=useState(initialIngredients);
    const updateIngredients=(newIngredients)=>{
        setingredients(newIngredients);
        console.log("hello",ingredients);
    }
    return(
        <div className="burger-container">
            <Burger ingredients={ingredients}/>
            <BuildControls 
                updateIngredients={updateIngredients}
                ingredients={ingredients}
            />
        </div>
    );

    
}

export default BurgerBuilder;