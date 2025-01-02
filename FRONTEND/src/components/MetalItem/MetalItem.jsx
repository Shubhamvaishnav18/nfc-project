import React, { useContext } from "react"
import "./MetalItem.css"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext";

const MetalItem = ({ id, name, price, image }) => {

    const { addToCart } = useContext(StoreContext);

    return (
        <div className="metal-item">
            <div className="metal-item-img-container">
                <img className="metal-item-image" src={image} alt="" />
            </div>
            <div className="metal-item-info">
                <p>{name}</p>
                <p className="metal-item-price">₹{price}</p>
                <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default MetalItem