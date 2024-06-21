import { IConfig } from '../interfaces/config.interface'

const config: IConfig = {
    BING_API: process.env.BING_API || 'https://www.bing.com/',
    PORT: process.env.PORT || '4200',
    NODE_ENV: process.env.NODE_ENV || 'development',
    OPEN_WEATHER_API: process.env.OPEN_WEATHER_API || 'https://api.openweathermap.org/',
    OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY || '772920597e4ec8f00de8d376dfb3f094',
    OPEN_CAGE_API: process.env.OPEN_CAGE_API || 'https://api.opencagedata.com',
    OPEN_CAGE_API_KEY: process.env.OPEN_CAGE_API_KEY || 'c63386b4f77e46de817bdf94f552cddf'

}

export default config;