import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const HomeLayout = () => {
    return (
        <section className="w-11/12 xl:w-10/12 mx-auto">
            <Navbar/>
            <Outlet />
        </section>
    );
};

export default HomeLayout;