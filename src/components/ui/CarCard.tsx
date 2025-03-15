import { TCar } from "../../types";
import { useToRoute } from "../../hooks/useToRoute";


interface CarCardProps {
    base: string;
    car: TCar
}

const CarCard: React.FC<CarCardProps> = ( { base, car}) => {
    const goToRoute = useToRoute()

    const { _id:id, name, image, category, passengers, transmission, luggage, area, price} = car;

    const handalDetails = () => {
        if (base === ""){
            goToRoute( id, car )
        }
        else goToRoute( `${base}/${id}`, car )
    }

    return (
        <div className="border card w-full min-w-64 lg: max-w-96">
            <figure>
                <img src={image} alt={name} className="w-full aspect-[5/3]"/>
            </figure>
            <div className="card-body">
                <h2 className= "card-title text-2xl font-semibold">{name}</h2>
                
                <div className="badge bg-scnd border-none">{category}</div>

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