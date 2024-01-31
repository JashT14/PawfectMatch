import { useState, useEffect } from "react";
import Location from "./Location";
import ResultsDogsAdoption from "./ResultsDogsAdoption";
import fetchBreedList from "../../utils/fetchBreedList";
import transformToReadableString from "../../utils/transformToReadableString";
import DOGSarray from "./DOGSarray";
import { useLocationData } from "../../utils/locationData";

const DogSearchParams = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryIso2, setSelectedCountryIso2] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateIso2, setSelectedStateIso2] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [filteredDogsArray, setFilteredDogsArray] = useState([]); //Array that contains dogs that are compatible with user input

  const { countries, states, cities } = useLocationData(
    selectedCountryIso2,
    selectedStateIso2,
  );

  // fetch breeds (DOG-CEO-API) when the component mounts and update its state with fetched breeds:
  useEffect(() => {
    fetchBreedList().then((breeds) => {
      setBreeds(breeds);
    });
  }, []);

  // call requestFilteredDogs function onSubmit
  useEffect(() => {
    requestFilteredDogs();
    console.log("run requestFilteredDogs");
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // FOR TESTING PURPOSES: filter the array DOGS containing dummy data to get results:
  function requestFilteredDogs() {
    let filteredDogs;
    if (
      selectedState === "All" &&
      selectedCity === "All" &&
      selectedBreed === "All"
    ) {
      filteredDogs = DOGSarray.filter((dog) => dog.country === selectedCountry);
    } else if (selectedCity === "All" && selectedBreed === "All") {
      filteredDogs = DOGSarray.filter(
        (dog) => dog.country === selectedCountry && dog.state === selectedState,
      );
    } else if (selectedBreed === "All") {
      filteredDogs = DOGSarray.filter(
        (dog) =>
          dog.country === selectedCountry &&
          dog.state === selectedState &&
          dog.city === selectedCity,
      );
    } else if (selectedState === "All" && selectedCity === "All") {
      filteredDogs = DOGSarray.filter(
        (dog) =>
          dog.country === selectedCountry && dog.dogBreed === selectedBreed,
      );
    } else if (selectedCity === "All") {
      filteredDogs = DOGSarray.filter(
        (dog) =>
          dog.country === selectedCountry &&
          dog.state === selectedState &&
          dog.dogBreed === selectedBreed,
      );
    } else {
      filteredDogs = DOGSarray.filter(
        (dog) =>
          dog.country === selectedCountry &&
          dog.state === selectedState &&
          dog.city === selectedCity &&
          dog.dogBreed === selectedBreed,
      );
    }

    console.log("filteredDogs", filteredDogs);
    setFilteredDogsArray(filteredDogs);
  }

  return (
    <div className="">
      <h1 className="text-darkest font-customFont flex justify-center p-[2.38rem] text-[1.25rem] font-semibold">
        FIND DOGS
      </h1>
      <div className="flex flex-wrap">
        <div className="two-columns-left w-full basis-[38rem] pr-0 lg:w-[1/2]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit");
              requestFilteredDogs();
            }}
            className="custom-darkest-card ml-[6.0rem] h-[32rem] w-[32.50rem] "
          >
            <div className="location-info mt-[2.0rem] flex justify-start space-x-[1.0rem]">
              <h1 className="mb-2 mt-[0.3rem] p-0 text-[1.125rem] font-semibold tracking-wide text-white">
                LOCATION:
              </h1>
              <div>
                <Location
                  countries={countries}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  setSelectedCountryIso2={setSelectedCountryIso2}
                  states={states}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                  setSelectedStateIso2={setSelectedStateIso2}
                  cities={cities}
                  selectedCity={selectedCity}
                  setSelectedCity={setSelectedCity}
                />
              </div>
            </div>

            <div className="breed-info mt-[2rem] flex justify-start space-x-[3.12rem] pt-0">
              <h1 className="mt-[0.3rem] text-[1.125rem] font-semibold tracking-wide text-white">
                BREED:
              </h1>
              <label htmlFor="breeds">
                <select
                  className="custom-select-option w-[20rem]"
                  id="breeds"
                  value={selectedBreed}
                  onChange={(e) => {
                    setSelectedBreed(e.target.value);
                  }}
                >
                  <option key="">Breed</option>
                  <option key="allBreed">All</option>
                  <option key="unknown">Unknown</option>
                  {breeds.map((dogBreed) => (
                    <option key={dogBreed}>
                      {transformToReadableString(dogBreed)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex justify-center">
              <button className="custom-button-darkest-card h-[3.0rem] w-[9.0rem]">
                FIND A DOG
              </button>
            </div>
          </form>
        </div>

        <div className="two-columns-right ml-[6.0rem] mr-[0rem] mt-[2rem] w-full pl-0 lg:w-1/2 lg:flex-grow">
          <ResultsDogsAdoption filteredDogsArray={filteredDogsArray} />
        </div>
      </div>
    </div>
  );
};

export default DogSearchParams;
