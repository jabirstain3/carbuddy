import { createSlice } from "@reduxjs/toolkit";
import { TBooking } from "../../../types";


type TBookingState = {
    bookings: TBooking[];
}

const initialState: TBookingState = {
    bookings: [],
}

const bookingsSlice = createSlice({
    name:"Bookings",
    initialState,
    reducers:{
        setBoohking: (state, action ) => {
            const { booking } = action.payload;
            state.bookings = [...state.bookings, booking];
            // cout(state.bookings);
        },
        updateBooking: (state, action) => {
            const { booking } = action.payload;
            const index = state.bookings.findIndex((b) => b.booking_id === booking.booking_id);
            if (index !== -1) {
                state.bookings[index] = booking;
            } else {
                state.bookings.push(booking);
            }
        },
    }
})

export const { setBoohking, updateBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;