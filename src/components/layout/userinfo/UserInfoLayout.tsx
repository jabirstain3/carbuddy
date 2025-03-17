
import { useGetUserDataQuery } from "../../../redux/features/user/userApi";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { TUserDetails } from "../../../types";
import Loader from "../../ui/Loader";

const UserInfoLayout: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    // console.log( user );
    
    const userId = user?.id
    // console.log(userId);
    
    const { data, isLoading } = useGetUserDataQuery( userId!, { skip: !userId, } );
    // console.log(data);

    if( isLoading){
        return <Loader/>
    }

    const { data: UserData } = data;
    // console.log(UserData);

    const { username, _id:id, number, } = UserData as TUserDetails
    return (
        <div>
            <h1>{username}</h1>
            <h1>{id}</h1>
            <h1>{number}</h1>
        </div>
    );
};

export default UserInfoLayout;