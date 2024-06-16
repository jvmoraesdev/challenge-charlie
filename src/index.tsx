import React from 'react';
import ReactDOM from 'react-dom/client'

import Home from './pages/home/index'

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);