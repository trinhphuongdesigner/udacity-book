import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from 'pages/Home';
import SearchPage from 'pages/Search';

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
