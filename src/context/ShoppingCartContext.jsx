import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Productos en el carro", cart);
  }, [cart]);
  const addItem = (item, quantity) => {
    const selectedProductIndex = cart.findIndex((prod) => prod.id === item.id);
    if (selectedProductIndex !== -1) {
      const adjustedCart = [...cart];
      adjustedCart[selectedProductIndex].quantity += quantity;
      setCart(adjustedCart);
    } else {
      const priceValue = parseFloat(item.price);
      if (!isNaN(priceValue)) {
        setCart([...cart, { ...item, quantity, price: priceValue }]);
      }
    }
  };
  const removeItem = (itemId) => {
    const adjustedCart = cart.filter((prod) => prod.id !== itemId);
    setCart(adjustedCart);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    if (!isNaN(item.price) && !isNaN(item.quantity)) {
      return acc + item.price * item.quantity;
    }
    return acc;
  }, 0);

  const clearCart = () => {
    setCart ([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
