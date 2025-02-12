import IntroText from "../../ui/section/IntroText";
import car from "/src/assets/images/man-parked-side-road.jpg"
// import teamMember1 from '/src/assets/images/teamMember1.jpg';
// import teamMember2 from '/src/assets/images/teamMember2.jpg';
// import teamMember3 from '/src/assets/images/teamMember3.jpg';
import dishantech from '/src/assets/images/dishantech.png';
import tenminiteschool from '/src/assets/images/tenminiteschool.png';
import brainstation from '/src/assets/images/brainstation.png';
import windy from '/src/assets/images/wind.webp';

const AboutUsLayout: React.FC = () => {

    const brands = [
        dishantech, tenminiteschool, brainstation, windy,
        ]
    return (
        <section className="mx-auto">
            <div className="relative flex items-center h-[calc(50vh-80px)] justify-center bg-gray-100">
                <img src={car} alt="" className="object-cover w-full h-full  max-h-screen contrast-[.9] brightness-[.4] "/>
                
                <div className=" absolute w-11/12 xl:w-10/12 mx-auto max-w-4xl items-center text-basel">
                    <IntroText sectionHeader="About Us" sectionText="" /> 
                </div>
            </div>

            {/* Our Fleet */}
            <div className="w-11/12 xl:w-10/12 max-w-4xl mx-auto py-10 md:py-14 lg:py-20">
                <div className="">
                    <IntroText sectionHeader="Companey history" sectionText="" /> 
                    <p className="text-gray-700 mt-8 mb-4 text-lg">Founded in 2020, Carbuddy has been on a mission to revolutionize the car rental experience. Our vision isto provide hassle-free, affordable, and sustainable transportation solutions for everyone.</p>
                    <p className="text-gray-700 text-lg">Over the years, we've grown from a small local operation to a nationwide service, always keeping our corevalues of customer satisfaction and environmental responsibility at heart.</p>
                </div>
            </div>

            {/* Our Team
            <div className="w-full px-2 py-10 md:py-14 lg:py-20">
                <div className="w-11/12 xl:w-10/12 max-w-4xl mx-auto">
                    <IntroText sectionHeader="Our Team" sectionText="" />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src={teamMember1} alt="Team Member 1" className="w-72 h-52 mx-auto rounded-3xl" />
                            <h3 className="text-xl font-semibold mt-2">John Doe</h3>
                            <p className="text-lg">CEO</p>
                        </div>

                        <div className="text-center">
                            <img src={teamMember2} alt="Team Member 3" className="w-72 h-52 mx-auto rounded-3xl" />
                            <h3 className="text-xl font-semibold mt-2">Mike Johnson</h3>
                            <p className="text-lg">CTO</p>
                        </div>

                        <div className="text-center">
                            <img src={teamMember3} alt="Team Member 2" className="w-72 h-52 mx-auto rounded-3xl" />
                            <h3 className="text-xl font-semibold mt-2">Jane Smith</h3>
                            <p className="text-lg">COO</p>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Our Fleet */}
            <div className="w-full py-10 md:py-14 lg:py-20 bg-acn ">
                <div className="w-11/12 xl:w-10/12 max-w-4xl mx-auto">
                    <IntroText sectionHeader="Our Fleet" sectionText="" />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Economy & Compact</h3>
                            <p>Perfect for city trips and budget-conscious travelers.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Luxury & Premium</h3>
                            <p>Elevate your journey with our high-end vehicles.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">SUVs & Minivans</h3>
                            <p>Ideal for family vacations and group outings.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Electric & Hybrid</h3>
                            <p>Eco-friendly options for the environmentally conscious.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values & Commitment */}
            <div className="w-full px-2 py-10 md:py-14 lg:py-20">
                <div className="w-11/12 xl:w-10/12 max-w-4xl mx-auto">
                    <IntroText sectionHeader="Values & Commitment" sectionText="" />
                    <div className="mt-8 text-center grid grid-cols-1 md:grid-cols-2 justify-items-center  gap-8">
                        <div className="max-w-md bg-acn p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">Customer First</h3>
                            <p>We're dedicated to providing exceptional 24/7 customer service.</p>
                        </div>
                        <div className="max-w-md bg-acn p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">Transparency</h3>
                            <p>Our pricing is always clear, with no hidden fees or surprises.</p>
                        </div>
                        <div className="max-w-md bg-acn p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">Sustainability</h3>
                            <p>We're committed to expanding our fleet of electric and hybrid vehicles.</p>
                        </div>
                        <div className="max-w-md bg-acn p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-blue-600">Community</h3>
                            <p>We actively engage in local partnerships and community initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted by Top Brands */}
            <div className="w-full py-10 md:py-14 lg:py-20 bg-acn ">
                <div className="w-11/12 xl:w-10/12 max-w-6xl mx-auto">
                    <IntroText sectionHeader="Trusted by Top Brands" sectionText="" />
                    <div className="mt-8 flex flex-wrap gap-8 justify-center items-center">
                        {
                            brands.map((logo, index) => (
                                <div key={index} className="flex justify-center w-48 h-fit ">
                                    <img src={logo} alt={`Brand ${index + 1}`} className="bg-basel p-3 rounded-lg object-contain" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>.
        </section>
    );
};

export default AboutUsLayout;




            // {/* Company History */}
            // <div className="my-10">
            // <h1 className="text-4xl font-bold mb-4">The Begaining</h1>
            // <p className="text-lg">
            //     Founded in 2020, CarBuddy is committed to providing the best car rental services. Our mission is to make car rentals easy, affordable, and accessible for everyone. Our vision is to be the leading car rental service provider known for exceptional customer service and a wide range of vehicles.
            // </p>
            // </div>

            // {/* Our Team */}
            // <div className="my-10">
            // <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            // <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            //     <div className="text-center">
            //         <img src={teamMember1} alt="Team Member 1" className="w-72 h-52 mx-auto rounded-3xl" />
            //         <h3 className="text-xl font-semibold mt-2">John Doe</h3>
            //         <p className="text-lg">CEO</p>
            //     </div>

            //     <div className="text-center">
            //         <img src={teamMember2} alt="Team Member 3" className="w-72 h-52 mx-auto rounded-3xl" />
            //         <h3 className="text-xl font-semibold mt-2">Mike Johnson</h3>
            //         <p className="text-lg">CTO</p>
            //     </div>

            //     <div className="text-center">
            //         <img src={teamMember3} alt="Team Member 2" className="w-72 h-52 mx-auto rounded-3xl" />
            //         <h3 className="text-xl font-semibold mt-2">Jane Smith</h3>
            //         <p className="text-lg">COO</p>
            //     </div>
            // </div>
            // </div>

            // {/* Our Fleet */}
            // <div className="my-10">
            // <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
            // <p className="text-lg">
            //     We offer a wide range of vehicles to suit your needs, including economy cars, luxury cars, SUVs, and more. Whether you're looking for a budget-friendly option or a high-end vehicle, we have something for everyone.
            // </p>
            // </div>

            // {/* Values & Commitment */}
            // <div className="my-10">
            // <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
            // <p className="text-lg">
            //     At CarBuddy, we are committed to providing exceptional customer service and promoting sustainability. We strive to make a positive impact on the environment by offering eco-friendly vehicle options and implementing sustainable practices in our operations.
            // </p>
            // </div>

            // {/* Brands that Trust Our Services */}
            // {/* <div className="my-10">
            //     <h2 className="text-3xl font-bold mb-4">Brands that Trust Our Services</h2>
            //     <div className="flex justify-center items-center gap-8">
            //         <img src={brand1} alt="Brand 1" className="w-32 h-32 object-contain" />
            //         <img src={brand2} alt="Brand 2" className="w-32 h-32 object-contain" />
            //         <img src={brand3} alt="Brand 3" className="w-32 h-32 object-contain" />
            //     </div>
            // </div> */}

            // {/* Contact Information */}
            // <div className="my-10">
            // <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
            // <p className="text-lg">
            //     Phone: (123) 456-7890<br />
            //     Email: info@carbuddy.com<br />
            //     Address: 1234 Elm St, Los Angeles, CA 90001
            // </p>
            // </div>