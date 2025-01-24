import { Link, Outlet, useLocation } from "react-router-dom";

const User = () => {
    const location = useLocation()
    const { state } = location;
    console.log(state);
    
    return (
        <div className=" w-11/12 xl:w-10/12 h-full mx-auto">
            <div className=" bg-acn rounded-xl lg:hidden flex justify-start items-center">
                <label htmlFor="my-drawer-2" className="btn btn-ghost border drawer-button p-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
            </div>

            <h1>{state}</h1>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content border rounded-xl m-4">
                    {/* Page content*/}
                    <div className=" p-4">
                        <Outlet/>
                    </div>
                </div>

                <div className="drawer-side my-4 rounded-xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu bg-basel dark:bg-[#555555] lg:bg-acn min-h-full  w-56 p-4">
                    {/* Sidebar content here */}
                        {/* <li ><NavLink to={""} className={"hover:bg-scnd hover:text-based active"}>Personal Info</NavLink></li>
                        <li ><NavLink to={"dashbord"} className={"hover:bg-scnd hover:text-based active"}>Dashbord</NavLink></li> */}
                        {/* <li ><Link to={""} className={`hover:bg-scnd hover:text-based`}>Personal Info</Link></li> */}
                        <li ><Link to={""} >Personal Info</Link></li>
                        <li ><Link to={"booking"}>Booking</Link></li>
                        <li ><Link to={"payment"}>Payment</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;