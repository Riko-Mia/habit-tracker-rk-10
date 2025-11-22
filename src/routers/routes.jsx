import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "../error/Error";
// import LoginUI from "../Component/Login/LoginUiVerse";
import PrivetRout from "./PrivetRout";
import CreateHabits from "../Component/CreateHabits/CreateHabits";
import AllHabits from "../Component/AllHabits/AllHabits";
import Details from "../Component/Details/Details";
import MyHabits from "../Component/MyHabits/MyHabits";



export const routes = createBrowserRouter([
    {
        path:"/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
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
                // loader:() => fetch()
                path: `/myHabits/:email`,
                element:<PrivetRout><MyHabits></MyHabits></PrivetRout>
            },
            {
                path:"/createHabits",
                element: <PrivetRout><CreateHabits></CreateHabits></PrivetRout>
            },
            {
                loader:() => fetch("http://localhost:3000/habits"),
                path:"/details/:id",
                element: <PrivetRout><Details></Details></PrivetRout>
            },
            {
                path:"/allHabits",
                // loader:() => fetch("http://localhost:3000/habits"),
                element: <AllHabits></AllHabits>
            }

        ]
    }

])