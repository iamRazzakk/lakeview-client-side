import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup';
import AuthProvider from './components/Authprovider/AuthProvider';
import Home from './components/Home/Home';
import Apartment from './components/Apartment/Apartment';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },
      {
        path: 'apartment',
        element: <Apartment></Apartment>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-white'>
    <AuthProvider>
      <React.StrictMode>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </React.StrictMode>,
    </AuthProvider>
  </div>
)
