import React from 'react';
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './styles/global.css'
import { BackgroundImageProvider } from './stores/HomeBackgroundProvider';
import { WeatherForecastProvider } from './stores/WeatherForecastProvider';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
    <React.StrictMode>
        <WeatherForecastProvider>
            <BackgroundImageProvider>
                <Home />
            </BackgroundImageProvider>
        </WeatherForecastProvider>
    </React.StrictMode>
);