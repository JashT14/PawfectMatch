import noPhoto from "../../assets/images/noPhoto.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DogCardEditRemove = ({
  dogName,
  dogBreed,
  location,
  dogId,
  // dogProfilePhoto,
}) => {
  const navigate = useNavigate();

  // Show dog profile photo if it exists:
  let mainDogPhoto = noPhoto;
  // if (dogProfilePhoto.length) {
  //   mainDogPhoto = dogProfilePhoto;
  // } else {
  //   mainDogPhoto = noPhoto;
  // }

  //REMOVE DOG FROM THE DATABASE (based on the dogId):
  const handleRemoveDog = async (dogId) => {
    try {
      // console.log(dogId);
      const response = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/deletedogs/${dogId}`,
      );
      const removeDogState = response.data;
      navigate(0);
      console.log("dog removed from the DB", removeDogState);
    } catch (error) {
      console.log(error);
      console.log("Error fetching dog information");
    }
  };

  return (
    <div className="card-results-dogs flex h-[8rem] w-[60.0rem] items-center">
      <div className="dogs-info-photo flex items-center">
        <div className="dog-photo float-left ml-[1rem] mr-[1.5rem] h-[5rem] w-[5rem] cursor-pointer rounded-full object-cover">
          <img
            src={mainDogPhoto}
            alt={dogName}
            onError={(e) => {
              e.target.src = noPhoto;
            }}
          />
        </div>
        <div className="dogs-info font-bold">
          <h1 className="text-[1.00rem] text-white">
            Name:&nbsp;&nbsp;&nbsp;{dogName}
          </h1>
          <h2 className="text-[1.00rem] text-white">
            Breed:&nbsp;&nbsp;&nbsp;{dogBreed}
          </h2>
          <h2 className="text-[1.00rem] text-white">
            Location:&nbsp;&nbsp;&nbsp;{location}
          </h2>
        </div>
      </div>
      <div className="flex">
        <button
          className="custom-button-darkest-card ml-[7rem] mr-[2rem] h-[3.0rem] w-[11.0rem]"
          type="button"
          onClick={() => navigate(`/editdog/${dogId}`)}
        >
          EDIT
        </button>
        <button
          className="custom-button-darkest-card ml-[1rem] h-[3.0rem] w-[11.0rem]"
          type="button"
          onClick={() => handleRemoveDog(dogId)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default DogCardEditRemove;

// import noPhoto from "../../assets/images/noPhoto.png";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const DogCardEditRemove = ({
//   dogName,
//   dogBreed,
//   location,
//   dogId,
//   dogProfilePhoto,
// }) => {
//   const navigate = useNavigate();
//   // Show dog profile photo if it exists:
//   let mainDogPhoto;
//   if (dogProfilePhoto.length) {
//     mainDogPhoto = dogProfilePhoto;
//   } else {
//     mainDogPhoto = noPhoto;
//   }
//   //REMOVE DOG FROM THE DATABASE (based on the dogId):
//   const handleRemoveDog = async (dogId) => {
//     try {
//       const response = await axios
//         .delete
//         // `${import.meta.env.VITE_REACT_APP_BASE_URL}/dog`,
//         // { withCredentials: true },
//         (); // Aim: remove dog with current dogId from the DB
//       const removeDogState = await response.data;
//       console.log("dog removed from the DB", removeDogState);
//       navigate("/managedogs");
//       //UPDATE THE LIST OF DOGS SHOWN IN MANAGE DOGS! CHECK IF IT'S DOING THAT!!!
//     } catch (error) {
//       console.log("Error fetching dog information");
//     }
//   };
//   return (
//     <div className="card-results-dogs flex h-[8rem] w-[60.0rem] items-center">
//       <div className="dogs-info-photo flex items-center">
//         <div
//           className="dog-photo float-left ml-[1rem] mr-[1.5rem] h-[5rem] w-[5rem] cursor-pointer rounded-full object-cover"
//           onClick={() => navigate(`/dogdetails/${dogId}`)}
//         >
//           <img
//             src={mainDogPhoto}
//             alt={dogName}
//             onError={(e) => {
//               e.target.src = noPhoto;
//             }}
//           />
//         </div>
//         <div className="dogs-info font-bold">
//           <h1 className="text-[1.00rem] text-white">
//             Name:&nbsp;&nbsp;&nbsp;{dogName}
//           </h1>
//           <h2 className="text-[1.00rem] text-white">
//             Breed:&nbsp;&nbsp;&nbsp;{dogBreed}
//           </h2>
//           <h2 className="text-[1.00rem] text-white">
//             Location:&nbsp;&nbsp;&nbsp;{location}
//           </h2>
//         </div>
//       </div>
//       <div className="flex">
//         <button
//           className="custom-button-darkest-card ml-[7rem] mr-[2rem] h-[3.0rem] w-[11.0rem]"
//           type="button"
//           onClick={() => {
//             navigate(`/editdog/${dogId}`);
//           }}
//         >
//           EDIT
//         </button>
//         <button
//           className="custom-button-darkest-card ml-[1rem] h-[3.0rem] w-[11.0rem]"
//           type="button"
//           onClick={() => {
//             handleRemoveDog(dogId);
//           }}
//         >
//           REMOVE
//         </button>
//       </div>
//     </div>
//   );
// };
// export default DogCardEditRemove;