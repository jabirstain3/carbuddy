import CarCard from "../../ui/CarCard";
import IntroText from "../../ui/section/IntroText";

const FeaturedCarLayout = () => {
    const sectionHeader = "Featured Cars";
    const sectionText = "Explore our wide range of rental services";
    const fcars = [1, 2, 3]
    return (
        <div className="w-full mx-auto px-2 py-10 lg:py-20">
            <IntroText sectionHeader={sectionHeader} sectionText={sectionText} /> 
            <div className="my-5 md:my-8 xl:my-10 flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8">
                {
                    fcars.map((car) => <CarCard key={car}/>)
                }
            </div>
            <div className=" w-fit mx-auto mt-8 lg:mt-12">
                <button className="border btn  mx-auto rounded-full py- px-8 text-xl font-bold bg-scnd">Learn More...</button>
            </div>
        </div>
    );
};

export default FeaturedCarLayout;