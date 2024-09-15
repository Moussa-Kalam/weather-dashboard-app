import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { apiKey, apiUrl } from "../utils/apiDetails.ts";

interface CityWeather {
  city: string;
  country: string;
  weather: string;
  icon: string;
}

const useCitiesData = () => {
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const locations = [
      { city: "Nairobi", country: "Kenya" },
      { city: "Cotonou", country: "Benin" },
      { city: "Bujumbura", country: "Burundi" },
      { city: "Kampala", country: "Uganda" },
    ];

    try {
      setIsLoading(true);
      const fetchCityWeather = async () => {
        const weatherDataPromises = locations.map(async ({ city, country }) => {
          const response = await axios.get(
            `${apiUrl}?q=${city}&key=${apiKey}`,
            { signal: controller.signal },
          );
          const data = response.data;
          return {
            city,
            country,
            weather: data.current.condition.text,
            icon: data.current.condition.icon,
          };
        });

        const citiesWeather = await Promise.all(weatherDataPromises);
        setCitiesWeather(citiesWeather);
      };

      fetchCityWeather();

      return () => controller.abort();
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { citiesWeather, isLoading, error };
};

export default useCitiesData;
