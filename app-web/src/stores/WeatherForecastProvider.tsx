import React, { createContext, useContext, useEffect, useState } from 'react';
import backgroundApi from '../api/backgroundApi';
import { IWeatherForecastContextType } from '../interfaces/context.interface';
import config from '../config/config';
import { IChildrenProps } from '../interfaces/childrenProps.interface';
import weatherForecastApi from '../api/weatherForecastApi';
import { ITemperature, IWeatherForecast } from '../interfaces/weatherForecast.interface';
import { ColorTheme } from '../interfaces/types';


const WeatherForecastContext = createContext<IWeatherForecastContextType | undefined>(undefined);

export const useWeatherForecastContext = () => {
    const context = useContext(WeatherForecastContext);
    if (!context) {
        throw new Error('useWeatherForecastContext is required');
    }
    return context;
};

export const WeatherForecastProvider: React.FC<IChildrenProps> = ({ children }) => {

    const [temperature, setTemperature] = useState<ITemperature | undefined>();
    const [weather, setWeather] = useState<string | undefined>();
    const [windSpeed, setWindSpeed] = useState<number | undefined>();
    const [windDirection, setWindDirection] = useState<string | undefined>();
    const [humidity, setHumidity] = useState<number | undefined>();
    const [pressure, setPressure] = useState<number | undefined>();
    const [tomorowTemperature, setTomorowTemperature] = useState<ITemperature | undefined>();
    const [afterTomorrowTemperature, setAfterTomorrowTemperature] = useState<ITemperature | undefined>();
    const [colorTheme, setColorTheme] = useState<ColorTheme>('gray');

    const fetchWeatherForecast = async (city: string) => {
        await weatherForecastApi.getWeatherForecast(city)
            .then((data: any) => {
                if (!data || !data.success) {
                    console.error('No weather forecast data received from server');
                    return;
                }
                const weatherForecast: IWeatherForecast = data.data;

                setColorTheme(getColorTheme(weatherForecast.temperature?.celsius))
                setTemperature(weatherForecast.temperature)
                setWeather(weatherForecast.weather)
                setWindSpeed(weatherForecast.windSpeed)
                setWindDirection(weatherForecast.windDirection)
                setHumidity(weatherForecast.humidity)
                setPressure(weatherForecast.pressure)
                setTomorowTemperature(weatherForecast.tomorowTemperature)
                setAfterTomorrowTemperature(weatherForecast.afterTomorrowTemperature)
            })
            .catch((error: Error) => {
                console.error('Error getting weather forecast:', error);
            });
    };

    function getColorTheme(temperature?: number): ColorTheme {
        console.log(temperature)
        if (!temperature) {
            return 'gray'
        }

        if (temperature < 15) {
            return 'blue'
        } else if (temperature > 35) {
            return 'red'
        } else {
            return 'yellow'
        }
    }

    const contextValue: IWeatherForecastContextType = {
        temperature,
        weather,
        windSpeed,
        windDirection,
        humidity,
        pressure,
        tomorowTemperature,
        afterTomorrowTemperature,
        colorTheme,
        fetchWeatherForecast
    };

    return (
        <WeatherForecastContext.Provider value={contextValue}>
            {children}
        </WeatherForecastContext.Provider>
    );
};
