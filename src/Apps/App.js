import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'pages/home';
import SearchPage from 'pages/search';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/search',
      element: <SearchPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
