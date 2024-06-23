import { IConfig } from '../interfaces/config.interface'

const config: IConfig = {
    APP_NAME: process.env.APP_NAME || 'Weather Forecast - DEV',
    APP_API: process.env.APP_API || 'http://localhost:4200/api',
    NODE_ENV: process.env.NODE_ENV || 'development'
}

export default config;