import avatericn from "/src/assets/images/pretty-profile-pictures-2tkqwa8t2rolierf.jpg"
// import Loader from "./Loader";

const ReviewCard = () => {
    const cReview = {
        "id": "1523",
        "name": "Jeni",
        "rating":3,
        "image": avatericn,
        "address": "los angelus",
        "reviewText": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam corrupti ex sapiente",
    }

    // if( isLoading ){
    //     return <Loader/>
    // }

    const { id, name, rating, image, address, reviewText } = cReview

    return (
        <div key={id} className=" carousel-item w-[300px]  h-[300px] rounded-box bg-scnd  flex-col my-3 mx-auto md:mx-3">
            <div className="rating mx-5 mt-6 ">
                <p className="font-bold text-3xl text-right">{rating}<span className="text-3xl font-semibold">/10</span> <input type="radio" name="rating-2" className="mask mask-star-2" checked readOnly/></p>
            </div>

            <p className=" m-4 h-[100px]">{reviewText}</p>

            <div className="divider divider-neutral mx-4"></div>

            <div className=" mx-4 flex justify-start items-center gap-4"> 
                <div className="w-10 h-10 flex iteam-center bg-white">
                    <img src={image} alt={name} className="object-contain rounded-full"/>
                </div>
                <div className="text-start flex flex-col ">
                    <p className="text-lg font-semibold">{name}</p>
                    <p className="text-sm font-normal">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;