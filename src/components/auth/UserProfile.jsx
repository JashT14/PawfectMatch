import { useState, useEffect } from "react";
import Location from "../dog-adoption/Location";
import fetchCountries from "../dog-adoption/fetchCountries";
import fetchStates from "../dog-adoption/fetchStates";
import fetchCities from "../dog-adoption/fetchCities";
import noPhoto from "../../assets/images/noPhoto.png";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [associationName, setAssociationName] = useState("");
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [description, setDescription] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryIso2, setSelectedCountryIso2] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateIso2, setSelectedStateIso2] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

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

  // ================  TO DO: INFO BACKEND =================
  let userType = "association"; //CHANGE THIS! TO DO! Request info to the database: useType and id (id of the logged in user, for identifying photos).
  let helpDogWalking = false;
  //console.log("userType:", userType, "need help?", helpDogWalking);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Changes made!");
    navigate("/");
    // TO DO! --> Send the following info to the database:
    // If userType=association --> nameAssociation, contactEmail,contactPhone, country, city, state, description, helpDogWalking, photo?
    // If userType = volunteer or regular --> nameFirst, nameLast, contactEmail, contactPhone, country, city, state, description, photo?, userType.
  };
  // ========================================================

  const handleCheckbox = function () {
    console.log("checked");
    if (userType === "association" && !isChecked) {
      helpDogWalking = true;
      console.log("Association needs help with dog walking", helpDogWalking);
    } else if (userType === "volunteer" && !isChecked) {
      userType === "regular";
      console.log("Stopped being a volunteer", userType);
    } else if (userType === "regular" && !isChecked) {
      userType === "volunteer";
      console.log("you are now a volunteer", userType);
    }
  };

  return (
    <div className="profile-container pt-[5rem]">
      <div className="title-and-button flex max-w-[66rem] flex-wrap justify-between">
        <h1 className="text-darkest mb-[4.0rem] flex justify-start pl-[3rem] text-[1.25rem] font-bold">
          USER PROFILE:
        </h1>
        <button
          className="bg-medium hover:bg-darkest mb-[2rem] h-[3.5rem] w-[20.0rem] rounded-[20px] text-[1.00rem] font-semibold text-white"
          onClick={() => navigate("/newdog")}
        >
          ADD DOG
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container-two-columns grid grid-cols-1 gap-0 lg:w-[80rem] lg:grid-cols-2">
          <div className="left-column flex flex-col pl-[3rem] lg:col-span-1">
            {userType === "association" ? (
              <div className="flex shrink-0 flex-col ">
                <div className="input-field mb-[1.0rem] flex items-center ">
                  <label
                    htmlFor="associationName"
                    className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[3.6rem] text-start text-[1.00rem] font-bold"
                  >
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="associationName"
                    className="user-data-input h-[2.4rem] w-[20rem] shrink-0"
                    value={associationName}
                    onChange={(e) => setAssociationName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
            ) : (
              <div className="flex shrink-0 flex-col ">
                <div className="input-field mb-[1.0rem] flex items-center ">
                  <label
                    htmlFor="nameFirst"
                    className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[3.6rem] text-start text-[1.00rem] font-bold"
                  >
                    NAME:
                  </label>
                  <input
                    type="text"
                    id="nameFirst"
                    className="user-data-input h-[2.4rem] w-[20rem] shrink-0"
                    value={nameFirst}
                    onChange={(e) => setNameFirst(e.target.value)}
                    placeholder="First Name"
                  />
                </div>

                <div className="input-field mb-[1.0rem] flex items-center ">
                  <label
                    htmlFor="nameLast"
                    className="text-darkest mr-2 shrink-0 pb-[1rem] pr-[6.8rem] text-start text-[1.00rem]"
                  >
                    {" "}
                  </label>
                  <input
                    type="text"
                    id="nameLast"
                    className="user-data-input  h-[2.4rem] w-[20rem] shrink-0"
                    value={nameLast}
                    onChange={(e) => setNameLast(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>
            )}

            <div className="input-field mb-[1.0rem] flex items-center ">
              <label
                htmlFor="contactEmail"
                className="text-darkest mr-2 mt-[0.50rem] shrink-0 pb-[0.5rem]  pr-[1.6rem] text-start text-[1.00rem] font-bold"
              >
                CONTACT:
              </label>
              <input
                type="email"
                id="contactEmail"
                className="user-data-input h-[2.4rem] w-[20rem] shrink-0"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="input-field mb-[0.0rem] flex items-center ">
              <label
                htmlFor="contactPhone"
                className="text-darkest mr-2 shrink-0 pb-[1rem] pr-[6.8rem] text-start text-[1.00rem]"
              >
                {" "}
              </label>
              <input
                type="tel"
                id="contactPhone"
                className="user-data-input h-[2.4rem] w-[20rem] shrink-0"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>

            <div className="location-info mt-[1.0rem] flex justify-start space-x-[1.0rem]">
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
              </div>
            </div>

            <div className="input-description mb-[0.0rem] flex ">
              <label
                htmlFor="description"
                className="text-darkest mr-2 mt-[1.2rem] shrink-0 pb-[1rem] pr-[0rem] text-start text-[1.00rem] font-bold"
              >
                DESCRIPTION:
              </label>
              <textarea
                type="text"
                id="description"
                className="user-data-input bg-darkest mt-[0.5rem] h-[2.4rem] w-[28.0rem] shrink-0 resize-none break-all px-4 py-4 pb-[6.0rem] text-justify leading-5 text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="(max. 200 characters)"
              />
            </div>

            <div className="ml-[0rem] mt-[2rem] flex items-center justify-start">
              <input
                type="checkbox"
                id="questionCheckbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                  handleCheckbox();
                }}
              />
              <label
                htmlFor="questionCheckbox"
                className="text-darkest ml-[1.0rem] text-[1.00rem] font-bold"
              >
                {userType === "association"
                  ? "Do you need help with dog walking?"
                  : userType === "regular"
                    ? "Do you want to become a volunteer?"
                    : "Do you want to stop being a volunteer?"}
              </label>
            </div>
          </div>
          <div className="right-column pl-[3rem] pt-[3rem] lg:col-span-1 ">
            {userType === "association" ? (
              <div>
                <h1 className="text-darkest mb-[1.5rem] ml-[6rem] text-[1.0rem] font-bold">
                  {" "}
                  ADD/CHANGE LOGO (optional){" "}
                </h1>
              </div>
            ) : (
              <h1 className="text-darkest mb-[1.5rem] ml-[6rem] text-[1.0rem] font-bold ">
                {" "}
                ADD/CHANGE PHOTO (optional){" "}
              </h1>
            )}
            <div className=" ml-[3rem] mt-[2rem] flex flex-wrap justify-start ">
              <img
                //key={user.id} //TO DO!!!: CATCH user.id
                className="h-[20rem] w-[20rem] object-cover"
                src={noPhoto}
                //alt={id} //TO DO!!!: CATCH user.id
              />
            </div>
            <div>
              <button
                className="text-darkest mouse-pointer border-darkest  mb-[2rem] ml-[9.5rem] mt-[2rem] h-[2.5rem] w-[8.0rem] rounded-[20px] border bg-white text-[0.875rem] font-bold"
                //onClick={() => TO DO!!!
              >
                UPLOAD
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[1rem] flex max-w-[66rem] justify-center">
          <button
            className="custom-button-over-white-bg h-[3.0rem] w-[11.0rem]"
            type="submit"
          >
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
