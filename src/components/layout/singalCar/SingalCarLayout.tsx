import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Feature = string;

const SingalCarLayout = () => {
    const [pickedFeatures, setPickedFeatures] = useState<Feature[]>([]);
    const car = {"id": "1",
        "image": "../../../../src/assets/images/man-parked-side-road.jpg",
        "name": "Sedan 2024",
        "doors": 4,
        "catagory": "Sedan",
        "passengers": 5,
        "transmission": "Automatic",
        "area": {
            "address": "1234 Elm St",
            "city": "Los Angeles"
        },
        "luggage": 3,
        "price": 50,
        "model":"Carrera 4S",
        "drive":"Front-wheel drive",
        "engine":"2.5 L TDI+",
        "power":"2000 h",
        "fuel":"degale",
        "mileage":"25",
        "features":[
            "Air Conditioning",
            "Bluetooth",
            "Cruise Control",
            "Heated Seats",
        ],
        "addfeatures":[
            "insurence",
            "fuel",
            "baby seates",
            "basic toolkit",
        ]
    }
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Define frozen/unselectable dates
    const frozenDates = [
        new Date(2025, 0, 20), 
        new Date(2025, 0, 25), 
        new Date(2025, 0, 30), 
    ];

    // Function to check if a date should be disabled
    const isDateDisabled = (date: Date) => {
        return frozenDates.some(
            (frozenDate) => frozenDate.toDateString() === date.toDateString()
        );
    };

    const { id, name, image, catagory, passengers, transmission, luggage, area, price, model, drive, engine, power, fuel, mileage, features, addfeatures} = car;

    const nvigate = useNavigate()

    const handalAddedfeature = (feature: Feature) => {
        setPickedFeatures((pickedFeatures) =>
        pickedFeatures.includes(feature) ?
            pickedFeatures.filter((item) => item !== feature) :
            [...pickedFeatures, feature] 
        );
    };

    const handalBooking = () => {
        nvigate("/booking", {state: bookingDetails})
    }
    const bookingDetails = {
        "id": id,
        "addedFeatures": pickedFeatures,
        "date": selectedDate,
    }

    return (
        <div className=" w-11/12 xl:w-10/12 max-w-5xl mx-auto px-2 my-10 ">
            <div className=" w-full mx-auto">
                <img src={image} alt={name} className="rounded-xl"/>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>

                <div className=" md:flex justify-between items-start">
                    <div className="flex text-xl font-normal ">
                        <p >{model}</p>
                        <p>&ensp;.&ensp;</p>
                        <p > {catagory}</p>
                    </div>
                    
                    <div className="my-1 md:m-0">
                        <p className="font-bold text-3xl text-right">{price}<span className="text-lg font-normal">/day</span></p>
                        <p className="text-lg font-normal">{area.address}, <span className="text-lg font-medium">{area.city}</span></p>
                    </div>
                </div>
                
                <div>
                    <h4 className="my-4 text-2xl font-semibold">Details</h4>

                    <div className="divider divider-neutral"></div>

                    <div className="text-lg mb-6 grid grid-rows-1 md:grid-rows-5 grid-flow-col gap-2">
                        <p>Drive: <span className="font-medium">{drive}</span></p>
                        <p>Engine: <span className="font-medium">{engine}</span></p>
                        <p>Engine Power: <span className="font-medium">{power}</span></p>
                        <p>Fuel: <span className="font-medium">{fuel}</span></p>
                        <p>Mileage: <span className="font-medium">{mileage}</span></p>
                        <p>Transmission: <span className="font-medium">{transmission}</span></p>
                        <p>Passengers: <span className="font-medium">{passengers} people</span></p>
                        <p>Luggage: <span className="font-medium">{luggage} unites</span></p>
                    </div>
                </div>

                <div>
                    <h4 className="my-4 text-2xl font-semibold">Features</h4>

                    <div className="divider divider-neutral"></div>

                    <div className="text-lg  grid grid-rows-1 md:grid-rows-3 grid-flow-col gap-2">
                        { features.map((feature, index) => 
                            <p key={index} className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>{feature}
                            </p>)}
                    </div>
                </div>

                <div>
                    <h4 className="my-4 text-2xl font-semibold">Aditional Features To Choose</h4>

                    <div className="divider divider-neutral"></div>

                    <div className="text-lg  grid grid-cols-1 md:grid-cols-2 gap-2">
                        { addfeatures.map((addfeature, index) => <div key={index} className="flex gap-2">
                            <input type="checkbox" id={`${index}`} value={addfeature} onChange={()=>handalAddedfeature(addfeature)}/>
                            <label htmlFor={addfeature} className="">{addfeature}</label>
                        </div>)}
                    </div>
                </div>

                <div className="my-8">
                    <h2 className="my-4 text-2xl font-semibold">Select a Date</h2>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        filterDate={(date) => !isDateDisabled(date)} 
                        placeholderText="yyyy-MM-dd"
                        dateFormat="yyyy-MM-dd"
                        className="border rounded-lg p-2 text-base text-based "
                    />
                    {selectedDate && (
                        <p>
                        Selected Date: <strong>{selectedDate.toDateString()}</strong>
                        </p>
                    )}
                </div>

                <button onClick={handalBooking} className="btn border-none rounded-full px-6 text-lg bg-scnd">Book Now</button>
            </div>
        </div>
    );
};

export default SingalCarLayout;