import axios from "axios";
import config from "../config/config";

const instance = axios.create({
    baseURL: config.APP_API,
    headers: {
        "Content-Type": "application/json"
    }
})

export default {
    getWeatherForecast: (city: string) => new Promise((resolve, reject) => {
        instance.get('/weather?city=' + city)
            .then(response => {
                if (response.status !== 200) {
                    reject(new Error('Unable to get weather forecast from server'))
                }
                resolve(response.data)
            })
            .catch(error => {
                console.error('getWeatherForecast error ', error)
                reject(error)
            })
    })
}