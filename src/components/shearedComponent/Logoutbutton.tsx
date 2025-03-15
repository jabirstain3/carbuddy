import { logOutUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useToRoute } from "../../hooks/useToRoute";


const Logoutbutton = () => { 
    const dispatch = useAppDispatch();
    const goToRoute = useToRoute()
    const handleLogOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(logOutUser());
        goToRoute(`/`);
    };

    return (
        <button className="rounded-lg hover:bg-scnd" onClick={handleLogOut}>Log Out</button>
    );
};

export default Logoutbutton;