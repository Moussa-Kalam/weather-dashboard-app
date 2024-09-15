import { create } from "zustand";

interface Query {
  query: string;
  setQuery: (city: string) => void;
}

const useQueryStore = create<Query>()((set) => ({
  query: "Kigali",
  setQuery: (query) => set({ query }),
}));

export default useQueryStore;
