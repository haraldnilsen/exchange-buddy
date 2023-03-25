import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import RegisterOld from './pages/RegisterOld';
import Register from './pages/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const route = createBrowserRouter([
  {
    path:"/app",
    element: <RegisterOld />
  },
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/search",
    element: <Search/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

reportWebVitals();
