import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/features/auth/authSlice";

const Protected = ({ children }: {children: ReactNode}) => {
    const token = useAppSelector(useCurrentToken);

    if(!token) {
        // cout("no access!");
        return <Navigate to="/login"  replace={true}/>;
        
    }

    return children;
};

export default Protected;