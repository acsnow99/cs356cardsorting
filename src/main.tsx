import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.tsx';

const appElement = document.getElementById('app');
if (appElement !== null) {
    const app = ReactDOM.createRoot(appElement);
    app.render(<App/>);
}

