import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';

import About from './Components/About';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';

import AuthProvider from './Utilities/AuthProvider/AuthProvider';
import Register from './Components/Register/Register';
import Maintainance from './Components/Maintainance';
import Appointments from './Components/Appointmets/Appointments';
import PrivateRoute from './Components/Routes/Private/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/maintainance',
        element:<Maintainance></Maintainance>
      },
      {
        path:'/about',
        element:<About></About>
      },{
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/appointments',
        element:<PrivateRoute><Appointments></Appointments></PrivateRoute>
      },
     
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
