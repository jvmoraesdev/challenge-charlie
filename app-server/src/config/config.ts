import { IConfig } from '../interfaces/config.interface'

const config: IConfig = {
    BING_API: process.env.BING_API || 'https://www.bing.com/',
    PORT: process.env.PORT || '4200',
    NODE_ENV: process.env.NODE_ENV || 'development'
}

export default config;