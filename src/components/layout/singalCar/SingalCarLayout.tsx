import { useLocation, } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useToRoute } from "../../../hooks/useToRoute";

type Feature = string;

interface FormData {
  selectedDate: Date | null;
  pickedFeatures: Feature[];
}

const SingalCarLayout = () => {
  const location = useLocation();
  const goToRoute = useToRoute()

  const { state } = location;
  // console.log(state);
  const { name, image, category, passengers, transmission, luggage, area, price, model, drive, engine, power, fuel, mileage, features, addfeatures} = state;


  const { control, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      selectedDate: null,
      pickedFeatures: [],
    },
  });

  const pickedFeatures = watch("pickedFeatures");

  const handleAddedFeature = (feature: Feature) => {
    setValue(
      "pickedFeatures",
      pickedFeatures.includes(feature)
        ? pickedFeatures.filter((item) => item !== feature)
        : [...pickedFeatures, feature]
    );
  };

  const generateBookingId = () => {
    const array = new Uint8Array(12);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').slice(0, 12);
};

  const onSubmit: SubmitHandler<FormData> = (data) => {
    generateBookingId();

    const bookingDetails = {
      bookingId: generateBookingId(),
      addedFeatures: data.pickedFeatures,
      // date: data.selectedDate,
      carDetails: state,
    };
    // console.log(bookingDetails);
    goToRoute( `confirmation`, bookingDetails);
  };

  const frozenDates = [
    new Date(2025, 0, 20),
    new Date(2025, 0, 25),
    new Date(2025, 0, 30),
  ];

  const isDateDisabled = (date: Date) => {
    return frozenDates.some(
      (frozenDate) => frozenDate.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="w-11/12 xl:w-10/12 max-w-5xl mx-auto px-2 my-10">
      <div className="w-full mx-auto">
        <img src={image} alt={name} className="rounded-xl" />
      </div>
      <div className="mt-10">
        <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>

        <div className="md:flex justify-between items-start">
          <div className="flex text-xl font-normal">
            <p>{model}</p>
            <p>&ensp;.&ensp;</p>
            <p>{category}</p>
          </div>

          <div className="my-1 md:m-0">
            <p className="font-bold text-3xl text-right">
              {price}
              <span className="text-lg font-normal">/day</span>
            </p>
            <p className="text-lg font-normal">
              {area.address}, <span className="text-lg font-medium">{area.city}</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="my-4 text-2xl font-semibold">Details</h4>

          <div className="divider divider-neutral"></div>

          <div className="text-lg mb-6 grid grid-rows-1 md:grid-rows-5 grid-flow-col gap-2">
            <p>
              Drive: <span className="font-medium">{drive}</span>
            </p>
            <p>
              Engine: <span className="font-medium">{engine}</span>
            </p>
            <p>
              Engine Power: <span className="font-medium">{power}</span>
            </p>
            <p>
              Fuel: <span className="font-medium">{fuel}</span>
            </p>
            <p>
              Mileage: <span className="font-medium">{mileage}</span>
            </p>
            <p>
              Transmission: <span className="font-medium">{transmission}</span>
            </p>
            <p>
              Passengers: <span className="font-medium">{passengers} people</span>
            </p>
            <p>
              Luggage: <span className="font-medium">{luggage} units</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="my-4 text-2xl font-semibold">Features</h4>

          <div className="divider divider-neutral"></div>

          <div className="text-lg grid grid-rows-1 md:grid-rows-3 grid-flow-col gap-2">
            {features.map((feature: string, index: string) => (
              <p key={index} className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {feature}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="my-4 text-2xl font-semibold">Additional Features To Choose</h4>

          <div className="divider divider-neutral"></div>

          <div className="text-lg grid grid-cols-1 md:grid-cols-2 gap-2">
            {addfeatures.map((addfeature: string, index: string) => (
              <div key={index} className="flex gap-2">
                <input
                  type="checkbox"
                  id={`${index}`}
                  value={addfeature}
                  onChange={() => handleAddedFeature(addfeature)}
                />
                <label htmlFor={addfeature} className="">
                  {addfeature}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <h2 className="my-4 text-2xl font-semibold">Select a Date</h2>
          <Controller
            control={control}
            name="selectedDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                filterDate={(date) => !isDateDisabled(date)}
                placeholderText="yyyy-MM-dd"
                dateFormat="yyyy-MM-dd"
                className="border rounded-lg p-2 text-base text-based dark:bg-acn dark:text-basel"
              />
            )}
          />
          {watch("selectedDate") && (
            <p className="text-lg mt-4">
              Selected Date: <strong>{watch("selectedDate")?.toDateString()}</strong>
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          className="btn border-none rounded-full px-6 text-lg bg-scnd"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingalCarLayout;