import {  createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Chat from "../Pages/Chat";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },{
      path:"/chat",
      element:<Chat/>,
    }
  ]);