import { create } from "zustand";

import { CartStoreActionsType, CartStoreStateType } from "@/types";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>(
  (set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== product.id),
      })),
    clearCart: () => set({ cart: [] }),
  })
);

export default useCartStore;
