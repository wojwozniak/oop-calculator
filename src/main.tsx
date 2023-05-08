import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './calculator/App';
import Head from './components/Head';
import Foot from './components/Foot';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Head />
    <App />
    <Foot />
  </React.StrictMode>,
)
