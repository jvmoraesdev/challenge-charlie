import React from 'react';
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './styles/global.css'
import { BackgroundImageProvider } from './stores/HomeBackgroundProvider';
import { WeatherForecastProvider } from './stores/WeatherForecastProvider';
import { LocationProvider } from './stores/LocationProvider';
import { LoadingProvider } from './stores/LoadingProvider';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
    <React.StrictMode>
        <LoadingProvider>
            <LocationProvider>
                <WeatherForecastProvider>
                    <BackgroundImageProvider>
                        <Home />
                    </BackgroundImageProvider>
                </WeatherForecastProvider>
            </LocationProvider>
        </LoadingProvider>
    </React.StrictMode>
);