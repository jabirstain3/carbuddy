import carbuddyLight from "/src/assets/logo/carbuddyLight.png"
import carbuddyDark from "/src/assets/logo/carbuddyDark.png"
import { NavLink } from "react-router-dom";

const NavLinkClass = ({ isActive }: { isActive: boolean }) => `hover:text-scnd ${isActive? "text-scnd bg-white": ""}`

const Footer = () => {
    return (
        <footer className="footer w-11/12 xl:w-10/12 mx-auto px-2 py-10 md:py-14 lg:py-20">
            <aside>
                <div className="border rounded-lg">
                    <img src={carbuddyLight} alt="CarBuddy logo" className="w-52 rounded-lg dark:hidden" />

                    <img src={carbuddyDark} alt="CarBuddy logo" className="w-52 hidden rounded-lg dark:inline" />
                </div>
                <p>CARBUDDY Industries Ltd.<br />Providing reliable services since 2020</p>
            </aside>

            <nav className="text-based dark:text-basel font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Services</h6>

                <NavLink className={NavLinkClass} to="">Car rental</NavLink >
                <NavLink className={NavLinkClass} to="">Car with Driver</NavLink >
                <NavLink className={NavLinkClass} to="">luxury Car</NavLink >
                <NavLink className={NavLinkClass} to="">Route planing</NavLink >
            </nav>
            
            <nav className="text-based dark:text-basel font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Company</h6>

                <NavLink className={NavLinkClass} to="/aboutus">About Us</NavLink >
                <NavLink className={NavLinkClass} to="/cars">Cars</NavLink >
                <NavLink className={NavLinkClass} to="/user/:userName/Booking">Bookings</NavLink >
                <NavLink className={NavLinkClass} to="/contactus">Contact Us</NavLink >
            </nav>

            <nav className="text-based dark:text-basel font-medium text-lg">
                <h6 className="footer-title font-semibold text-xl">Legal</h6>

                <NavLink className={NavLinkClass} to="/termsofservice">Terms of service</NavLink >
                <NavLink className={NavLinkClass} to="/privacypolicy">Privacy policy</NavLink >
                <NavLink className={NavLinkClass} to="/cookiePolicy">Cookie policy</NavLink >
            </nav>
        </footer>
    );
};

export default Footer;

