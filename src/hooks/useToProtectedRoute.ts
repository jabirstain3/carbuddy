import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export const useToProtectedRoute = () => {
    const navigate = useNavigate();
    const username = useAppSelector((state: RootState) => state.auth.user?.userName)

    const goToProtectedRoute = (path: string, stateObj: object = {}) => {
        if (!username) {
            navigate("/login");
            return;
        }

        navigate(`/user/${username}/${path}`, { state: stateObj });
    };

    return goToProtectedRoute;
};