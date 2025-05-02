import { useState } from "react";
import { useGetAllCarsQuery } from "../../redux/api/BaseApi";
import { TCar } from "../../types";
import CarCard from "./CarCard";
import ReactPaginate from "react-paginate";
import Loader from "./Loader";

export const CarShowcase = () => {
    const [carOffset, setCarOffset ] = useState(0);
    
    const { data, isLoading } = useGetAllCarsQuery({})
    // cout(data);

    if( isLoading){
        return <Loader/>
    }

    const { data: allCars } = data
    // cout(allCars);
    

    const maxCars = 12;

    const endOffset = carOffset + maxCars;
    const currentCars = allCars?.slice( carOffset, endOffset );
    const pageCount = Math.ceil(allCars?.length/ maxCars);

    const handlePageClick = ( e: { selected: number } ) =>{
        const newOffset = (e.selected * maxCars) % allCars.length;
        setCarOffset(newOffset);
    }

    return <div className=" w-11/12 xl:w-10/12 mx-auto px-2 py-10 lg:py-20">
            <div className=" w-fit mx-auto my-8 xl:my-10 flex flex-wrap justify-center items-center gap-8">
            {/* <div className="border w-fit mx-auto my-8 xl:my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center content-center"> */}
                {
                    currentCars.map((car:TCar) => <CarCard key={car?._id} base={''} car={car}/>)
                }
            </div>

            {/* Pagination */}
            <div className=" w-11/12 xl:w-10/12 mx-auto">
                <ReactPaginate  breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} activeClassName="active" disableInitialCallback={true} className="page w-fit mx-auto flex gap-4 "/>
            </div>
        </div>
};

