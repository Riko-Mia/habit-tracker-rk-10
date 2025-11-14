import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "../error/Error";
import LoginUI from "../Component/Login/LoginUiVerse";
import PrivetRout from "./PrivetRout";
import myHabits from './../Component/MyHabits/myHabits';



export const routes = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        // errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path:"/login",
                Component: Login,
            },
            {
                path:"/register",
                Component: Register,
            },
            {
                path: "/myHabits",
                element:<PrivetRout><myHabits></myHabits></PrivetRout>
            }

        ]
    }

])