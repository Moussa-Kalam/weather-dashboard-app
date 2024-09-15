import { HumidityOverview, WeatherOverview } from "./ui";
import CitiesOverview from "./ui/CitiesOverview.tsx";

const WeatherDisplay = () => {
  return (
    <section className="w-[80%] mx-auto space-y-16">
      <WeatherOverview />
      <section className="flex flex-wrap gap-6 justify-center items-center border">
        <HumidityOverview />
        <CitiesOverview />
      </section>
    </section>
  );
};

export default WeatherDisplay;
