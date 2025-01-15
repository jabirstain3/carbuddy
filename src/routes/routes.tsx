import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../components/layout/home/HomeLayout";
import AboutUsLayout from "../components/layout/aboutUs/AboutUsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomeLayout />,
            },
            {
                path: "aboutus",
                element: <AboutUsLayout/>,
            },
            {
                path: "Contact",
                element: <App />,
            },
            {
                path: "about",
                element: <App />,
            },
        ],
    },
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: "create",
                element: <App />,
            },
            {
                path: "history",
                element: <App />,
            },
        ],
    },
    {
        path: "/login",
        element: <App />,
    },
    {
        path: "/signup",
        element: <App />,
    },
]);

export default router;