interface CityItemProps {
  city: string;
  country: string;
  weather: string;
  icon: string;
}

const CityItem = ({ city, country, weather, icon }: CityItemProps) => {
  return (
    <article className="bg-[#1B1B1D] w-full md:w-80 flex items-center justify-between rounded-2xl p-4 mx-auto">
      <div className="space-y-2">
        <h2 className="text-sm text-[#777777]">{country}</h2>
        <p className="text-xl">{city}</p>
        <p className="text-sm text-[#EFEFEF]">{weather}</p>
      </div>
      <div>
        <img src={icon} alt="weather logo" className="size-20 md:size-14" />
      </div>
    </article>
  );
};

export default CityItem;
