import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';



const baseQuery = fetchBaseQuery({ 
    baseUrl: import.meta.env.VITE_BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState, endpoint }) => {
        const state = getState() as RootState;
        const token = state.auth.token; // Adjust based on your state structure

         // Add the token only for specific endpoints
        if (endpoint === 'getUserData') {
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        }
    }
});

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
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