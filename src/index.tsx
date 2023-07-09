import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';

import { Provider as StoreProvider } from 'react-redux';

import store from './store/store';

import { msalConfig } from './api/auth/authConfig';

import router from './routings/routings';
import './index.scss';
import App from './App';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <StoreProvider store={store}>
    <MsalProvider instance={msalInstance}>
      <App />
      <RouterProvider router={router} />
    </MsalProvider>
  </StoreProvider>,
  // </React.StrictMode>
);
