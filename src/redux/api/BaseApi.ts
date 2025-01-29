import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://server-carebuddy.vercel.app/api' }),
    endpoints: (builder) => ({
        getAllCars: builder.query({
            query: () => ({
                method: "GET",
                url:"/cars",
            }),
        }),
    }),
})

export const { useGetAllCarsQuery } = baseApi