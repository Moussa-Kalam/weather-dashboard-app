import useFetchData from "./useFetchData.ts";
import { apiKey, apiUrl } from "../utils/apiDetails.ts";
import { WeatherData } from "../utils/weatherTypes.ts";

const useWeatherData = (city: string) => {
  const { data, isLoading, error } = useFetchData<WeatherData>(
    `${apiUrl}?q=${city}&days=7&key=${apiKey}`,
  );

  return { data, isLoading, error };
};

export default useWeatherData;
