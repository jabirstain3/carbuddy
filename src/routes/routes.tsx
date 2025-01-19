import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../components/layout/home/HomeLayout";
import AboutUsLayout from "../components/layout/aboutUs/AboutUsLayout";
import CarlistingLayout from "../components/layout/carlistings/CarlistingLayout";
import SingalCarLayout from "../components/layout/singalCar/SingalCarLayout";
import Bookingpage from "../pages/bookingpage/bookingpage";

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
                path: "contactus",
                element: <App />,
            },
            {
                path: "cars",
                element: <CarlistingLayout />,
            },
            {
                path: "/cars/:id",
                element: <SingalCarLayout/>,
                // loader: ({params}) => fetch(`${baseURL}/coffee/${params.id}`) 
            },
            {
                path: "/booking",
                element: <Bookingpage/>,
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