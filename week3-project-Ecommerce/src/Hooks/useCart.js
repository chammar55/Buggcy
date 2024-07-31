//  Custom hook for managing the user's shopping cart state using Zustand.
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      userdata: [],
      updateUserData: (item) =>
        set((state) => ({
          userdata: [...state.userdata, item],
        })),
      //   updateUserData: (userdata) => set({ userdata: userdata }),
    }),
    {
      name: "User-Cart-Store", // name of the item in the storage (must be unique)
      //   storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useCartStore;
