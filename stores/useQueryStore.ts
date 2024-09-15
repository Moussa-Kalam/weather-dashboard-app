import { create } from "zustand";

interface Query {
  city: string;
  setCity: (city: string) => void;
}

const useQueryStore = create<Query>()((set) => ({
  city: "Kigali",
  setCity: (city) => set({ city }),
}));

export default useQueryStore;
