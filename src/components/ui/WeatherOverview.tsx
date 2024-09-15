import TodayOverview from "./TodayOverview.tsx";
import NextDaysOverview from "./NextDaysOverview.tsx";
import { useState } from "react";

const WeatherOverview = () => {
  const [timeline, setTimeline] = useState({
    today: true,
    tomorrow: false,
    next6Days: false,
  });

  return (
    <section className="space-y-6">
      <div className="flex gap-6 text-[#818085]">
        <h1
          className={`cursor-pointer ${timeline.today && !timeline.next6Days ? "text-white" : ""}`}
          onClick={() =>
            setTimeline((currentTimeline) => ({
              ...currentTimeline,
              today: true,
              next6Days: false,
            }))
          }
        >
          Today
        </h1>
        <h1
          className={`cursor-pointer ${timeline.next6Days ? "text-white" : ""}`}
          onClick={() =>
            setTimeline((currentTimeline) => ({
              ...currentTimeline,
              next6Days: true,
            }))
          }
        >
          Next 6 days
        </h1>
      </div>

      <section className="flex flex-wrap gap-10 lg:gap-16">
        {timeline.today && <TodayOverview />}
        {timeline.next6Days && <NextDaysOverview />}
      </section>
    </section>
  );
};

export default WeatherOverview;
