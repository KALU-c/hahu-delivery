import { FoodListType } from "@/types/home";
import { create } from "zustand";

type GlobalState = {
  name: string;
  bio?: string;
  id: string | number;
  favorite: FoodListType[];
  addToFavorite: (foodItem: FoodListType) => void;
  removeFromFavorite: (foodId: number) => void;
  clearFavorite: () => void;
}

export const useGlobalStore = create<GlobalState>((set, get) => ({
  name: "",
  bio: "",
  id: "",
  favorite: [],

  // add items to favorite
  addToFavorite: (foodItem) => {
    const { favorite } = get();
    const existingItem = favorite.find(item => item.id === foodItem.id);

    if (existingItem) {
      // unhandled event
      console.log("Item Already in favorite list");
    } else {
      set({
        favorite: [...favorite, foodItem]
      });
    }
  },

  // remove item from favorite
  removeFromFavorite: (foodId) => {
    const { favorite } = get();
    const existingItem = favorite.find(item => item.id === foodId);

    if (existingItem) {
      set({
        favorite: favorite.filter(item => item.id !== foodId)
      })
    } else {
      // unhandled event
      console.log("WHAT??????")
    }
  },

  // remove all items from favorite
  clearFavorite: () => {
    set({
      favorite: []
    })
  }
}))