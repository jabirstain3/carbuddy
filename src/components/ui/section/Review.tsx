import ReviewCard from "../ReviewCard";

const Review = () => {
    const cReviews = [ 1, 2, 3, 4, 5, 7, 8]

    return (
        <div className=" w-[300px] md:w-[648px] xl:w-[972px] mx-auto my-6 lg:my-10">
            <div className=" carousel carousel-vertical   h-[970px] text-based md:hidden">
                {
                    cReviews.map(( index ) => <ReviewCard key={index}/>)
                }
            </div>

            <div className=" carousel carousel-center hidden h-[324px] md:flex">
                {
                    cReviews.map(( index ) => <ReviewCard key={index}/>)
                }
            </div>
        </div>
    );
};

export default Review;