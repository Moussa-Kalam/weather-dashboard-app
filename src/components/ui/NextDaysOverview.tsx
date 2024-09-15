import DayOverview from "./DayOverview.tsx";
import useWeatherData from "../../hooks/useWeatherData.ts";
import { useQueryStore } from "../../stores";

const NextDaysOverview = () => {
  const city = useQueryStore((state) => state.query);
  const { data: forecastData } = useWeatherData(city);

  const nextDaysInfo = forecastData?.forecast.forecastday
    .slice(1)
    .map((day) => ({
      date: day.date,
      temp: day.day.avgtemp_c,
      icon: day.day.condition.icon,
    }));
  return (
    <div className="flex flex-col md:flex-row gap-6 mx-auto">
      {nextDaysInfo?.map(({ date, icon, temp }) => (
        <DayOverview key={date} date={date} icon={icon} temperature={temp} />
      ))}
    </div>
  );
};

export default NextDaysOverview;
