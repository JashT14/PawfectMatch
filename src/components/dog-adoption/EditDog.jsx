import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Location from "./Location";
import fetchBreedList from "../../utils/fetchBreedList";
import transformToReadableString from "../../utils/transformToReadableString";
import { useLocationData } from "../../utils/locationData";
import noPhoto from "../../assets/images/noPhoto.png";
import { UserContext } from "../context/UserContext";

const EditDog = () => {
  const { dogId } = useParams(); //the value dogId from useParams is a string (need to transform into a number) (dogId comes from the path indicated in App.jsx)
  console.log("dogId", dogId);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryIso2, setSelectedCountryIso2] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateIso2, setSelectedStateIso2] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogName, setDogName] = useState("");
  const [dogAge, setDogAge] = useState("");
  const [dogDescription, setDogDescription] = useState("");
  const [dogPhotos, setDogPhotos] = useState([
    noPhoto,
    noPhoto,
    noPhoto,
    noPhoto,
    noPhoto,
  ]);
  const [dogProfilePhoto, setDogProfilePhoto] = useState(dogPhotos[0]); //implement feature to select profile photo
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Ensure that user not logged in cannot access this page:
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.mail; //is this the user email? if yes, can you change from mail to email?
  let userType = currentUser?.usertype;

  // useEffect(() => {
  //   if (!token || userType !== "association") {
  //     navigate("/");
  //   }
  // }, [token, userType, navigate]);

  //Get dog info - run when the component mounts:
  useEffect(() => {
    getDogInfo(dogId);
  }, []);

  //Initializing dogs info:
  const [dogInfo, setDogInfo] = useState({
    dogName: "",
    dogBreed: "",
    dogAge: "",
    country: "",
    state: "",
    city: "",
    dogDescription: "",
    dogPhotos: [],
    dogProfilePhoto: "",
    associationName: "",
  });

  //GET INFO OF THAT DOG FROM THE DB, BASED ON THE dogId:
  const getDogInfo = async (dogId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/dogs/${dogId}`,
      );

      const fetchedDogInfo = await response.data;
      console.log("dog initially fetched from the DB", fetchedDogInfo);
      setDogInfo({
        dogName: fetchedDogInfo.dogName,
        dogBreed: fetchedDogInfo.dogBreed,
        dogAge: fetchedDogInfo.dogAge,
        country: fetchedDogInfo.country,
        state: fetchedDogInfo.state,
        city: fetchedDogInfo.city,
        dogDescription: fetchedDogInfo.dogDescription,
        dogPhotos: fetchedDogInfo.dogPhotos,
        dogProfilePhoto: fetchedDogInfo.dogProfilePhoto,
      });
      //Updating component's data with the values obtained from the DB:
      setDogName(fetchedDogInfo.dogName);
      setSelectedBreed(fetchedDogInfo.dogBreed);
      setDogAge(fetchedDogInfo.dogAge);
      setSelectedCountry(fetchedDogInfo.country);
      setSelectedState(fetchedDogInfo.state);
      setSelectedCity(fetchedDogInfo.city);
      setDogDescription(fetchedDogInfo.dogDescription);
      setDogPhotos(fetchedDogInfo.dogPhotos);
      setDogProfilePhoto(fetchedDogInfo.dogProfilePhoto);
    } catch (error) {
      console.log(error);
      console.log("Error fetching dog information");
    }
  };

  // fetch location data:
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

  //Cancel input (clear all input fields)
  const handleCancelClick = () => {
    setSelectedCountry(dogInfo.country);
    setSelectedState(dogInfo.state);
    setSelectedCity(dogInfo.city);
    setSelectedBreed(dogInfo.dogBreed);
    setDogName(dogInfo.dogName);
    setDogAge(dogInfo.dogAge);
    setDogDescription(dogInfo.dogDescription);
    setDogPhotos(dogInfo.dogPhotos);
    setDogProfilePhoto(dogInfo.dogProfilePhoto);
    setError("");
    console.log("clearing all input fields");
  };

  // Change dog profile photo:
  const handleChangeDogProfilePhoto = (index) => {
    setDogProfilePhoto(dogPhotos[index]);
    console.log("Profile photo changed");
  };

  // Function to upload photos (Firebase) and send the URL to the DB
  const uploadPhoto = async () => {
    // TO DO (max. number of photos should be stablished.. maiby push the URL and stablish a max. length)
    console.log("define function to allow upload photos! - TO DO!");
  };

  // Send NEW DOG data to the data base:
  const handleEditDog = async (e) => {
    e.preventDefault();
    // Log the data being sent to the server

    console.log("Data that is going to be sent to the DB:", {
      dogName: dogName,
      dogBreed: selectedBreed,
      dogAge: dogAge,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
      dogDescription: dogDescription,
      dogPhotos: dogPhotos,
      dogProfilePhoto: dogProfilePhoto,
    });

    // Send the updated information to the BE:
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/updatedogs/${dogId}`,
        {
          dogName: dogName,
          dogBreed: selectedBreed,
          dogAge: dogAge,
          country: selectedCountry,
          state: selectedState,
          city: selectedCity,
          dogDescription: dogDescription,
          dogPhotos: dogPhotos,
          dogProfilePhoto: dogProfilePhoto,
        },
      );
      const dog = await response.data;
      alert("Dog edited");
      console.log(dog);
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <form className="add-dog" onSubmit={handleEditDog}>
      <div className="dog-info-title flex items-center">
        <h1 className="text-darkest font-customFont ml-[12rem] flex w-2/3 flex-grow justify-start p-[2.38rem] text-[1.25rem] font-semibold">
          EDIT DOG FOR ADOPTION
        </h1>
      </div>

      <div className="container-dog mt-[1rem] flex flex-wrap items-start gap-[0rem]">
        <div className="container-dog-images ml-[8.125rem] flex-shrink-0 ">
          <img
            className="h-[29.38rem] w-[29.38rem] object-cover"
            src={dogProfilePhoto}
            alt={`Profile photo of ${dogName}`}
          />
          <div className="mt-[1rem] flex cursor-pointer flex-wrap gap-4 space-x-[0.1rem]">
            {dogPhotos.map((photo, index) => (
              <img
                key={index}
                className="h-[5rem] w-[5rem] object-cover"
                src={photo}
                alt={`${dogName}-${index + 1}`}
                onClick={() => handleChangeDogProfilePhoto(index)}
              />
            ))}
          </div>
          <button
            className="custom-button-over-white-bg ml-[9rem] h-[3.0rem] w-[11.0rem]"
            type="button"
            onClick={() => uploadPhoto()}
          >
            UPLOAD PHOTO
          </button>
          <h2 className="text-darkest font-customFont flex justify-center p-[0rem] text-[1.00rem] ">
            (Click to set as Profile Photo)
          </h2>
        </div>

        <div className="flex-grow">
          <div className="container-dog-info ml-[8.125rem]">
            <div className="text-darkest mt-10 text-[1.0rem] ">
              <div className="flex shrink-0 flex-col ">
                <div className="input-field mb-[1.0rem] flex items-center ">
                  <label
                    htmlFor="dogName"
                    className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[3.7rem] text-start text-[1.00rem] font-bold"
                  >
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="dogName"
                    className="user-data-input h-[2.4rem] w-[20rem] shrink-0"
                    value={dogName}
                    onChange={(e) => setDogName(e.target.value)}
                    defaultValue={dogName}
                  />
                </div>
              </div>

              <div className="input-field mb-[1.0rem] flex items-center ">
                <label
                  htmlFor="dogAge"
                  className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[4.6rem] text-start text-[1.00rem] font-bold"
                >
                  AGE:
                </label>
                <select
                  className="custom-select-option w-[20rem]"
                  id="dogAge"
                  value={dogAge}
                  onChange={(e) => {
                    setDogAge(e.target.value);
                  }}
                  defaultValue={dogAge}
                >
                  <option key="lessThan6months">Less than 6 months</option>
                  <option key="6monthsTo2years">6 months to 2 years</option>
                  <option key="moreThan2years">More than 2 years</option>
                </select>
              </div>

              <div className="breed-info mt-[0.0rem] flex justify-start space-x-[3.12rem] pt-0">
                <label
                  htmlFor="breeds"
                  className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[0.4rem] text-start text-[1.00rem] font-bold"
                >
                  BREED:
                </label>

                <select
                  className="custom-select-option w-[20rem]"
                  id="breeds"
                  value={selectedBreed}
                  onChange={(e) => {
                    setSelectedBreed(e.target.value);
                  }}
                  defaultValue={selectedBreed}
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
              </div>

              <div className="location-info mt-[0.0rem] flex justify-start space-x-[1.0rem]">
                <h1 className="text-darkest mt-[0.50rem] shrink-0 p-0  pb-[0.5rem] pr-[0.8rem] text-[1.00rem] font-semibold tracking-wide">
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
                  {/* ADD selectedCountryIso2 and selectedStateIso2 to show previous results */}
                </div>
              </div>

              <div className="input-description mb-[0.0rem] flex ">
                <label
                  htmlFor="dogDescription"
                  className="text-darkest mr-2 mt-[1.2rem] shrink-0 pb-[1rem] pr-[0rem] text-start text-[1.00rem] font-bold"
                >
                  DESCRIPTION:
                </label>
                <textarea
                  type="text"
                  id="dogDescription"
                  className="user-data-input bg-darkest mt-[0.5rem] h-[2.4rem] w-[28.0rem] shrink-0 resize-none break-all px-4 py-4 pb-[6.0rem] text-justify leading-5 text-white"
                  value={dogDescription}
                  onChange={(e) => setDogDescription(e.target.value)}
                  placeholder="(max. 200 characters)"
                  defaultValue={dogDescription}
                />
              </div>
            </div>
            <div className="ml-[0rem] mt-[1rem] flex max-w-[66rem] justify-start gap-4">
              <div>
                <button
                  className="custom-button-over-white-bg mr-8 h-[3.0rem] w-[11.0rem]"
                  type="submit"
                >
                  SAVE CHANGES
                </button>
                <button
                  className="custom-button-over-white-bg h-[3.0rem] w-[11.0rem]"
                  type="button"
                  onClick={() => handleCancelClick()}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EditDog;
