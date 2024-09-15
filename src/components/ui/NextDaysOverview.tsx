import DayOverview from "./DayOverview.tsx";
import useQueryStore from "../../store/useQueryStore.ts";
import useWeatherData from "../../hooks/useWeatherData.ts";

const NextDaysOverview = () => {
  const city = useQueryStore((state) => state.city);
  const { data: forecastData } = useWeatherData(city);

  const nextDaysInfo = forecastData?.forecast.forecastday
    .slice(1)
    .map((day) => ({
      date: day.date,
      temp: day.day.avgtemp_c,
      icon: day.day.condition.icon,
    }));
  return (
    <div className="flex gap-x-10">
      {nextDaysInfo?.map(({ date, icon, temp }) => (
        <DayOverview key={date} date={date} icon={icon} temperature={temp} />
      ))}
    </div>
  );
};

export default NextDaysOverview;