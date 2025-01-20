import { useState } from "react";
import CarCard from "../../ui/CarCard";
import IntroText from "../../ui/section/IntroText";
import ReactPaginate from 'react-paginate';

// const style = {
// }

const CarlistingLayout = () => {
    const allCars = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ]

    const [carOffset, setCarOffset ] = useState(0);

    const maxCars = 9;

    const endOffset = carOffset + maxCars;
    const currentCars = allCars.slice( carOffset, endOffset );
    const pageCount = Math.ceil(allCars.length/ maxCars);

    const handlePageClick = ( e: { selected: number } ) =>{
        const newOffset = (e.selected * maxCars) % allCars.length;
        setCarOffset(newOffset);
    }

    return (
        <div>
            {/* Cars hero section */}
            <div className="relative flex items-center h-[calc(50vh-80px)] justify-center bg-gray-100">
                <img src="../../../../src/assets/images/man-parked-side-road.jpg" alt="" className="object-cover w-full h-full  max-h-screen contrast-[.9] brightness-[.4] "/>
                
                <div className=" absolute w-11/12 xl:w-10/12 mx-auto max-w-4xl items-center text-basel">
                    <IntroText sectionHeader="All Cars" sectionText="" /> 
                </div>
            </div>

            {/*  */}
            <div className=" w-11/12 xl:w-10/12 mx-auto px-2 py-10 lg:py-20">
                <div className=" w-fit mx-auto my-8 xl:my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center content-center">
                    {
                        currentCars.map((car) => <CarCard key={car} base={''}/>)
                    }
                </div>
            </div>

            <div className=" w-11/12 xl:w-10/12 mx-auto">
                <ReactPaginate  breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null} activeClassName="active" disableInitialCallback={true} className="page w-fit mx-auto flex gap-4 "/>
            </div>
        </div>
    );
};

export default CarlistingLayout;