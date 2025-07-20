import { createContext, useEffect, useState } from "react";
import { card_list } from "../assets/assets";
import { custom_card_list } from "../assets/assets";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItem, setCartItem] = useState({}); //for all products
  const [cartItems, setCartItems] = useState([]); //for custom card
  const [cardDetails, setCardDetails] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  //  for custom card design
  const addItemToCart = async (item) => {
    if (!item) {
      console.error("Item is invalid");
      return;
    }

    const existingItemIndex = cartItems.findIndex(cartItem => cartItem._id === item._id);

    if (existingItemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
      if (token) {
        try {
          await axios.post(url + "/api/user/addCustomCard", updatedItems[existingItemIndex], { headers: { token } });
        } catch (error) {
          console.error("Error saving card to database:", error);
          updatedItems[existingItemIndex].quantity -= 1;
          setCartItems(updatedItems);
          throw error;
        }
      }
    } else {
      const newItem = { ...item, _id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}` };
      setCartItems(prev => [...prev, newItem]);
      if (token) {
        try {
          await axios.post(url + "/api/user/addCustomCard", newItem, { headers: { token } });
        } catch (error) {
          console.error("Error saving card to database:", error);
          setCartItems(prev => prev.filter(cartItem => cartItem._id !== newItem._id));
          throw error;
        }
      }
    }
  };

  //for all products
  const addToCart = async (itemId, details = null) => {

    const isCardListItem = card_list.some((product) => product._id === itemId);

    if (isCardListItem) {

      if (!cartItem[itemId]) {
        setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }

      if (details) {
        setCardDetails((prev) => ({
          ...prev,
          [itemId]: details
        }));
      }
    }

    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
  };

  //for custum card design 
  const removeFromCart1 = async (item) => {
    setCartItems((prev) =>
      prev
        .map((cartItem) =>
          cartItem._id === item._id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );

    if (token) {
      await axios.post(url + "/api/cart/removecustomcard", { itemId: item._id }, { headers: { token } });
    }
  };

  //for all products
  const removeFromCart = async (itemId) => {
    const isCardListItem = card_list.some((product) => product._id === itemId);

    if (isCardListItem) {

      if (cartItem[itemId] > 1) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      } else {
        const updatedCart = { ...cartItem };
        delete updatedCart[itemId];
        setCartItem(updatedCart);
      }
    } else {
      console.error(`Item with ID ${itemId} not found in any list`);
    }

    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        const itemInfo = card_list.find((product) => product._id === itemId);

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[itemId];
        }
      }
    }

    totalAmount += cartItems.reduce((total, cartItem) => {
      if (cartItem && cartItem.price && cartItem.quantity > 0) {
        return total + cartItem.price * cartItem.quantity;
      }
      return total;
    }, 0);

    return totalAmount;
  };


  const getTotalCartQuantity = () => {
    const cardListQuantity = Object.values(cartItem).reduce((total, quantity) => total + quantity, 0);

    const customCardQuantity = cartItems.reduce((total, item) => {
      return total + (item && typeof item.quantity === 'number' ? item.quantity : 0);
    }, 0);

    return cardListQuantity + customCardQuantity;
  };


  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItem(response.data.cartData);
  }

  const loadCustomCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/getcustomcard", {}, { headers: { token } });
    const seen = new Set();
    const filtered = (response.data.customCartData || []).filter(item => {
      if (!item || !item._id || seen.has(item._id)) return false;
      seen.add(item._id);
      return true;
    });
    setCartItems(filtered);
  };

  useEffect(() => {
    async function loadData() {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
        await loadCustomCartData(storedToken);
      }
    }
    loadData();
  }, []);


  const contextValue = {
    card_list,
    url,
    token,
    setToken,
    cartItem,
    setCartItem,
    cardDetails,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartQuantity,
    custom_card_list,
    cartItems,
    setCartItems,
    addItemToCart,
    removeFromCart1,
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;