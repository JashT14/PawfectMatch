import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DOGSarray from "./DOGSarray";
import ASSOCIATIONSarray from "./ASSOCIATIONSarray";

const DogDetails = () => {
  const navigate = useNavigate();
  const { dogId } = useParams(); //the value dogId from useParams is a string (need to transform into a number)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const selectedDog = DOGSarray.find((dog) => dog.dogId === Number(dogId));
  console.log("selectedDog", selectedDog);

  const selectedDogAssociation = ASSOCIATIONSarray.find(
    (item) => item.associationName === selectedDog.associationName,
  );

  const { contactPhone, contactEmail, country, state, city } =
    selectedDogAssociation;

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className="dog-details">
      <div className="dog-details-title flex items-center">
        <button
          className="custom-button-over-lightest-bg ml-[2rem] h-[3.75rem] w-[6.5rem]"
          onClick={() => navigate("/dogsadoption")}
        >
          BACK
        </button>

        {/* When going back, previous results are not shown --> make necessary changes (query parameters) */}

        <h1 className="text-darkest font-customFont flex w-2/3 flex-grow justify-center p-[2.38rem] text-[1.25rem] font-semibold">
          DOG DETAILS
        </h1>
      </div>

      <div className="container-dog-images mt-[1rem] flex flex-wrap items-start gap-[0rem]">
        <div className="ml-[8.125rem] flex-shrink-0 ">
          <img
            className="h-[29.38rem] w-[29.38rem] object-cover"
            src={selectedDog.dogPhotos[selectedPhotoIndex]}
            alt={selectedDog.dogName}
          />
          <div className="mt-[1rem] flex cursor-pointer flex-wrap gap-4 space-x-[0.1rem]">
            {selectedDog.dogPhotos.map((photo, index) => (
              <img
                key={index}
                className="h-[5rem] w-[5rem] object-cover"
                src={photo}
                alt={`${selectedDog.dogName}-${index + 1}`}
                onClick={() => handlePhotoClick(index)}
              />
            ))}
          </div>
        </div>

        <div className="flex-grow">
          <div className="container-dog-info ml-[8.125rem]">
            <div className="text-darkest mt-10 text-[1.0rem]">
              <h2 className="mb-5">
                NAME:&nbsp;&nbsp;&nbsp;{selectedDog.dogName}
              </h2>
              <h2 className="mb-5">
                AGE:&nbsp;&nbsp;&nbsp;{selectedDog.dogAge}
              </h2>
              <h2 className="mb-5">
                BREED:&nbsp;&nbsp;&nbsp;{selectedDog.dogBreed}
              </h2>
              <h2 className="mb-5">
                LOCATION:&nbsp;&nbsp;&nbsp;
                {`${selectedDog.city}, ${selectedDog.state}, ${selectedDog.country}`}
              </h2>
              <h2 className="mb-5">
                ASSOCIATION:&nbsp;&nbsp;&nbsp;{selectedDog.associationName}
              </h2>
              <h2 className="mb-5">PHONE:&nbsp;&nbsp;&nbsp;{contactPhone}</h2>
              <h2 className="mb-5">EMAIL:&nbsp;&nbsp;&nbsp;{contactEmail}</h2>
              {/* <h2 className="mb-5">
                LOCATION:&nbsp;&nbsp;&nbsp;{`${city}, ${state}, ${country}.`}
              </h2> */}
              <h2 className="bg-darkest text-lightest mt-10 h-[10.94rem] w-[35rem] rounded-lg p-2 text-justify">
                {selectedDog.dogDescription}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
