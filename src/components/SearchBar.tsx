import { FormEvent, useState } from "react";
import { SearchIcon } from "./icons";
import { Location } from "./ui";
import { useLocationStore, useQueryStore } from "../store";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const setCity = useQueryStore((state) => state.setCity);
  const country = useLocationStore((state) => state.country);
  const city = useLocationStore((state) => state.city);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(query);
    setQuery("");
  };

  return (
    <form
      className="flex justify-between items-center w-[70%] mx-auto"
      onSubmit={handleSubmit}
    >
      <Location country={country} city={city} />
      <section className="flex items-center relative">
        <SearchIcon className="absolute left-2" />
        <input
          type="search"
          placeholder="Search City"
          className="bg-[#1E1E1E] px-12 py-4 w-[30.75rem] rounded-lg placeholder:text-sm placeholder:text-[#EDEDED]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>
    </form>
  );
};

export default SearchBar;
