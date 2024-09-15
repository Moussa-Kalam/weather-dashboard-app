import { FormEvent, useState } from "react";
import { SearchIcon } from "./icons";
import { Location } from "./ui";
import { useLocationStore, useQueryStore } from "../stores";

const SearchBar = () => {
  const [cityInput, setCityInput] = useState<string>("");
  const setQuery = useQueryStore((state) => state.setQuery);
  const country = useLocationStore((state) => state.country);
  const city = useLocationStore((state) => state.city);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set the city query
    setQuery(cityInput);

    // Reset the input filed after submitting the form
    setCityInput("");
  };

  return (
    <form
      className="flex flex-col gap-3  md:flex-row justify-between items-center w-[80%] mx-auto"
      onSubmit={handleSubmit}
    >
      <Location country={country} city={city} />
      <section className="flex items-center relative">
        <SearchIcon className="absolute left-2" />
        <input
          type="search"
          placeholder="Search City"
          className="bg-[#1E1E1E] px-12 py-4 md:w-[30.75rem] rounded-lg placeholder:text-sm placeholder:text-[#EDEDED]"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
      </section>
    </form>
  );
};

export default SearchBar;
