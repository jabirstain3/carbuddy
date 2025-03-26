import { useState } from "react";

import IntroText from "../../ui/section/IntroText";
import BookingCard from "../../ui/BookingCard";
import { TBooking } from "../../../types";

const UserManageBookingLayout = () => {
    const [bookings] = useState<TBooking[]>([
        {
            booking_id: "CB-2025-78945",
            statusCode: "9003",
            car: {
                id: "car-12345",
                name: "Tesla Model 3",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jonathanmotorcars.com%2Fimagetag%2F224%2F3%2Fl%2FUsed-2012-Audi-A4-20T-quattro-Premium-Plus.jpg&f=1&nofb=1&ipt=eb3e700b425c05f59aadacfab0398986bd4870de7674475d49de1baf1f810182&ipo=images",
                category: "Electric Sedan",
                AditionalFeatures: ["GPS", "Child Seat"],
            },
            rentalinfo: {
                pickup: "2025-04-15T10:00:00",
                return: "2025-04-20T18:00:00",
                location: "Downtown Autoville",
            },
            totalAmount: 499.95,
            createdAt: "2025-03-10T14:23:00",
            user: {
                id: "user-12345",
                email: "john.doe@example.com",
                username: "John Doe",
            },
            aprovedAt: "2025-03-11T10:00:00",
            confirmedAt: "2025-03-12T10:00:00",
            canceledAt: undefined,
        },
        {
            booking_id: "CB-2025-77945",
            statusCode: "9002",
            car: {
                id: "car-12345",
                name: "Tesla Model 3",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jonathanmotorcars.com%2Fimagetag%2F224%2F3%2Fl%2FUsed-2012-Audi-A4-20T-quattro-Premium-Plus.jpg&f=1&nofb=1&ipt=eb3e700b425c05f59aadacfab0398986bd4870de7674475d49de1baf1f810182&ipo=images",
                category: "Electric Sedan",
                AditionalFeatures: ["GPS", "Child Seat"],
            },
            rentalinfo: {
                pickup: "2025-04-15T10:00:00",
                return: "2025-04-20T18:00:00",
                location: "Downtown Autoville",
            },
            totalAmount: 499.95,
            createdAt: "2025-03-10T14:23:00",
            user: {
                id: "user-12345",
                email: "john.doe@example.com",
                username: "John Doe",
            },
            aprovedAt: "2025-03-11T10:00:00",
            confirmedAt: "2025-03-12T10:00:00",
            canceledAt: undefined,
        },
        {
            booking_id: "CB-2025-78455",
            statusCode: "9005",
            car: {
                id: "car-12345",
                name: "Tesla Model 3",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jonathanmotorcars.com%2Fimagetag%2F224%2F3%2Fl%2FUsed-2012-Audi-A4-20T-quattro-Premium-Plus.jpg&f=1&nofb=1&ipt=eb3e700b425c05f59aadacfab0398986bd4870de7674475d49de1baf1f810182&ipo=images",
                category: "Electric Sedan",
                AditionalFeatures: ["GPS", "Child Seat"],
            },
            rentalinfo: {
                pickup: "2025-04-15T10:00:00",
                return: "2025-04-20T18:00:00",
                location: "Downtown Autoville",
            },
            totalAmount: 499.95,
            createdAt: "2025-03-10T14:23:00",
            user: {
                id: "user-12345",
                email: "john.doe@example.com",
                username: "John Doe",
            },
            aprovedAt: "2025-03-11T10:00:00",
            confirmedAt: "2025-03-12T10:00:00",
            canceledAt: undefined,
        },
        {
            booking_id: "CB-2025-78445",
            statusCode: "9004",
            car: {
                id: "car-12345",
                name: "Tesla Model 3",
                image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jonathanmotorcars.com%2Fimagetag%2F224%2F3%2Fl%2FUsed-2012-Audi-A4-20T-quattro-Premium-Plus.jpg&f=1&nofb=1&ipt=eb3e700b425c05f59aadacfab0398986bd4870de7674475d49de1baf1f810182&ipo=images",
                category: "Electric Sedan",
                AditionalFeatures: ["GPS", "Child Seat"],
            },
            rentalinfo: {
                pickup: "2025-04-15T10:00:00",
                return: "2025-04-20T18:00:00",
                location: "Downtown Autoville",
            },
            totalAmount: 499.95,
            createdAt: "2025-03-10T14:23:00",
            user: {
                id: "user-12345",
                email: "john.doe@example.com",
                username: "John Doe",
            },
            aprovedAt: "2025-03-11T10:00:00",
            confirmedAt: "2025-03-12T10:00:00",
            canceledAt: undefined,
        },
    ])
        
        const [activeTab, setActiveTab] = useState("9000")
        const [searchQuery, setSearchQuery] = useState("")
        
        // const formatDate = (dateString: string) => {
        //     const date = new Date(dateString)

        //     return new Intl.DateTimeFormat("en-US", {
        //     month: "short",
        //     day: "numeric",
        //     year: "numeric",
        //     hour: "numeric",
        //     minute: "numeric",
        //     }).format(date)
        // }
        
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
                    booking.car.name.toLowerCase().includes(query) ||
                    booking.car.category.toLowerCase().includes(query) ||
                    booking.rentalinfo.location.toLowerCase().includes(query)
                )
            }

            return true;
        })

    return (
        <section className="container mx-auto py-2 md:py-6">
            {/* <h1 className="text-3xl lg:4xl font-bold mb-8 text-blue-800">My Bookings</h1> */}
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
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {/* <Search className="h-5 w-5 text-gray-400" /> */}
                        </div>

                        <input type="text" placeholder="Search bookings by ID, car, or location..." className="bg-neutral-200 dark:bg-acn block w-full px-3 py-2 border border-neutral-600 rounded-md leading-5 bg-white placeholder-neutral-500 focus:outline-none sm:text-sm"  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>

                {/* bookings */}
                <div className="">
                    {filteredBookings.length === 0 ? (
                        <div className="p-8 text-center">
                            {/* <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Car className="text-gray-400" size={24} />
                            </div> */}

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