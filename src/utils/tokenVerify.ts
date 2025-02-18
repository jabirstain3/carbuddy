import { jwtDecode } from "jwt-decode";


const tokenVerify = ( token: string )=> {
    return jwtDecode(token);
};

export default tokenVerify;