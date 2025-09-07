import { create } from "zustand";

export const useCartStore = create((set) => ({
  inShoppingCart: [],
  cartModal: false,

  setInShoppingCart: (updater) => {
    set((state) => ({
      inShoppingCart:
        typeof updater === "function" ? updater(state.inShoppingCart) : updater,
    }));
  },

  setCartModal: (updater) => {
    set((state) => ({
      cartModal:
        typeof updater === "function" ? updater(state.cartModal) : updater,
    }));
  },
}));
