import { useLocation } from "react-router";

const Bookingpage = () => {
    const location = useLocation();
    const { state } = location;
    // console.log(state);
    const { carId, addedFeatures, dates } = state;
    
    return (
        <div>
            <h1>booking page</h1>
            <p>{carId}</p>
            <p>{addedFeatures}</p>
            <p>{dates}</p>
        </div>
    );
};

export default Bookingpage;