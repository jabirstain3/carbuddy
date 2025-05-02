import { useState } from "react";

import IntroText from "../../ui/section/IntroText";
import BookingCard from "../../ui/BookingCard";
import { useAppSelector } from "../../../redux/hooks";

const UserManageBookingLayout = () => {
    const bookings = useAppSelector((state) => state.bookings.bookings)
    // cout(bookings)

    
    const [activeTab, setActiveTab] = useState("9000")
    const [searchQuery, setSearchQuery] = useState("")

    const filteredBookings = bookings.filter((booking) => {
        // Filter by tab
        if (activeTab !== "9000" && booking.statusCode !== activeTab) {
            return false
        }
    
        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            return (
                booking.booking_id.toLowerCase().includes(query) ||
                booking.carDetails.name.toLowerCase().includes(query) ||
                booking.carDetails.category.toLowerCase().includes(query) ||
                booking.rentalinfo.location.toLowerCase().includes(query)
            )
        }

        return true;
    })

    return (
        <section className="container mx-auto py-2 md:py-6">
            <IntroText sectionHeader='My Bookings' sectionText='' /> 

            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                {/* filter navigation */}
                <div className="flex flex-wrap gap-2 border-b border-neutral-600">
                    <button className={`px-2 py-2 font-medium text-sm  focus:outline-none ${ activeTab === "9000" ? "text-scnd border-b-2 border-scnd" : "text-neutral-600 hover:text-scndlit"}`} 
                    onClick={() => setActiveTab("9000")}>
                        All Bookings
                    </button>

                    <button className={`px-2 py-2 font-medium text-sm focus:outline-none ${ activeTab === "9003" ? "text-scnd border-b-2 border-scnd" : "text-neutral-600 hover:text-scndlit" }`} 
                    onClick={() => setActiveTab("9003")} > 
                        Upcoming 
                    </button>

                    <button className={`px-2 py-2 font-medium text-sm focus:outline-none ${ activeTab === "9005" ? "text-scnd border-b-2 border-scnd" : "text-neutral-600 hover:text-scndlit" }`}
                    onClick={() => setActiveTab("9005")}>
                        Completed
                    </button>

                    <button className={`px-2 py-2 font-medium text-sm focus:outline-none ${ activeTab === "9002" ? "text-scnd border-b-2 border-scnd" : "text-neutral-600 hover:text-scndlit"}`}
                    onClick={() => setActiveTab("9002")}>
                        Canceled
                    </button>
                </div>

                {/* search bar */}
                <div className="p-2 border-b border-neutral-600">
                    <div className="relative">
                        <input type="text" placeholder="Search bookings by ID, car, or location..." className="bg-neutral-200 dark:bg-acn block w-full px-3 py-2 border border-neutral-600 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none sm:text-sm"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>

                {/* bookings */}
                <div className="">
                    {filteredBookings.length === 0 ? (
                        <div className="p-8 text-center">
                            <h3 className="text-lg font-medium mb-1">No bookings found</h3>
                            <p className=""> 
                                {searchQuery ? "Try adjusting your search criteria" : "You don't have any bookings in this category yet"}
                            </p>
                        </div>
                    ) : (
                        filteredBookings.map((booking) => <BookingCard key={booking.booking_id} booking={booking} />)
                    )}
                </div>
            </div>
        </section>
    );
};

export default UserManageBookingLayout;