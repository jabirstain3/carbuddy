
import IntroText from "../../ui/section/IntroText";
import car from "/src/assets/images/man-parked-side-road.jpg"
import { CarShowcase } from "../../ui/Carshowcase";



const CarlistingLayout = () => {    

    return <div>
            {/* Cars hero section */}
            <div className="relative flex items-center h-[calc(50vh-80px)] justify-center bg-gray-100">
                <img src={car} alt="" className="object-cover w-full h-full  max-h-screen contrast-[.9] brightness-[.4] "/>
                
                <div className=" absolute w-11/12 xl:w-10/12 mx-auto max-w-4xl items-center text-basel">
                    <IntroText sectionHeader="All Cars" sectionText="" /> 
                </div>
            </div>
            
            <CarShowcase/>
            
        </div>
};

export default CarlistingLayout;