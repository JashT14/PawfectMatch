import { useState, useEffect } from "react";
import fetchCountries from "../dog-adoption/fetchCountries";
import fetchStates from "../dog-adoption/fetchStates";
import fetchCities from "../dog-adoption/fetchCities";
import Location from "../dog-adoption/Location";
import ResultsAssociations from "./ResultsAssociations";
import ResultsVolunteers from "./ResultsVolunteers";
import dogWalking from "../../assets/images/dogWalking.jpg";
import ASSOCIATIONSarray from "../dog-adoption/ASSOCIATIONSarray";
import VOLUNTEERSarray from "../dog-adoption/VOLUNTEERSarray";

const DogWalkingSearchParams = ({ userType }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryIso2, setSelectedCountryIso2] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateIso2, setSelectedStateIso2] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredAssociationsArray, setFilteredAssociationsArray] = useState(
    [],
  );
  const [filteredVolunteersArray, setFilteredVolunteersArray] = useState([]);

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

  // call requestFilteredAssociations function onSubmit
  useEffect(() => {
    requestFilteredAssociations();
    console.log("run requestFilteredAssociations");
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    requestFilteredVolunteers();
    console.log("run requestFilteredVolunteers");
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // FOR TESTING PURPOSES: filter the array DOGS containing dummy data to get results:
  function requestFilteredAssociations() {
    let filteredAssociations;
    if (selectedState === "All" && selectedCity === "All") {
      filteredAssociations = ASSOCIATIONSarray.filter(
        (association) => association.country === selectedCountry,
      );
    } else if (selectedCity === "All") {
      filteredAssociations = ASSOCIATIONSarray.filter(
        (association) =>
          association.country === selectedCountry &&
          association.state === selectedState,
      );
    } else {
      filteredAssociations = ASSOCIATIONSarray.filter(
        (association) =>
          association.country === selectedCountry &&
          association.state === selectedState &&
          association.city === selectedCity,
      );
    }

    console.log("filteredAssociations", filteredAssociations);
    setFilteredAssociationsArray(filteredAssociations);
  }

  function requestFilteredVolunteers() {
    let filteredVolunteers;
    if (selectedState === "All" && selectedCity === "All") {
      filteredVolunteers = VOLUNTEERSarray.filter(
        (volunteer) => volunteer.country === selectedCountry,
      );
    } else if (selectedCity === "All") {
      filteredVolunteers = VOLUNTEERSarray.filter(
        (volunteer) =>
          volunteer.country === selectedCountry &&
          volunteer.state === selectedState,
      );
    } else {
      filteredVolunteers = VOLUNTEERSarray.filter(
        (volunteer) =>
          volunteer.country === selectedCountry &&
          volunteer.state === selectedState &&
          volunteer.city === selectedCity,
      );
    }

    console.log("filteredVolunteers", filteredVolunteers);
    setFilteredVolunteersArray(filteredVolunteers);
  }

  return (
    <div>
      {userType === "association" ? (
        <div className="">
          <h1 className="text-darkest font-customFont flex justify-center pt-[2.38rem] text-[1.25rem] font-semibold">
            FIND VOLUNTEERS
          </h1>
          <div className="flex flex-wrap">
            <div className="two-columns-left mt-[2rem] w-full basis-[38rem] pr-0 lg:w-[1/2]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submit");
                  requestFilteredVolunteers();
                }}
                className="custom-darkest-card ml-[6.0rem] h-[26.5rem] w-[32.0rem] "
              >
                <div className="location-info mt-[2.0rem] flex justify-start space-x-[1.0rem]">
                  <h1 className="mb-2 p-0 text-[1.125rem] font-semibold tracking-wide text-white">
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

                <div className="flex justify-center">
                  <button className="custom-button-darkest-card h-[3.0rem] w-[13.0rem]">
                    FIND VOLUNTEERS
                  </button>
                </div>
              </form>
            </div>

            <div className="two-columns-right ml-[6.0rem] mr-[0rem] mt-[2rem] w-full pl-0 lg:w-1/2 lg:flex-grow">
              <ResultsVolunteers
                filteredVolunteersArray={filteredVolunteersArray}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="dog-walking-info flex w-full flex-wrap justify-center">
            <img
              className="h-[28rem] w-full object-cover opacity-80"
              src={dogWalking}
              alt="dogWalking"
            />
          </div>
          {/* <h1 className="text-darkest font-customFont flex justify-center p-[2.38rem] text-[1.25rem] font-semibold">
        WALK A DOG
      </h1> */}

          <h1 className="text-darkest font-customFont mb-[3rem] mt-[4rem] w-full justify-center text-center text-[1.25rem] font-semibold">
            HOW CAN I HELP?
          </h1>
          <h2 className="bg-medium ml-[3.5rem] mr-[3.5rem] justify-center rounded-[20px] p-[2rem] text-center font-bold leading-5 text-white shadow-md">
            Dogs don’t only need food and a roof over their heads to thrive, but
            also affection and lots of outdoor and playtime! <br />
            <br />
            Here you can find associations that are looking for volunteers to
            walk their dogs.
          </h2>

          <h1 className="text-darkest font-customFont mt-[4rem] flex justify-center text-[1.25rem] font-semibold">
            FIND SHELTERS THAT NEED HELP
          </h1>

          <div className="dog-walking-search flex w-full flex-wrap justify-start">
            <div className="flex flex-wrap">
              <div className="dog-walking-search-left-col two-columns-left mt-[3rem] basis-[38rem] justify-start pr-0 lg:w-[1/2]">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log("submit");
                    requestFilteredAssociations();
                  }}
                  className="custom-darkest-card ml-[3.5rem] h-[27rem] w-[32.5rem] "
                >
                  <div className="location-info mt-[2.0rem] flex justify-start space-x-[1.0rem]">
                    <h1 className="mb-2 p-0 text-[1.125rem] font-semibold tracking-wide text-white">
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

                  <div className="flex justify-center">
                    <button className="custom-button-darkest-card h-[3.00rem] w-[15.0rem]">
                      FIND ASSOCIATIONS
                    </button>
                  </div>
                </form>
              </div>

              <div className="dog-walking-search-right-col two-columns-right ml-[3.5rem]  mt-[3rem] flex w-full items-start justify-start lg:w-1/2 lg:flex-grow">
                <ResultsAssociations
                  filteredAssociationsArray={filteredAssociationsArray}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogWalkingSearchParams;
