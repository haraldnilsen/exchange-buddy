import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Faq from './pages/Faq';
import RegisterOld from './Test/RegisterOld';
import SearchRoom from './pages/SearchRoom';
import SearchUser from './pages/SearchUser';

import Register from './pages/Register';

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
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/faq",
    element: <Faq />
  },
  {
    path:"/search",
    element: <SearchRoom/>
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

reportWebVitals();
