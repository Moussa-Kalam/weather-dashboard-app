import { create } from "zustand";

interface Location {
  country: string;
  city: string;
  setLocation: (location: { name: string; country: string }) => void;
}

const useLocationStore = create<Location>()((set) => ({
  city: "Kigali",
  country: "Rwanda",
  setLocation: (location) =>
    set({ city: location.name, country: location.country }),
}));

export default useLocationStore;
