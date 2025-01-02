import { createContext, useEffect, useState } from "react";
import { card_list } from "../assets/assets";
import { custom_card_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");

    //1 const addToCart = async (itemId) => {
    //     if (!cartItem[itemId]) {
    //         setCartItem((prev) => ({ ...prev, [itemId]: 1 }))
    //     }
    //     else {
    //         setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     }
    // }

    
    // const removeFromCart = async (itemId) => {
    //     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    // }

      const addToCart = async (itemId) => {
      
      const isCardListItem = card_list.some((product) => product._id === itemId);
      const isCustomCardListItem = custom_card_list.some((product) => product._id === itemId);
  
      if (isCardListItem) {
          
          if (!cartItem[itemId]) {
              setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
          } else {
              setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
          }
      } else if (isCustomCardListItem) {
        
        if (!cartItem[itemId]) {
          setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
          setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
      }
       else {
          console.error(`Item with ID ${itemId} not found in any list`);
      }
  };


  const removeFromCart = async (itemId) => {
    // Check if the item belongs to `card_list` or `custom_card_list`
    const isCardListItem = card_list.some((product) => product._id === itemId);
    const isCustomCardListItem = custom_card_list.some((product) => product._id === itemId);

    if (isCardListItem || isCustomCardListItem) {
        
      // setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
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
};

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const itemId in cartItem) {
    //       if (cartItem[itemId] > 0) {
    //         const itemInfo = card_list.find((product) => product._id === itemId); // Find the item
    //         if (itemInfo) {
    //           totalAmount += itemInfo.price * cartItem[itemId]; // Calculate total price
    //         }
    //       }
    //     }
    //     return totalAmount;
    //   };
    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const itemId in cartItem) {
          if (cartItem[itemId] > 0) {
              // Check if the item is in card_list
              const isCardListItem = card_list.some((product) => product._id === itemId);
              // Check if the item is in custom_card_list
              const isCustomCardListItem = custom_card_list.some((product) => product._id === itemId);
  
              if (isCardListItem) {
                  const itemInfo = card_list.find((product) => product._id === itemId);
                  if (itemInfo) {
                      totalAmount += itemInfo.price * cartItem[itemId]; // Calculate total price from card_list
                  }
              } else if (isCustomCardListItem) {
                  const itemInfo = custom_card_list.find((product) => product._id === itemId);
                  if (itemInfo) {
                      totalAmount += itemInfo.price * cartItem[itemId]; // Calculate total price from custom_card_list
                  }
              }
          }
      }
      return totalAmount;
  };
  
    

    const getTotalCartQuantity = () => {
        let totalQuantity = 0;
        for (const itemId in cartItem) {
          totalQuantity += cartItem[itemId];
        }
        return totalQuantity;
    };

    const contextValue = {
        card_list,
        url,
        token,
        setToken,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartQuantity,
        custom_card_list,
    }

    useEffect(() => {
        if(localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
        }
    },[]);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;