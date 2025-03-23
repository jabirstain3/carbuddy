import { useLocation } from "react-router-dom";
import { useToProtectedRoute } from "../../../hooks/useToProtectedRoute";

const ConfirmBooking = () => {
    const location = useLocation();
    const ToProtectedRoute = useToProtectedRoute()
    const { state } = location;
    console.log(state);

    const { bookingId, addedFeatures, carDetails } = state;

    const status = {
        title: "Processing Booking",
        message: "Confirming your ride with the car owner, please wait!",
        color: "#f4842e",
    };

    return (
        <section className="bg-gray-100 container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Confirmation status bar */}
                <div className="shadow-lg rounded-lg p-8 mb-8 border-l-4 dark:bg-acn" style={{ borderColor: status.color }}>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center">
                            {/* <CheckCircle className="text-green-500 mr-4" size={32} /> */}
                            <div>
                                <h1 className="text-3xl font-bold" style={{ color: status.color }}>{status.title}</h1>
                                <p className="text-neutral-600">{status.message}</p>
                            </div>
                        </div>

                        <div className="">
                            <p className="text-neutral-700">Booking ID:</p>
                            <p className="text-xl font-semibold">{bookingId}</p>
                        </div>
                    </div>
                </div>
    
                {/* Car Details */}
                <div className="bg-white shadow-lg rounded-lg p-8 mb-8 dark:bg-acn">
                    <h2 className="text-2xl font-semibold mb-6 text-blue-800 flex items-center">
                        {/* <Car className="mr-2" size={24} /> */}
                        Car Details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img src={carDetails.image} alt={carDetails.name} className="rounded-lg object-cover w-full max-w-[500px]" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-2">{carDetails.name}</h3>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-neutral-600">Category</p>
                                    <p className="font-semibold">{carDetails.category}</p>
                                </div>

                                <div>
                                    <p className="text-neutral-600">License Plate</p>
                                    <p className="font-semibold">{carDetails.licensePlate}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-neutral-600 mb-2">Basic Features</p>

                                <div className="grid grid-cols-2 gap-2">
                                    {carDetails.features.map(( feature : string, index : number ) => (
                                    <div key={index} className="bg-scndlit px-3 py-1 rounded-full text-blue-700 text-sm inline-block">
                                        {feature}
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-neutral-600 mb-2">Additional Features</p>

                                <div className="grid grid-cols-2 gap-2">
                                    {addedFeatures.map(( feature : string, index : number ) => (
                                    <div key={index} className="bg-scndlit px-3 py-1 rounded-full text-blue-700 text-sm inline-block">
                                        {feature}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center print:hidden">
                    {/* <button className="btn bg-scnd text-white hover:bg-scndlit">Pay</button> */}
                    <button className="btn bg-scnd text-white hover:bg-scndlit" onClick={() => { ToProtectedRoute('booking') }}>Go to bookings</button>
                </div>                    
            </div>
        </section>
    )
};

export default ConfirmBooking;