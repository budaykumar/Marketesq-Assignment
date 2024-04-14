import {Component} from "react";

import "./index.css"

class Products extends Component {
    render(){
        const {eachproduct} = this.props;
        const {productName, productDescription, priceInRupees} = eachproduct
        return(
            <div className="productMainContainer">
                <div className="productImg">
                </div>
                <div className="productDescriptionCon">
                    <h2>{productName}</h2>
                    <p>{productDescription}</p>
                    <p>${priceInRupees}</p>
                    <button className="cartButton">Add to Cart</button>
                </div>
            </div>
        )
    }
}

export default Products