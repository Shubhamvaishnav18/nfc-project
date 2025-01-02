import React, { useContext } from "react";
import "./CardDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import CardItem from "../CardItem/CardItem";
import MetalItem from "../MetalItem/MetalItem";

const CardDisplay = ({ category }) => {
    const { card_list } = useContext(StoreContext);

    const filteredCards = card_list.filter(item => item.category === category);

    return (
        <div className="card-display" id="card-display">
            <div className="card-display-list">
                {filteredCards.map((item, index) => {
                
                    return category === "Pvc card" ? (
                        <CardItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ) : (
                        <MetalItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CardDisplay;
