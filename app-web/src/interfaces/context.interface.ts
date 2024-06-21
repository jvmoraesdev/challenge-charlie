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
