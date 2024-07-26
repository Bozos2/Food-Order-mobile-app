import React, { createContext, useContext, useState, ReactNode } from "react";

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
  tableNumber: string;
  setTableNumber: (number: string) => void;
  resetCustomCreation: () => void;
  setIngredients: (ingredients: string[]) => void;
  ingredients?: string[];
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
    setCart([...cart, item]);
    resetCustomCreation();
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const resetCustomCreation = () => {
    setPrice(7.0);
    setIngredients([]);
  };

  return (
    <AppContext.Provider
      value={{
        price,
        setPrice,
        cart,
        addToCart,
        removeFromCart,
        tableNumber,
        setTableNumber,
        resetCustomCreation,
        setIngredients,
        ingredients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
