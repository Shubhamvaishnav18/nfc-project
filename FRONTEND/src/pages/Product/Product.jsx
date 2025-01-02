import React from "react";
import { NavLink } from "react-router-dom";
import './Product.css';
import { card_list } from "../../assets/assets";

const Product = () => {
  // Filter cards by category
  const pvcCards = card_list.filter((card) => card.category === "Pvc card");
  const metalCards = card_list.filter((card) => card.category === "Metal card");
  const woodenCards = card_list.filter((card) => card.category === "Wooden card");
  const socialCards = card_list.filter((card) => card.category === "Social card");

  return (
    <div className="product-list">
      <h1>Our Products</h1>

      <div className="category-container">
        <h2>Social NFC Cards</h2>
        <div className="cards">
          {socialCards.map((card) => (
            
              <div className="card">
                <img src={card.image} alt={card.name} />
                <h2>{card.name}</h2>
                <p>₹{card.price}</p>
                <NavLink key={card._id} to={`/product/${card.name.toLowerCase().replace(/ /g, "-")}`}>
                <button>View Details</button>
                </NavLink>
              </div>
          ))}
        </div>
      </div>

      <div className="category-container">
        <h2>PVC NFC Cards</h2>
        <div className="cards">
          {pvcCards.map((card) => (
              <div className="card">
                <img src={card.image} alt={card.name} />
                <h2>{card.name}</h2>
                <p>₹{card.price}</p>
                <NavLink key={card._id} to={`/product/${card.name.toLowerCase().replace(/ /g, "-")}`}>
                <button>View Details</button>
                </NavLink>
              </div>
          ))}
        </div>
      </div>

      <div className="category-container">
        <h2>Metal NFC Cards</h2>
        <div className="cards">
          {metalCards.map((card) => (
              <div className="card">
                <img src={card.image} alt={card.name} />
                <h2>{card.name}</h2>
                <p>₹{card.price}</p>
                <NavLink key={card._id} to={`/product/${card.name.toLowerCase().replace(/ /g, "-")}`}>
                <button>View Details</button>
                </NavLink>
              </div>
          ))}
        </div>
      </div>

      <div className="category-container">
        <h2>Wooden NFC Cards</h2>
        <div className="cards">
          {woodenCards.map((card) => (
              <div className="card">
                <img src={card.image} alt={card.name} />
                <h2>{card.name}</h2>
                <p>₹{card.price}</p>
                <NavLink key={card._id} to={`/product/${card.name.toLowerCase().replace(/ /g, "-")}`}>
                <button>View Details</button>
                </NavLink>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
