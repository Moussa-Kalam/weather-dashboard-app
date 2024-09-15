import useWeatherData from "../../hooks/useWeatherData.ts";
import getDayAndTime from "../../utils/getDayAndTime.ts";
import { useLocationStore, useQueryStore } from "../../stores";

const TodayOverview = () => {
  const city = useQueryStore((state) => state.query);
  const { data: weatherData, isLoading, error } = useWeatherData(city);
  const setLocation = useLocationStore((state) => state.setLocation);

  if (weatherData) setLocation(weatherData.location);

  const { longDay, time } = getDayAndTime(
    weatherData?.location.localtime as string,
  );

  if (isLoading) return <p>Loading...</p>;

  if (!isLoading && error) return <p>There is an error getting the data</p>;

  return (
    <article className="border rounded-3xl space-y-4 w-[21.875rem] mx-auto lg:w-fit bg-[#BBD7EC] text-black ">
      <section className="flex justify-between p-5 font-bold bg-[#AECADF] rounded-t-3xl">
        <h2>{longDay}</h2>
        <p>{time}</p>
      </section>
      <section className="flex p-5 gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl mb-4 font-bold">
            {weatherData?.current.temp_c}°
          </h1>
          <p>
            Real Feel:{" "}
            <span className="font-bold">
              {weatherData?.current.feelslike_c}°C
            </span>
          </p>
          <p>
            Wind N-E:{" "}
            <span className="font-bold">
              {weatherData?.current.wind_kph}km/h
            </span>
          </p>
          <p>
            Pressure:{" "}
            <span className="font-bold">
              {weatherData?.current.pressure_mb}MB
            </span>
          </p>
          <p>
            Humidity{" "}
            <span className="font-bold">{weatherData?.current.humidity}%</span>
          </p>
        </div>
        <div className="space-y-2 ">
          <img
            src={weatherData?.current.condition.icon}
            alt="Sunrise icon"
            className="w-20 h-16 translate-x-10 mb-8"
          />
          <p>
            Sunrise{" "}
            <span className="font-bold">
              {weatherData?.forecast.forecastday[0].astro.sunrise}
            </span>
          </p>
          <p>
            Sunset{" "}
            <span className="font-bold">
              {weatherData?.forecast.forecastday[0].astro.sunset}
            </span>
          </p>
        </div>
      </section>
    </article>
  );
};

export default TodayOverview;
