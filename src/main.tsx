import React from 'react';
import ReactDOM from 'react-dom/client';
import './presentation/styles/globals.css';
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
