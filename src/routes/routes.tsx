import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "../components/layout/home/HomeLayout";
import AboutUsLayout from "../components/layout/aboutUs/AboutUsLayout";
import CarlistingLayout from "../components/layout/carlistings/CarlistingLayout";
import SingalCarLayout from "../components/layout/singalCar/SingalCarLayout";
import LogInPage from "../pages/loginpage/LogInPage";
import SignUpPage from "../pages/singuppage/SignUpPage";
import User from "../pages/userpage/User";
import UserInfoLayout from "../components/layout/userinfo/UserInfoLayout";
import UserManageBookingLayout from "../components/layout/userManageBooking/UserManageBookingLayout";
import UserManagePaymentLayout from "../components/layout/userManagePayment/UserManagePaymentLayout";
import ContactLayout from "../components/layout/contactUs/ContactLayout";
import Protected from "../protectedRoute/Protected";
import ConfirmBooking from "../components/layout/confirmBooking/ConfirmBooking";

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
                element: <ContactLayout/>,
            },

            {
                path: "cars",
                element: <CarlistingLayout />,
            },

            {
                path: "cars/:id",
                children: [
                    {
                        path:"",
                        element: <SingalCarLayout/>,
                    },
                    {
                        path:"confirmation",
                        element: (<Protected> <ConfirmBooking /> </Protected>),
                    },
                ]
                
            },

            {
                path: "user/:userName",
                element: (<Protected> <User /> </Protected>) ,
                children: [
                    {
                        path:"",
                        element: <UserInfoLayout />,
                    },
                    {
                        path: "info",
                        element: <UserInfoLayout />,
                    },

                    {
                        path: "booking",
                        element: <UserManageBookingLayout />,
                    },
                    {
                        path: "payment",
                        element: <UserManagePaymentLayout />,
                    },
                ]
            },
        ],
    },


    {
        path: "/login",
        element: <LogInPage/>,
    },

    {
        path: "/signup",
        element: <SignUpPage />,
    },

    {
        path: "/termcandcondition",
        element: <App />,
    },
    {
        path: "/termsofservice",
        element: <App />,
    },

    {
        path: "/privacypolicy",
        element: <App />,
    },

    {
        path: "/resetpassword",
        element: <App />,
    },

    {
        path: "/admin",
        element: (<Protected> <App /> </Protected>),
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
]);

export default router;