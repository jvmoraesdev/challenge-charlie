import React from 'react';
import ReactDOM from 'react-dom/client'

import Home from './pages/Home'
import './styles/global.css'
import { BackgroundImageProvider } from './stores/HomeBackgroundProvider';

const root = ReactDOM.createRoot(document.querySelector('#root') as Element);

root.render(
    <React.StrictMode>
        <BackgroundImageProvider>
            <Home />
        </BackgroundImageProvider>
    </React.StrictMode>
);