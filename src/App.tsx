import { SearchBar, WeatherDisplay } from "./components";

const App = () => {
  return (
    <main className="min-h-screen text-white py-8 bg-background-black space-y-6 max-w-screen-2xl mx-auto border border-gray-700/20">
      <SearchBar />
      <WeatherDisplay />
    </main>
  );
};

export default App;
