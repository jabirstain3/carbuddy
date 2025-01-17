import Button from "../../shearedComponent/Button";
import Review from "../../ui/section/Review";
import IntroText from "../../ui/section/IntroText";
import FeaturedCarLayout from "./FeaturedCarLayout";


const HomeLayout = () => {
    return (
        <section className="mx-auto">
            {/* hero section */}
            <div className="relative flex items-center h-[calc(100vh-80px)] justify-center bg-gray-100">
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

            {/* Why Choose Us section */}
            <div className="w-full px-2 py-10 lg:py-20 bg-acn ">
                <div className="w-11/12 xl:w-10/12 max-w-4xl mx-auto text-center">
                    <IntroText sectionHeader="Why Choose Us?" sectionText="Your trusted partner in reliable car rental" />

                    <div className="mt-9 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
                        <div className="max-w-xs p-4 border rounded-lg shadow-md ">
                            <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
                            <p>We are here to help you anytime, anywhere.</p>
                        </div>

                        <div className="max-w-xs p-4 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">Best Price</h3>
                            <p>Get the best deals and offers on car rentals.</p>
                        </div>

                        <div className="max-w-xs p-4 border rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">Wide Selection</h3>
                            <p>Choose from a wide range of cars to suit your needs.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* customer testimonials section */}
            <div className="w-11/12 xl:w-10/12 mx-auto px-2 py-10 lg:py-20">
                <IntroText sectionHeader="What Our Customers Are Saying About Us" sectionText="" />

                <Review />

            </div>

        </section>
    );
};

export default HomeLayout;