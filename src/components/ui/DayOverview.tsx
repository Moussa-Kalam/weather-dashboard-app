import getDayAndTime from "../../utils/getDayAndTime.ts";

interface DayOverViewProps {
  date: string;
  icon: string;
  temperature: number;
}

const DayOverview = ({ date, icon, temperature }: DayOverViewProps) => {
  const day = getDayAndTime(date).shortDay.toUpperCase();
  return (
    <article className="rounded-3xl w-28 flex flex-col items-center gap-12 bg-[#1B1B1D] h-full pt-5 pb-10 px-2">
      <h2 className="font-semibold text-[#E5E5E5] text-center border-b border-[#39393A] w-full pb-4">
        {day}
      </h2>
      <img src={icon} alt="weather image" className="size-16 " />
      <p className="text-[#FDFDFD] text-3xl font-semibold">{temperature} C</p>
    </article>
  );
};

export default DayOverview;