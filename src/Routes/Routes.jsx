import React from 'react';

import {
    createBrowserRouter,  
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "dashboard",
          element: <Dashboard></Dashboard>
        },
        {
          path: "classes",
          element: <Classes></Classes>
        },
        {
          path: "instructors",
          element: <Instructors></Instructors>
        }
      ]
    },
  ]);
const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;