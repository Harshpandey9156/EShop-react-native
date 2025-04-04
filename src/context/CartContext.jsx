import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  // ✅ Add to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Move items to Orders
  const moveToOrders = () => {
    setOrders((prevOrders) => [...prevOrders, ...cart]); // Move cart items to orders
    setCart([]); // Clear cart
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, wishlist, setWishlist, orders, moveToOrders }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
