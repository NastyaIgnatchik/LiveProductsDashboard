import { RouterProvider } from 'react-router';
import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import React from 'react'
import ErrorPage from './pages/ErrorPage';

const App = () => {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'product/:id', element: <AboutPage /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default App;
