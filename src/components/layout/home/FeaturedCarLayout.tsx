import { useGetAllCarsQuery } from "../../../redux/api/BaseApi";
import { TCar } from "../../../types";
import Button from "../../shearedComponent/Button";
import CarCard from "../../ui/CarCard";
import Loader from "../../ui/Loader";
import IntroText from "../../ui/section/IntroText";

const FeaturedCarLayout = () => {
    const sectionHeader = "Featured Cars";
    const sectionText = "Explore our wide range of rental services";
    const { data, isLoading } = useGetAllCarsQuery({})
    // console.log(data);

    if (isLoading){
        return <Loader/>
    }

    const { data: allCars } = data
    // const featuredCar = allCars.filter(item => item.rating > 4.3 ).slice(0, 3);
    const featuredCar = allCars.slice(0, 3)
    return (
        <div className="w-11/12 xl:w-10/12 mx-auto px-2 py-10 lg:py-20">
            <IntroText sectionHeader={sectionHeader} sectionText={sectionText} /> 
            <div className="my-8 xl:my-10 flex flex-wrap justify-center gap-8">
                {
                    featuredCar.map((car:TCar) => <CarCard key={car._id} base={"/cars"} car={car}/>)
                }
            </div>
            <div className=" w-fit mx-auto mt-8 lg:mt-12">
                <Button btnText="More Cars..." link="/cars" />
            </div>
        </div>
    );
};

export default FeaturedCarLayout;