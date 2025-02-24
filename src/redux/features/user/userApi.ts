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

        getUserData: builder.query({
            query: ( id: string ) => ({
                method: "GET",
                url: `/users/${id}`,
            }),
        }),
    }),
})

export const { useRegisterUserMutation, useGetUserDataQuery } = authApi