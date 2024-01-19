import { useState, useEffect } from "react";
import Location from "../dog-adoption/Location";
import fetchCountries from "../dog-adoption/fetchCountries";
import fetchStates from "../dog-adoption/fetchStates";
import fetchCities from "../dog-adoption/fetchCities";
import { useLocation } from "react-router-dom";
import noPhoto from "../../assets/images/noPhoto.png";

const UserProfile = () => {
  const location = useLocation();
  const { newUser } = location.state || {};
  console.log("newUser in UserProfile", newUser);
  console.log("newUser in UserProfile UserType", newUser.userType);

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

  const handleCheckbox = function () {
    if (newUser.userType === "association") {
      if (!isChecked) {
        newUser.helpDogWalking = true;
        console.log(
          "Association needs help with dog walking",
          newUser.helpDogWalking,
        );
      } else {
        newUser.helpDogWalking = false;
        console.log(
          "Association doesn't needs help with dog walking",
          newUser.helpDogWalking,
        );
      }
    } else if (newUser.userType === "regular") {
      if (!isChecked) {
        // TO DO!!! : move user to the array of volunteers
        console.log("go to the list of volunteers");
      } else {
        console.log("continues as a regular user");
      }
    } else {
      if (!isChecked) {
        // TO DO!!! : move user to the array of regular users
        console.log("go to the list of regular users");
      } else {
        console.log("continues as a volunteer");
      }
    }
  };

  return (
    <div className="profile-container pt-[3rem]">
      <h1 className="text-darkest mb-[4.0rem] flex justify-start pl-[3rem] text-[1.25rem] font-bold">
        USER PROFILE:
      </h1>
      <div className="container-two-columns grid grid-cols-1 gap-0 lg:w-[80rem] lg:grid-cols-2">
        <div className="left-column pl-[3rem] lg:col-span-1">
          <form className="flex flex-col ">
            {newUser.userType === "association" ? (
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
                className="user-data-input bg-darkest mt-[0.5rem] h-[2.4rem] w-[28.0rem] shrink-0 break-all px-5 py-5 pb-[6.0rem] text-justify leading-5 text-white"
                //contentEditable="true"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="(max. 200 characters)"
              />
            </div>

            <div className="ml-[0rem] mt-[2rem] flex items-center justify-start">
              <input
                type="checkbox"
                id="confirmationCheckbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(!isChecked);
                  handleCheckbox();
                }}
              />

              <label
                htmlFor="confirmationCheckbox"
                className="text-darkest ml-[1.0rem] text-[1.00rem] font-bold"
              >
                {newUser.userType === "association"
                  ? "Do you need help with dog walking?"
                  : newUser.userType === "regular"
                    ? "Do you want to become a volunteer?"
                    : "Do you want to stop being a volunteer?"}
              </label>
            </div>
          </form>
        </div>
        <div className="right-column pl-[3rem] lg:col-span-1 ">
          {newUser.userType === "association" ? (
            <h1 className="text-darkest mb-[1.5rem] ml-[3rem] font-bold">
              {" "}
              ADD/CHANGE LOGO (optional){" "}
            </h1>
          ) : (
            <h1 className="text-darkest mb-[1.5rem] ml-[5rem] font-bold">
              {" "}
              ADD/CHANGE PHOTO (optional){" "}
            </h1>
          )}
          <div className=" ml-[3rem] mt-[2rem] flex flex-wrap justify-start ">
            <img
              key={newUser.id}
              className="h-[20rem] w-[20rem] object-cover"
              src={noPhoto}
              alt={newUser.id}
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
      <div className="ml-[30rem] mt-[1rem] flex">
        <button
          className="custom-button-over-white-bg h-[3.0rem] w-[11.0rem]"
          //onClick={() => TO DO!!!
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
