import CityItem from "./CityItem.tsx";
import { useCitiesData } from "../../hooks";

const CitiesOverview = () => {
  const { citiesWeather, isLoading, error } = useCitiesData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There is an error getting the data</p>;

  return (
    <section>
      <h2 className="text-center relative -top-10">Other cities</h2>
      <div className="grid grid-cols-2 gap-6">
        {citiesWeather.map(({ city, country, weather, icon }) => (
          <CityItem
            key={city}
            city={city}
            country={country}
            weather={weather}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default CitiesOverview;