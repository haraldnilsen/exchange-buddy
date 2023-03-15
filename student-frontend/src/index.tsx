import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

reportWebVitals();
