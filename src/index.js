import React from 'react';
import ReactDOM from 'react-dom/client';
import ActRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ActRoutes />,
    <GlobalStyles />
  </>
);
