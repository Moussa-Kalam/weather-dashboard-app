interface Astro {
  sunrise: string;
  sunset: string;
}

interface Day {
  avgtemp_c: number;
  condition: {
    icon: string;
  };
}

interface Forecast {
  forecastday: {
    date: string;
    astro: Astro;
    day: Day;
  }[];
}

export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: string;
    humidity: string;
    dewpoint_c: number;
    feelslike_c: number;
    wind_kph: number;
    pressure_mb: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: Forecast;
}
