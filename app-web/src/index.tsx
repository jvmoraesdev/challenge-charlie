import React from 'react';
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './styles/global.css'
import { BackgroundImageProvider } from './stores/HomeBackgroundProvider';
import { WeatherForecastProvider } from './stores/WeatherForecastProvider';
import { LocationProvider } from './stores/LocationProvider';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
    <React.StrictMode>
        <LocationProvider>
            <WeatherForecastProvider>
                <BackgroundImageProvider>
                    <Home />
                </BackgroundImageProvider>
            </WeatherForecastProvider>
        </LocationProvider>
    </React.StrictMode>
);