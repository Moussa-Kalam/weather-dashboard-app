import { HumidityIcon } from "../icons";
import { useWeatherData } from "../../hooks";
import {useQueryStore} from "../../store";

const HumidityOverview = () => {
  const city = useQueryStore((state) => state.city);
  const { data: weatherData, isLoading, error } = useWeatherData(city);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>There was an error while fetching the data</p>;

  return (
    <article className="flex flex-col gap-8  bg-[#1B1B1D]  w-[21.875rem] rounded-2xl p-6">
      <h2>Humidity</h2>
      <img
        src="/humidity.png"
        alt="humidity image"
        className="size-20 self-center"
      />
      <div className="flex justify-between">
        <p className="text-xl font-bold">{weatherData?.current.humidity}%</p>
        <p className="flex w-40 font-medium text-[#818085]">
          <span>
            <HumidityIcon />
          </span>{" "}
          <span>dew point is {weatherData?.current.dewpoint_c} right now</span>
        </p>
      </div>
    </article>
  );
};

export default HumidityOverview;