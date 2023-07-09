import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// okoajo10@gmail.com
import Home from '../pages/Home';
import ErrorPage from '../pages/Error/ErrorPage';
import Registration from '../pages/Registration/Registration';
// import Dashboard from '../pages/Dashboard/Dashboard';
// import Auth from '../pages/Auth/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: 'auth',
  //   element: <Auth />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: 'signUp',
    element: <Registration type="signUp" />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: 'logIn',
  //   element: <Registration type="logIn" />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'createAccount',
  //   element: <Registration type="createAccount" />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'invitation',
  //   element: <Registration type="invitation" />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'clubInfo',
  //   element: <Registration type="clubInfo" />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: 'dashboard',
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: '*',
  //       element: <Dashboard />,
  //       errorElement: <ErrorPage />,
  //     },
  //   ],
  //   errorElement: <ErrorPage />,
  // },
  {
    path: 'discover',
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
