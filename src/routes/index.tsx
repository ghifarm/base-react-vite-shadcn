// routes/index.tsx
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Protected from './Protected';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';

// SPBU Pages
import Spbu from '../pages/Spbu';
import SpbuForm from '../pages/Spbu/Form';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'spbu',
        children: [
          { index: true, element: <Spbu /> },
          { path: 'form', element: <SpbuForm /> },
        ],
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '*', element: <Navigate to="/login" replace /> },
]);
