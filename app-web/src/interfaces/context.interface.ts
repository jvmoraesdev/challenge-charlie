import { ColorTheme } from "./types";
import { IWeatherForecast } from "./weatherForecast.interface";

export interface IBackgroundImageContextType {
    backgroundImage: string;
    fetchBackgroundImage: () => void;
}

export interface IWeatherForecastContextType extends IWeatherForecast {
    fetchWeatherForecast: (city: string) => void;
    colorTheme: ColorTheme;
}

export interface ILocationContextType {
    city: string,
    fetchLocation: (latitude: string, longitude: string) => void
}

export interface ILoadingContextType {
    loading: boolean,
    setLoading: (isLoading: boolean) => void
}