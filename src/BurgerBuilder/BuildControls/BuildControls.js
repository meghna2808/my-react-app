import Button from "../../Button";
import { useState } from "react";
import "./BuildControls.css"
// import axios from "axios";

function BuildControls(props) {
    // const ingredients=["Salad","Bacon","Cheese","Meat"];
    const increaseIngredient = (type) => {
        const newIngredients = {...props.ingredients};
        newIngredients[type]= newIngredients[type]+1;
        props.updateIngredients(newIngredients);
        
    }
    const decreaseIngredient = (type) => {
        const newIngredients = {...props.ingredients};
        newIngredients[type]= newIngredients[type]-1;
        props.updateIngredients(newIngredients);

    }

    const ingredientsControl = () => {
        return (
            <div className="ingredients-control-div">
                {
                    Object.keys(props.ingredients).map((element, i) => {
                        return (
                            <div className="element-div" key={i}>
                                <div className="control-label">{element}</div>
                                <Button onClick={() => { decreaseIngredient(element) }}>Less</Button>
                                <Button onClick={() => { increaseIngredient(element) }}>More</Button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    return (
        <div className="build-container-div">
            <div>
                <p>Current price of Burger=150</p>
                {ingredientsControl()}
                <Button>ORDER</Button>

            </div>

        </div>
    );


}

export default BuildControls;