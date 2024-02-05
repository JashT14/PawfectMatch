import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ResultsDogsList from "../../components/dog-adoption/ResultsDogsList";
import axios from "axios";
import { UserContext } from "../../components/context/UserContext";
import noPhoto from "../../assets/images/noPhoto.png";
//import DogCardEditRemove from "./DogCardEditRemove";

const ManageDogs = () => {
  // const sampleDogs = [
  //   {
  //     dogName: "skdjsak",
  //     dogBreed: "Golden Retriever",
  //     location: "Portugal, Lisbon, Lisbon",
  //     dogId: "1",
  //     dogProfilePhoto: noPhoto,
  //   },
  // ];

  const [filteredDogsArray, setFilteredDogsArray] = useState([]);

  const navigate = useNavigate();

  //let userType = "association";
  const { currentUser } = useContext(UserContext);
  //const token = currentUser?.mail; //is this the user email?
  //let userType = currentUser?.usertype; //comes from the local storage

  //GET INFO OF THAT DOG FROM THE DB, BASED ON THE dogId:
  const getDogsList = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/dogs`,
        {
          withCredentials: true,
        },
      );

      const fetchedDogsList = await response.data;
      console.log("List of dogs added by this association", fetchedDogsList);
      setFilteredDogsArray(fetchedDogsList);
    } catch (error) {
      console.log("Error fetching dog information");
    }
  };
  //Get dog info - run when the component mounts:
  useEffect(() => {
    getDogsList();
  }, []);

  return (
    <div className="">
      <h1 className="text-darkest font-customFont flex justify-center p-[2.38rem] text-[1.25rem] font-semibold">
        LIST OF DOGS ADDED
      </h1>
      <button
        className="custom-button-over-white-bg2 ml-[6rem] h-[4.0rem] w-[60.0rem] cursor-pointer"
        type="button"
        onClick={() => navigate("/adddog")}
      >
        ADD DOG
      </button>
      <div className="flex flex-wrap">
        <div className="two-columns-right ml-[6.0rem] mr-[0rem] mt-[2rem] w-full pl-0 lg:w-1/2 lg:flex-grow">
          {/* {sampleDogs.map((dog) => (
            <DogCardEditRemove
              key={dog.dogId}
              dogName={dog.dogName}
              dogBreed={dog.dogBreed}
              location={dog.location}
              dogId={dog.dogId}
              dogProfilePhoto={dog.dogProfilePhoto}
            />
          ))} */}
          <ResultsDogsList filteredDogsArray={filteredDogsArray} />
        </div>
      </div>
    </div>
  );
};

export default ManageDogs;
