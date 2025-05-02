import { TBookingCardProps } from "../../types";
import { NavLink } from "react-router-dom";
import BookingStatus from "./BookingStatus";

const BookingCard = ( {booking}: TBookingCardProps ) => {
    // cout(booking);
    
    const formatDate = (dateString: string) => {
        if (!dateString) return "N/A"; 

        const date = new Date(dateString);
        
        if (isNaN(date.getTime())) return "N/A";

        return new Intl.DateTimeFormat("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(date);
    };

    const status = BookingStatus(booking.statusCode)
    // cout(status);
    
    const isModifiable = booking.statusCode === "9001" || booking.statusCode === "9006" || booking.statusCode === "9003"

    return (
        <div className="border border-neutral-500 rounded-md mt-4 p-4">
            {/* Mobile View (Small Screens) */}
            <div className="flex flex-col sm:hidden">
                {/* Row 1: Image, Name, and Status */}
                <div className="flex items-start gap-4 mb-5">
                    {/* Image */}
                    <div className="flex-shrink-0 flex justify-center items-center rounded-lg overflow-hidden shadow-sm border-neutral-200">
                        <img src={booking.carDetails.image} alt={booking.carDetails.name} className="rounded-lg object-cover w-full max-w-[120px] aspect-[4/3]" />
                    </div>
        
                    {/* Name and Status */}
                    <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold text-based dark:text-basel">{booking.carDetails.name}</h2>
                                <p className="text-neutral-500 text-sm mb-2">{booking.carDetails.category}</p>
                            </div>

                            <div className="flex items-center mt-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`} style={{ backgroundColor: status.color, border: `1px solid ${status.borderColor}`, }} ><p className="ml-1" style={{ color: status.textColor }}>{status.title}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Pickup and Location */}
                <div className="grid grid-cols-2 gap-4 mb-4 bg-neutral-200 dark:bg-acn rounded-lg p-2">
                    <div>
                        <div className="flex items-center text-neutral-500 mb-1">
                        {/* <Calendar className="text-blue-600 mr-2" size={14} /> */}
                            <span className="text-xs font-medium">Pickup</span>
                        </div>

                        <p className="text-sm font-medium">{formatDate(booking.rentalinfo.pickup)}</p>
                    </div>
                    <div>
                        <div className="flex items-center text-neutral-500 mb-1">
                            {/* <MapPin className="text-blue-600 mr-2" size={14} /> */}
                            <span className="text-xs font-medium ">Location</span>
                        </div>
                        
                        <p className="text-sm font-medium">{booking.rentalinfo.location}</p>
                    </div>
                </div>

                {/* Row 4: Booking Info and Actions */}
                <div className="pt-4 border-t border-neutral-400">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-xs text-neutral-500">
                                Booking ID: 
                                <span className="font-medium text-neutral-700"> {booking.booking_id}</span>
                            </p>
                            <p className="text-xs text-neutral-500">
                                Booked on
                                <span className="font-medium text-neutral-700"> {formatDate(booking.createdAt)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0">
                        { isModifiable && (
                            <>
                                <NavLink
                                    to={`/booking-details/${booking.booking_id}`}
                                    className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Modify
                                </NavLink>

                                <button className="inline-flex items-center px-4 py-2 border border-red-600 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Cancel
                                </button>
                            </>
                        )}

                        <NavLink
                            to={`/booking-details/${booking.booking_id}`}
                            className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            View Details
                        </NavLink>
                    </div>
            </div>
            </div>
        
            {/* Tablet and Laptop View */}
            <div className="hidden sm:flex sm:flex-col ">
                {/* Row 1: Image, Name, Status, Pickup, Location */}
                <div className="grid grid-cols-11 gap-4 mb-4">
                    {/* Image */}
                    <div className="col-span-2">
                        <div className="rounded-lg overflow-hidden shadow-sm">
                            <img src={booking.carDetails.image} alt={booking.carDetails.name} className="rounded-lg object-cover w-full max-w-[180px] aspect-square lg:aspect-[4/3]" />
                        </div>
                    </div>

                    {/* Car Details and Status */}
                    <div className="col-span-3">
                        <div className="flex flex-col h-full justify-start">
                            <div>
                                <h2 className="text-lg font-bold text-based dark:text-basel">{booking.carDetails.name}</h2>
                                <p className="text-neutral-500 text-sm mb-2">{booking.carDetails.category}</p>
                            </div>

                            <div className="flex items-center mt-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`} style={{ backgroundColor: status.color, border: `1px solid ${status.borderColor}`, }} ><p className="ml-1" style={{ color: status.textColor }}>{status.title}</p>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Pickup */}
                    <div className="col-span-3">
                        <div className="flex flex-col h-full justify-start">
                            <div className="flex items-center text-neutral-700 mb-1">
                                <span className="text-xs font-medium">Pickup</span>
                            </div>

                            <p className="text-sm font-medium">{formatDate(booking.rentalinfo.pickup)}</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="col-span-3">
                        <div className="flex flex-col h-full justify-start">
                            <div className="flex items-center text-neutral-700 mb-1">
                            <span className="text-xs font-medium">Location</span>
                            </div>

                            <p className="text-sm font-medium truncate max-w-[200px]">{booking.rentalinfo.location}</p>
                        </div>
                    </div>
                </div>

                {/* Row 2: Return Date, Booking Info, Actions */}
                <div className="pt-3 border-t border-neutral-400">
                    <div className="flex flex-wrap gap-2 justify-between items-center">
                        <div className="mr-auto mb-3 sm:mb-0">
                            <p className="text-xs text-neutral-500">
                            Booking ID: <span className="font-medium text-neutral-700">{booking.booking_id}</span>
                            </p>
                        </div>

                        <div className="mr-auto mb-3 sm:mb-0">
                            <p className="text-xs text-neutral-500">
                            Booked on <span className="font-medium text-neutral-700"> {formatDate(booking.createdAt)}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            { isModifiable && (
                                <>
                                    <NavLink
                                        to={`/booking-details/${booking.booking_id}`}
                                        className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Modify
                                    </NavLink>

                                    <button className="inline-flex items-center px-4 py-2 border border-red-600 text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                        Cancel
                                    </button>
                                </>
                            )}

                            <NavLink
                                to={`/booking-details/${booking.booking_id}`}
                                className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </div>
                </div>
        </div>



        </div>
    );
};

export default BookingCard;
