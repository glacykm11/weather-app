export interface WeatherInfo {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherInitialInfo {
  description: string;
  temperature: number;
  city: string;
  icon: string;
}

export interface OtherWeatherInfo {
  title: string;
  value: string;
  icon: string;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Coord {
  lon: number;
  lat: number;
}
