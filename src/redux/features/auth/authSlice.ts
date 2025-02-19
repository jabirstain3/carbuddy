import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import { TUser } from "../../../types";



type TAuthState = {
    user: null | TUser,
    token: null | string,
}

const initialState: TAuthState = {
    user: null,
    token: null,
} 

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setIUser: ( state, action ) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logOutUser: ( state ) => {
            state.user = null;
            state.token = null;
        }
    },
})

export const { setIUser, logOutUser } = authSlice.actions

export default authSlice.reducer;

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;


