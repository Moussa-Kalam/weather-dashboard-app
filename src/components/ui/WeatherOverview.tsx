import TodayOverview from "./TodayOverview.tsx";
import NextDaysOverview from "./NextDaysOverview.tsx";

const WeatherOverview = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-2">
        <h1 className="cursor-pointer">Today</h1>
        <h1 className="cursor-pointer">Tomorrow</h1>
        <h1 className="cursor-pointer">Next 7 days</h1>
      </div>

      <section className="flex gap-x-10">
        <TodayOverview />
        <NextDaysOverview />
      </section>
    </section>
  );
};

export default WeatherOverview;
