import { NavLink, Outlet, } from "react-router-dom";



const User = () => {
    
    return (
        <div className=" w-11/12 xl:w-10/12 h-full mx-auto">
            {/* Mobile Navbar */}
            <div className=" bg-acn rounded-xl md:hidden flex justify-start items-center">
                <label htmlFor="my-drawer-2" className="btn btn-ghost border drawer-button p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
            </div>

            <div className="drawer md:drawer-open">
                {/* Content*/}
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="md:border border-neutral-600 drawer-content  rounded-xl md:m-2 lg:m-4">
                    {/* Page content*/}
                    <div className="p-2 lg:p-4">
                        <Outlet/>
                    </div>
                </div>

                {/* Sidebar*/}
                <div className="drawer-side md:my-2 lg:my-4 rounded-xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu bg-basel dark:bg-[#555555] md:bg-acn min-h-full md:w-44 lg:w-56 md:p-2 lg:p-4 ">
                        <li ><NavLink  to={"info"} >Personal Info</NavLink></li>
                        <li ><NavLink  to={"booking"}>Booking</NavLink></li>
                        <li ><NavLink  to={"payment"}>Payment</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;