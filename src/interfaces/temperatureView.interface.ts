import { ITemperature } from "./api.interface";
import { TemperaturaScale } from "./types";

export interface ITemperatureViewProps {
    temperature: ITemperature;
    day: string;
    temperatureScale: TemperaturaScale;
}