import React, { useContext } from "react"
import "./CardItem.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext";

const CardItem = ({ id, name, price, image }) => {
    const { addToCart } = useContext(StoreContext);

    return (
        <div className="card-item">
            <div className="card-item-img-container">
                <img className="card-item-image" src={image} alt="" />
            </div>
            <div className="card-item-info">
                <p>{name}</p>
                <p className="card-item-price">₹{price}</p>
                <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default CardItem