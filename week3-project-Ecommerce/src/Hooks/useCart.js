import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      userdata: [],
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.userdata.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            return {
              userdata: state.userdata.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, quantity: cartItem.quantity + 1 }
                  : cartItem
              ),
            };
          }
          return {
            userdata: [...state.userdata, { ...item, quantity: 1 }],
          };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          userdata: state.userdata.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          userdata: state.userdata.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
    }),
    {
      name: "User-Cart-Store", // name of the item in the storage (must be unique)
    }
  )
);

export default useCartStore;
