import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";


const Logoutbutton = () => { 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogOut = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        dispatch(logOutUser());
        navigate(`/`);
    };

    return (
        <button className="rounded-lg hover:bg-scnd" onClick={handleLogOut}>Log Out</button>
    );
};

export default Logoutbutton;