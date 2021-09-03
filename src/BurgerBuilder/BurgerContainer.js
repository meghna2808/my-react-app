import React from "react";
import Button from "../Button";
import { useState } from "react";
import "./BurgerContainer.css"
// import axios from "axios";
import Burger from "./Burger/Burger";
import BuildControls from "./BuildControls/BuildControls";
import Modal from "../components/Modal/Modal";


function BurgerBuilder() {
    const showOrderDetails = () => {
        const abc =
            <ul>
                {
                    Object.keys(ingredients).map((element, i) => {
                        return (
                            <li>{element} : {ingredients[element]}</li>
                        );
                    })
                }
            </ul>;
        return abc;
    }
    const summaryModal = () => {
        return <Modal
            modalOpen={showModal}>
            <div>
                <h3>This is your order details:</h3>
                <p>The price of burger: <strong>₹{totalPrice}</strong></p>
                <p>A delicious order with following ingredients:</p>
                {showOrderDetails()}
                <p>Continue to Checkout ?</p>
                <div className="modal-cta">
                    <Button customClassName="modal-btn success" onClick={() => { setshowModal(false); }}>Continue</Button>
                    <Button customClassName="modal-btn" onClick={() => { setshowModal(false); }}>Close</Button>
                </div>

            </div>

        </Modal>
    }
    const initialIngredients = {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    }

    const rate = {
        salad: 10,
        bacon: 50,
        cheese: 10,
        meat: 40
    }
    const [ingredients, setingredients] = useState(initialIngredients);
    const [showModal, setshowModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(30);

    const updateIngredients = (newIngredients) => {
        setingredients(newIngredients);
        setNewTotalPrice(newIngredients);
    }

    const setNewTotalPrice = (ingredients) =>{
        let price = 30;
        for(let key in ingredients){
            price = price + ingredients[key]*rate[key];
        }
        setTotalPrice(price);
    }

    const onOrderClick = () => {
        setshowModal(true);
    }

    return (
        <div className="burger-container">
            {summaryModal()}
            <Burger ingredients={ingredients} />
            <BuildControls
                updateIngredients={updateIngredients}
                ingredients={ingredients}
                onOrderClick={onOrderClick}
                totalPrice={totalPrice}
            />
        </div>
    );


}

export default BurgerBuilder;