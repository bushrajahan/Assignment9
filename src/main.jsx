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
import PrivateRoute from './privateroute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import About from './Pages/Blog/About/About';
import Details from './Component/Detalis/Details';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/service',
        element: <Services></Services>,
       
      },
      {
        path:'/location',
        element:<Location></Location>
      },
      {
        path:'/testimonial',
        element:<PrivateRoute><Testimonial></Testimonial></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/blog',
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:()=>fetch('/data.json')
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
