import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '@/pages/Login/Login';
import { SignUp } from '@/pages/SignUp/SignUp';

export const router = createBrowserRouter([
  // @TODO - replace redirect by the main component
  {
    index: true,
    element: <Navigate to={'/login'} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
