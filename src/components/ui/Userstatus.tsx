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
                        <Logoutbutton />
                    )
            }
        </>
    );
};

export default Userstatus;