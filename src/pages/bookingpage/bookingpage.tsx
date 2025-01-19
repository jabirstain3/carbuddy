import { useLocation } from "react-router";

const Bookingpage = () => {
    const location = useLocation();
    const { state } = location;
    // console.log( carInfo.name );
    console.log(state);
    // const { id, } = bookingInfo;
    
    return (
        <div>
            <h1>booking page</h1>
            <p>{state.id}</p>
        </div>
    );
};

export default Bookingpage;