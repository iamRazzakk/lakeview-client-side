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
import LocationOnMap from './components/Home/LocationOnMap';
import Error from './components/Error/Error';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile';
import Announcements from './components/Dashboard/Announcements';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Agrement from './components/Apartment/Agrement';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
      },
      {
        path: 'apartment/:id',
        element: <Agrement></Agrement>
      },
      {
        path: '/locationOnMap',
        element: <LocationOnMap></LocationOnMap>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'profile',
        element: <Profile></Profile>
      },
      {
        path: 'Announcements',
        element: <Announcements></Announcements>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-white'>
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>

          <div className='max-w-screen-xl mx-auto text-Poppins'>
            <RouterProvider router={router} />
          </div>

        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode >
  </div >
)
