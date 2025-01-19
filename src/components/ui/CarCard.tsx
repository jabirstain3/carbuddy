import { useNavigate } from "react-router-dom";

const CarCard = ( ) => {
    const car = {"id": "1",
        "image": "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
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
        "price": 50
    }

    const { id, name, image, catagory, passengers, transmission, luggage, area, price} = car;

    const navigate = useNavigate();

    const handalDetails = () => {
        navigate(id)
    }

    return (
        <div className="border card w-full min-w-52 max-w-96">
            <figure>
                <img src={image} alt={name} className="w-full aspect-[5/3]"/>
            </figure>
            <div className="card-body">
                <h2 className= " card-title text-2xl font-semibold">{name}&ensp;<div className="badge bg-scnd border-none">{catagory}</div></h2>

                <div className="w-full card-subtitle flex justify-between">
                    <p className=" text-left">Passengers</p>
                    <p className=" text-right">{passengers}</p>
                </div>

                <div className="w-full card-subtitle flex justify-between">
                    <p className=" text-left">Luggage</p>
                    <p className=" text-right">{luggage}</p>
                </div>
                
                <div className="w-full card-subtitle flex justify-between">
                    <p className=" text-left">Transmission</p>
                    <p className=" text-right">{transmission}</p>
                </div>

                <div className="w-full card-subtitle flex justify-between">
                    <p className=" text-left">City</p>
                    <p className=" text-right">{area.city}</p>
                </div>

                <div className=" mt-5 px-1 card-action flex justify-between align-center items-center">
                    <p className=" max-w-fit h-fit text-2xl font-semibold text-scnd">${price}<span className="text-lg text-based dark:text-basel">/day</span></p>
                    <button onClick={handalDetails} className="btn border-none rounded-full px-6 text-lg bg-scnd">Details</button>
                </div>
            </div>
</div>
    );
};

export default CarCard;