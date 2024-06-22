import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';
import { BackgroundImageProvider } from './stores/HomeBackgroundProvider';
import { LoadingProvider } from './stores/LoadingProvider';
import { LocationProvider } from './stores/LocationProvider';
import { WeatherForecastProvider } from './stores/WeatherForecastProvider';

import './locales/i18n';
import './styles/global.css';

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