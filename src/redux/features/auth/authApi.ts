import { baseApi } from "../../api/BaseApi"

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userinfo) => ({
                method: "POST",
                url:"/users/login",
                body: userinfo,
            }),
        }),
    }),
})

export const { useLoginMutation } = authApi