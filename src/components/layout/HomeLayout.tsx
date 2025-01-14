import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const HomeLayout = () => {
    return (
        <section className="w-11/12 xl:w-10/12 mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </section>
    );
};

export default HomeLayout;