
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Orders from "../components/Orders";
import PrivateRoute from "../components/PrivateRoute";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<Signup></Signup>
        },
        {
          path:'orders',
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        }
      ]
    },
  ]);