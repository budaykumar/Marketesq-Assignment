import { Component } from "react";

import ReactPopUp from "../ReactPopup";

import "./index.css"

class Cart extends  Component {

    render() {
        return (
            <div className="cartOuterCon">
                <div className="cartMainContainer">
                <div className="chekoutContainer">
                    <h2>TOTAL: $2000 </h2>
                   <ReactPopUp/>
                </div>
                <div className="cartItemsContainer">
                   <div className="cartItemsDescription">
                    <h3>QUESTION TITLE</h3>
                    <p>MODULE:   NAME OF MODULE</p>
                    <p>DATE:     10/04/2021</p>
                    </div> 
                    <div className="cartButtonsCon">
                            <button className="deleteButton">1</button>
                            <button className="deleteButton">DELETE</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Cart;    