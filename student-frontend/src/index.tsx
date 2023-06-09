import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Faq from './pages/Faq';
import SearchRoom from './pages/SearchRoom';
import SearchUser from './pages/SearchUser';
import AboutUs from './pages/AboutUs';

import Register from './pages/Register';
import Profile from './pages/Profile';
import RegisterRoom from './pages/RegisterRoom';

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
    path:"/about",
    element: <AboutUs/>
  },
  {
    path:"/searchroom",
    element: <SearchRoom/>
  },
  {
    path:"/searchuser",
    element: <SearchUser/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/registerroom",
    element: <RegisterRoom/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

reportWebVitals();
