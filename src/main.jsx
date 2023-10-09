import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Banner from './Pages/Banner/Banner';

import Services from './Pages/services/Services'

import Location from './Pages/location/Location'

import Testimonial from './Pages/Testimonial/Testimonial'
import Root from'./Root/Root'
import ErrorPage from './Pages/ErroPage/ErrorPage';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './assets/AuthProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/banner',
        element: <Banner></Banner>
      },
      {
        path:'/service',
        element:<Services></Services>
      },
      {
        path:'/location',
        element:<Location></Location>
      },
      {
        path:'/testimonial',
        element:<Testimonial></Testimonial>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
