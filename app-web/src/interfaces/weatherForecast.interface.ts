export interface IWeatherForecast {
    temperature?: ITemperature,
    weather?: string,
    windSpeed?: number,
    windDirection?: string,
    humidity?: number,
    pressure?: number,
    tomorowTemperature?: ITemperature
    afterTomorrowTemperature?: ITemperature
}

export interface ITemperature {
    celsius: number,
    fahrenheit: number
}