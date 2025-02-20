import { baseApi } from "../../api/BaseApi"

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userinfo) => ({
                method: "POST",
                url:"/users/register",
                body: userinfo,
            }),
        }),
    }),
})

export const { useRegisterUserMutation } = authApi