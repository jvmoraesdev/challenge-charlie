export interface IWeatherForecast {
    temperture: ITemperature,
    weather: string,
    windSpeed: number,
    windDirection: string,
    humidity: number,
    pressure: number,
    tomorowTemperature: ITemperature
    afterTomorrowTemperature: ITemperature
}

interface ITemperature {
    celsius: number,
    fahrenheit: number
}