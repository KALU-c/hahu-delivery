import { create } from "zustand";
import { FoodListType } from "@/types/home";

export type CartItem = FoodListType & {
  quantity: number;
};

export type CartState = {
  cartItem: CartItem[];
  totalPrice: number;
  addToCart: (foodItem: FoodListType) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItem: [],
  totalPrice: 0,

  //ANCHOR - Add Item To Cart
  addToCart: (foodItem) => {
    const { cartItem } = get();
    const existingItem = cartItem.find(item => item.id === foodItem.id);

    if (existingItem) {
      set({
        cartItem: cartItem.map(item => (
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ))
      });
    } else {
      set({
        cartItem: [...cartItem, { ...foodItem, quantity: 1 }]
      });
    }

    set(state => ({
      totalPrice: state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    }))
  },

  //ANCHOR - Decrease quantity of an item
  decreaseItemQuantity: (id) => {
    const { cartItem } = get();
    const itemExist = cartItem.find(item => item.id === id);

    if (itemExist && itemExist.quantity !== 0) {
      set({
        cartItem: cartItem.map(item => (
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ))
      });

      set(state => ({
        totalPrice: state.cartItem.reduce(
          (total, item) => total + item.price * item.quantity, 0
        )
      }))
    }
  },
  //ANCHOR - Remove Item From Cart
  removeFromCart: (id) => {
    set(state => ({
      cartItem: state.cartItem.filter(item => item.id !== id)
    }));

    set(state => ({
      totalPrice: state.cartItem.reduce(
        (total, item) => total + item.price * item.quantity, 0
      )
    }))
  },

  //ANCHOR - Clear Cart
  clearCart: () => {
    set({
      cartItem: [], totalPrice: 0
    })
  }
}))