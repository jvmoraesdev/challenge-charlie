import { IConfig } from '../interfaces/config.interface'

const config: IConfig = {
    APP_NAME: process.env.APP_NAME || 'Weather Forecast - DEV',
    BING_API: process.env.BING_API || 'https://www.bing.com/',
    APP_API: process.env.APP_API || 'http://localhost:4200/api'
}

export default config;