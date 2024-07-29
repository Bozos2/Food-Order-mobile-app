import React, { createContext, useContext, useState, ReactNode } from "react";
import { Alert } from "react-native";

export interface CartItem {
  id: string;
  title: string | undefined;
  price: number | undefined;
  image?: any;
  ingredients?: string[];
  amount: number;
}

interface AppContextProps {
  price: any;
  setPrice: (price: number) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItemAmount: (id: string, amount: number) => void;
  tableNumber: string;
  setTableNumber: (number: string) => void;
  resetCustomCreation: () => void;
  setIngredients: (ingredients: string[]) => void;
  ingredients?: string[];
  resetCart: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext need to be used in AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [price, setPrice] = useState<number>(7.0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tableNumber, setTableNumber] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        const existingItem = prevCart[existingItemIndex];
        const newAmount = existingItem.amount + item.amount;
        if (newAmount > 5) {
          Alert.alert("Warning", "Maximum quantity of this item reached");
          return prevCart;
        }
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...existingItem,
          amount: newAmount,
        };
        Alert.alert("Success", "Item added to cart!");
        return updatedCart;
      } else {
        if (item.amount > 5) {
          Alert.alert("Warning", "Cannot add more than 5 of this item");
          return prevCart;
        }
        Alert.alert("Success", "Item added to cart!");
        return [...prevCart, item];
      }
    });
    resetCustomCreation();
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateCartItemAmount = (id: string, amount: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, amount } : item)));
  };

  const resetCustomCreation = () => {
    setPrice(7.0);
    setIngredients([]);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        price,
        setPrice,
        cart,
        addToCart,
        removeFromCart,
        updateCartItemAmount,
        tableNumber,
        setTableNumber,
        resetCustomCreation,
        setIngredients,
        ingredients,
        resetCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
