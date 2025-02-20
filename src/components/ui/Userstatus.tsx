import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import Logoutbutton from "../shearedComponent/Logoutbutton";

const Userstatus: React.FC = () => {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.user);

    return (
        <>
            {
                !isAuthenticated ? 
                    (
                        <a className="border rounded-lg hover:bg-scnd" href="/login" >Log In</a>
                    ) : 
                    (
                        <div className="p-0 rounded-full mb-2 md:m-0">
                            <div className="hidden md:inline border rounded-full dropdown dropdown-bottom dropdown-end ">
                                <div tabIndex={1} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className=" m-1 w-12 rounded-full">
                                        <img alt="user" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>

                                <ul tabIndex={1} className="dropdown-content menu bg-acn rounded-box z-[1] w-36 p-2 shadow">
                                    <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/aboutus" >Profile</a></li>
                                    <li><Logoutbutton /></li>
                                </ul>
                            </div>

                            <details className="md:hidden dropdown dropdown-end">
                                <summary tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border rounded-full ">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </summary>

                                <ul tabIndex={0} className="menu dropdown-content font-medium mt-3 bg-acn rounded-box z-[1] w-36 p-2 shadow">
                                    <li><a className="hover:bg-scnd hover:text-based active:text-scnd" href="/aboutus" >Profile</a></li>
                                    <li><Logoutbutton /></li>
                                </ul>
                            </details>
                        </div>
                    )
            }
        </>
    );
};

export default Userstatus;