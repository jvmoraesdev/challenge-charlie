import { IConfig } from '../interfaces/config.interface'

const config: IConfig = {
    APP_NAME: process.env.APP_NAME || 'Weather Forecast - DEV',
    NODE_ENV: process.env.NODE_ENV || 'development',
    BING_API: process.env.BING_API || 'https://www.bing.com/'
}

export default config;