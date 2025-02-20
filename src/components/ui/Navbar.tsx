import ThemeProvider from "../../theme/Theme";
import carbuddyLight from "/src/assets/logo/carbuddyLight.png"
import carbuddyDark from "/src/assets/logo/carbuddyDark.png"
import Userstatus from "./Userstatus";

const Navbar = () => {
    const manu = <>
        <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/">Home</a></li>
        {/* <li> <Link to="/about" className="hover:bg-scnd hover:text-based active:text-scnd">About Us</Link></li> */}
        <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/aboutus" >About Us</a></li>
        <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/cars" >Cars</a></li>
        <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/:userName/Booking" >Bookings</a></li>
        <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/contactus" >Contact Us</a></li>
    </>

    return (
        <div className="w-11/12 xl:w-10/12 mx-auto navbar px-0">
            <div className="navbar-start ">
                <img src={carbuddyLight} alt="CarBuddy logo" className="w-24 dark:hidden" />
                <img src={carbuddyDark} alt="CarBuddy logo" className="w-24 hidden dark:inline" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-based dark:text-basel font-medium text-lg">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-2 items-center text-based dark:text-basel font-medium text-lg">
                    <li className="hidden md:inline"><Userstatus/></li>
                    <li className=""><ThemeProvider/></li> 
                </ul>
                <details className="dropdown dropdown-end">
                    <summary tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-3 bg-basel dark:bg-based border rounded-full border-based dark:border-basel hover:bg-scnd dark:hover:bg-scnd">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </summary>

                    <ul tabIndex={0} className="menu dropdown-content font-medium mt-3 bg-acn rounded-box z-[1] w-36 p-2 shadow">
                        <li className="md:hidden w-fit mx-auto "><Userstatus/></li>
                        {manu}
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default Navbar;