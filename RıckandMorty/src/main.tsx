import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/homePage';
import RooterPage from './pages/rooter';
import LocationPage from './pages/locationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RooterPage />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"/location",
        element: <LocationPage />
      }
    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
