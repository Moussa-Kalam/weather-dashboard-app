import { LocationIcon } from "../icons";

interface LocationProps {
  city: string;
  country: string;
}

const Location = ({ city = "Kigali", country = "Rwanda" }: LocationProps) => {
  return (
    <div className="flex gap-2 font-light shrink-0">
      <LocationIcon />
      <h2 className="text-[#FEFEFE]">
        {city}, {country}
      </h2>
    </div>
  );
};

export default Location;
