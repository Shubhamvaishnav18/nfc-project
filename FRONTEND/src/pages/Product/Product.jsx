import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Product.css';
import { card_list } from "../../assets/assets";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = [...new Set(card_list.map(card => card.category))];

  const filteredCards =
    selectedCategory === "All"
      ? card_list
      : card_list.filter((card) => card.category === selectedCategory);

  return (
    <div className="product-list">
      <div className="product-header">
        <h1>Our Products</h1>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="cards">
        {filteredCards.map((card) => (
          <div className="card" key={card._id}>
            <img src={card.image} alt={card.name} />
            <h2>{card.name}</h2>
            <p>₹{card.price}</p>
            <NavLink to={`/product/${card.name.toLowerCase().replace(/ /g, "-")}`}>
              <button>View Details</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
