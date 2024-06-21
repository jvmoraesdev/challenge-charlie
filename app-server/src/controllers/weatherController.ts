import { Request, Response } from 'express';
import WeatherBusiness from '../business/weatherBusiness';

class WeatherController {
    private weatherBusiness: WeatherBusiness;

    constructor() {
        this.weatherBusiness = new WeatherBusiness();
    }

    getWeather = async (req: Request, res: Response) => {
        try {
            const city = req.query.city as string

            if (!city) {
                return res.status(400).json({
                    success: false,
                    message: 'Parameter city is required'
                });
            }

            const weatherData = await this.weatherBusiness.getWeatherForecastForTodayAndNextTwoDays(city);
            res.json({
                success: true,
                message: 'Weather data fetched',
                data: weatherData
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error fetching weather data');
        }
    }
}

export default WeatherController;
