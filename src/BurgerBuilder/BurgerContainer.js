import React from "react";
import Button from "../Button";
import { useState } from "react";
import "./BurgerContainer.css"
import axios from "axios";
import Burger from "./Burger/Burger";
import BuildControls from "./BuildControls/BuildControls";
import Modal from "../components/Modal/Modal";


function BurgerBuilder() {

    const showOrderSummary = () => {
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

    const postOrderData = () => {
        const url = "https://react-project-89f86-default-rtdb.firebaseio.com/BurgerBuilder/orders.json";
        const postData = {
            ingredients: ingredients,
            totalPrice: totalPrice
        }
        setshowModal(false);
        axios.post(url, postData)
            .then(() => {
                alert("Your order is successful");
            })
            .catch(() => {
                alert("Something went wrong!! Please try later.")
            });
    }
    const summaryModal = () => {
        return <Modal
            modalOpen={showModal}>
            <div>
                <h3>This is your order details:</h3>
                <p>The price of burger: <strong>₹{totalPrice}</strong></p>
                <p>A delicious order with following ingredients:</p>
                {showOrderSummary()}
                <p>Continue to Checkout ?</p>
                <div className="modal-cta">
                    <Button customClassName="modal-btn success" onClick={postOrderData}>Continue</Button>
                    <Button customClassName="modal-btn" onClick={() => { setshowModal(false); }}>Close</Button>
                </div>

            </div>

        </Modal>
    }

    const orderHistory = () => {
        return (
            <Modal
                modalOpen={orderHistoryModal}
                size="large">
                <div>
                    <h4>Order History:</h4>
                    
                </div>

            </Modal>

        );
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
    const [orderHistoryModal, setorderHistoryModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(30);

    const updateIngredients = (newIngredients) => {
        setingredients(newIngredients);
        setNewTotalPrice(newIngredients);
    }


    const setNewTotalPrice = (ingredients) => {
        let price = 30;
        for (let key in ingredients) {
            price = price + ingredients[key] * rate[key];
        }
        setTotalPrice(price);
    }

    const onOrderClick = () => {
        setshowModal(true);
    }

    const showOrderHistory = ()=>{
        // const url="https://react-project-89f86-default-rtdb.firebaseio.com/BurgerBuilder"
        const url="https://react-project-89f86-default-rtdb.firebaseio.com/BurgerBuilder/credentials";
        axios.get(url)
        .then(response=>{
            console.log(response.data,"hello");
        })
        .catch(err=>{
            alert("error");
        })
    }

    return (
        <div className="burger-container">
            {summaryModal()}
            {orderHistory()}
            <Burger ingredients={ingredients} />
            <BuildControls
                updateIngredients={updateIngredients}
                ingredients={ingredients}
                onOrderClick={onOrderClick}
                totalPrice={totalPrice}
                showOrderHistory={showOrderHistory}
            />
        </div>
    );


}

export default BurgerBuilder;