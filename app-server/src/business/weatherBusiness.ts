import fetch from 'node-fetch';
import config from '../config/config';
import { IWeatherForecast } from '../interfaces/weatherForecast.interface';
import {
    convertAngleToCardinalDirections,
    convertKelvinToCelsius,
    convertMeterPerSecondToKilometerPerHour,
    convertKelvinToFahrenheit
} from '../utils/convertions'

class BackgroundBusiness {
    async getWeatherForecastForTodayAndNextTwoDays(cidade: string) {
        try {
            const response = await fetch(
                config.OPEN_WEATHER_API
                + '/data/2.5/forecast?q=' + cidade + '&appid=' + config.OPEN_WEATHER_API_KEY);
            const data = await response.json();


            if (data.cod !== '200') {
                throw new Error("City not found");
            }

            return this.filterWeatherForecast(data.list)
        } catch (error) {
            throw new Error('Failed to fetch weather forecast');
        }
    }

    filterWeatherForecast(list: any): IWeatherForecast {

        return {
            temperature: {
                fahrenheit: convertKelvinToFahrenheit(list[0].main.temp),
                celsius: convertKelvinToCelsius(list[0].main.temp)
            },
            humidity: list[0].main.humidity,
            pressure: list[0].main.pressure,
            weather: list[0].weather.main,
            windSpeed: convertMeterPerSecondToKilometerPerHour(list[0].wind.speed),
            windDirection: convertAngleToCardinalDirections(list[0].wind.deg),
            tomorowTemperature: {
                fahrenheit: convertKelvinToFahrenheit(list[1].main.temp),
                celsius: convertKelvinToCelsius(list[1].main.temp)
            },
            afterTomorrowTemperature: {
                fahrenheit: convertKelvinToFahrenheit(list[2].main.temp),
                celsius: convertKelvinToCelsius(list[2].main.temp)
            }
        }
    }
}

export default BackgroundBusiness;
