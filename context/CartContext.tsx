import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  size: string;
  count: number;
};

type CartContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const defaultCartContext: CartContextType = {
  cartItems: [],
  totalPrice: 0,
  setCartItems: () => { },
  setTotalPrice: () => { }
};

const CartContext = createContext<CartContextType>(defaultCartContext);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;