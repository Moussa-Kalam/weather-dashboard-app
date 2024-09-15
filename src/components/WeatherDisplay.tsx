import { HumidityOverview, WeatherOverview } from "./ui";
import CitiesOverview from "./ui/CitiesOverview.tsx";

const WeatherDisplay = () => {
  return (
    <section className="w-[70%] mx-auto  space-y-24">
      <WeatherOverview />
      <section className="flex justify-between">
        <HumidityOverview />
        <CitiesOverview />
      </section>
    </section>
  );
};

export default WeatherDisplay;
