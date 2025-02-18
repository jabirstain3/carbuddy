import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";


type TAuthState = {
    user: null | object,
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
export const useCurrentUser = (state: RootState) => state.auth.user;


