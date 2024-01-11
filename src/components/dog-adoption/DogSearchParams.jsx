import { useState, useEffect } from "react";
import Location from "./Location";
import ResultsDogsAdoption from "./ResultsDogsAdoption";
import fetchBreedList from "./fetchBreedList";
import fetchCountries from "./fetchCountries";
import fetchStates from "./fetchStates";
import transformToReadableString from "../../utils/transformToReadableString";
import fetchCities from "./fetchCities";

// FOR TESTING PURPOSES: Array with dummy data (available dogs for adoption):
const DOGS = [
  {
    dogId: 1,
    dogName: "Balu",
    dogBreed: "Golden Retriever",
    dogAge: "more than 2 years",
    country: "Portugal",
    state: "Madeira",
    city: "Funchal",
    dogDescription: "blablablablablabla",
    dogPhotos: [
      "http://pets-images.dev-apis.com/pets/dog25.jpg",
      "http://pets-images.dev-apis.com/pets/dog26.jpg",
      "http://pets-images.dev-apis.com/pets/dog27.jpg",
      "http://pets-images.dev-apis.com/pets/dog28.jpg",
      "http://pets-images.dev-apis.com/pets/dog29.jpg",
    ],
  },
  {
    dogId: 2,
    dogName: "Feijão",
    dogBreed: "Unknown",
    dogAge: "less than 6 months",
    country: "Portugal",
    state: "Lisbon",
    city: "Lisbon",
    dogDescription: "blablablablablabla",
    dogPhotos: [
      "http://pets-images.dev-apis.com/pets/dog37.jpg",
      "http://pets-images.dev-apis.com/pets/dog38.jpg",
      "http://pets-images.dev-apis.com/pets/dog39.jpg",
    ],
  },
  {
    dogId: 3,
    dogName: "Luna",
    dogBreed: "Unknown",
    dogAge: "more than 2 years",
    country: "Portugal",
    state: "Lisbon",
    city: "Lisbon",
    dogDescription: "blablablablablabla",
    dogPhotos: [
      // "http://pets-images.dev-apis.com/pets/dog35.jpg",
      // "http://pets-images.dev-apis.com/pets/dog36.jpg",
    ],
  },
];

//dogAge (options: up to 6 months, 6 months to 2 years, more than 2 years)

const DogSearchParams = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryIso2, setSelectedCountryIso2] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateIso2, setSelectedStateIso2] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [filteredDogsArray, setFilteredDogsArray] = useState([]); //Array that contains dogs that are compatible with user input

  useEffect(() => {
    fetchCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    fetchStates(selectedCountryIso2).then((states) => {
      setStates(states);
    });
  }, [selectedCountryIso2]);

  useEffect(() => {
    const fetchDataCities = async () => {
      if (selectedCountryIso2 && selectedStateIso2) {
        const fetchedCities = await fetchCities(
          selectedCountryIso2,
          selectedStateIso2,
        );
        setCities(fetchedCities);
      }
    };
    fetchDataCities();
  }, [selectedCountryIso2, selectedStateIso2]);

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
      filteredDogs = DOGS.filter((dog) => dog.country === selectedCountry);
    } else if (selectedCity === "All" && selectedBreed === "All") {
      filteredDogs = DOGS.filter(
        (dog) => dog.country === selectedCountry && dog.state === selectedState,
      );
    } else if (selectedBreed === "All") {
      filteredDogs = DOGS.filter(
        (dog) =>
          dog.country === selectedCountry &&
          dog.state === selectedState &&
          dog.city === selectedCity,
      );
    } else if (selectedState === "All" && selectedCity === "All") {
      filteredDogs = DOGS.filter(
        (dog) =>
          dog.country === selectedCountry && dog.dogBreed === selectedBreed,
      );
    } else if (selectedCity === "All") {
      filteredDogs = DOGS.filter(
        (dog) =>
          dog.country === selectedCountry &&
          dog.state === selectedState &&
          dog.dogBreed === selectedBreed,
      );
    } else {
      filteredDogs = DOGS.filter(
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
            className="custom-darkest-card ml-[6.0rem] h-[32rem] w-[30.0rem] "
          >
            <div className="location-info mt-[2.0rem] flex justify-start space-x-[1.0rem]">
              <h1 className="text-lightest mb-2 p-0 text-[1.125rem] font-semibold tracking-wide">
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
              <h1 className="text-lightest text-[1.125rem] font-semibold tracking-wide">
                BREED:
              </h1>
              <label htmlFor="breeds">
                <select
                  className="custom-select-option w-[18rem]"
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
              <button className="custom-button-darkest-card h-[3.75rem] w-[9.0rem]">
                FIND A DOG
              </button>
            </div>
          </form>
        </div>

        <div className="two-columns-right ml-[6.0rem] mr-[0rem] w-full pl-0 lg:w-1/2 lg:flex-grow">
          <ResultsDogsAdoption filteredDogsArray={filteredDogsArray} />
        </div>
      </div>
    </div>
  );
};

export default DogSearchParams;
