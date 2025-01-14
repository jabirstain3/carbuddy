import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <App />,
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