export interface WeatherForecast {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily_units: DailyUnits;
    daily: Daily;
}

export interface TodayForecast {
    time: string,
    temperature: number
}

export interface Daily {
    time: string[];
    uv_index_max: number[];
}

export interface DailyUnits {
    time: string;
    uv_index_max: string;
}

export interface Hourly {
    time: string[];
    temperature_2m: number[];
    windspeed_10m: number[];
}

export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    windspeed_10m: string;
}