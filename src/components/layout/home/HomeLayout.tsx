import Button from "../../shearedComponent/button";
import FeaturedCarLayout from "./FeaturedCarLayout";


const HomeLayout = () => {
    return (
        <section className="mx-auto">
            {/* hero section */}
            <div className="relative flex items-center h-[calc(100vh-80px)] justify-center  bg-gray-100">
                <img src="../../../../src/assets/images/man-parked-side-road.jpg" alt="" className="object-cover w-full h-full  max-h-screen contrast-[.9] brightness-[.4] "/>
                
                <div className=" absolute w-11/12 xl:w-10/12 mx-auto max-w-4xl items-center ">
                    <h1 className="my-4 text-6xl sm:text-8xl"><span className="text-scnd">Rent A Car</span><br/><span className="text-basel">And Enjoy Your Trip</span></h1>
                    <div className="px-2 mt-10">
                        <Button btnText="Book Now" link="cars" />
                    </div>
                </div>
            </div>

            {/* featured cars */}
            <FeaturedCarLayout />

            {/* search bar */}
            {/* <div className="bouder w-full mx-auto px-2 py-10 lg:py-20">
                
            </div> */}

            
        </section>
    );
};

export default HomeLayout;