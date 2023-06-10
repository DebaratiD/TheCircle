import {  createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Chat from "../Pages/Chat";
import Register from "../Pages/Register";
import HomeLayout from "../Pages/HomeLayout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },{
      path:"/chat",
      element:<Chat/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <HomeLayout/>,
    }
  ]);