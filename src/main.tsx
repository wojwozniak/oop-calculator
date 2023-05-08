import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './calculator/Main';
import Head from './components/Head';
import Foot from './components/Foot';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Head />
    <Main />
    <Foot />
  </React.StrictMode>,
)
