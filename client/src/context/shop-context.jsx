import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = async () => {
  const response = await fetch("/api/products/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const cartItems = await response.json();
  const cart = {};
  for (const item of cartItems) {
    cart[item._id] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedProducts, setAddedProducts] = useState(false);
  const [checkOutProducts, setCheckOutProducts] = useState([]);
  const discountedPrice = (mainPrice, discount) => {
    return mainPrice - (mainPrice * discount) / 100;
  };

  useEffect(() => {
    getDefaultCart().then((defaultCart) => {
      setCartItems(defaultCart);
    });
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await fetch("/api/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setProducts(data);
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product._id === item);
        totalAmount +=
          cartItems[item] * discountedPrice(itemInfo.price, itemInfo.discount);
      }
    }
    return totalAmount;
  };

  const addToCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setAddedProducts(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };
  const clearCart = () => {
    setCartItems({});
  };
  const updateCartItemAmount = (amount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: amount }));
  };
  const getUser = async (email) => {
    const response = await fetch(`/api/users/find/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  const getUsers = async (email) => {
    const response = await fetch(`/api/users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  const [finalProducts, setFinalProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const initialObject = cartItems;
      // console.log(initialObject);
      const resultArray = Object.keys(initialObject).map((key) => {
        const productId = key;
        const amount = initialObject[key];
        return { productId, amount };
      });
      const filteredArray = resultArray.filter((item) => item.amount > 0);
      setFinalProducts(filteredArray);
    })();
  }, [cartItems]);

  // Use finalProducts elsewhere in your component
  useEffect(() => {
    // console.log(finalProducts);
  }, [finalProducts]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    getTotalCartAmount,
    getUser,
    addedProducts,
    getUsers,
    setAddedProducts,
    finalProducts,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
