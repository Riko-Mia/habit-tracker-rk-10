import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "../error/Error";
import LoginUI from "../Component/Login/LoginUiVerse";



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
            }
        ]
    }

])