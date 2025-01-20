import Button from "../../shearedComponent/Button";
import CarCard from "../../ui/CarCard";
import IntroText from "../../ui/section/IntroText";

const FeaturedCarLayout = () => {
    const sectionHeader = "Featured Cars";
    const sectionText = "Explore our wide range of rental services";
    const fcars = [1, 2, 3]
    return (
        <div className="w-11/12 xl:w-10/12 mx-auto px-2 py-10 lg:py-20">
            <IntroText sectionHeader={sectionHeader} sectionText={sectionText} /> 
            <div className="my-8 xl:my-10 flex flex-wrap justify-center gap-8">
                {
                    fcars.map((car) => <CarCard key={car} base={"/cars"}/>)
                }
            </div>
            <div className=" w-fit mx-auto mt-8 lg:mt-12">
                <Button btnText="More Cars..." link="/cars" />
            </div>
        </div>
    );
};

export default FeaturedCarLayout;