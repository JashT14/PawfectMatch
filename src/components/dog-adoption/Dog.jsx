import noPhoto from "../../assets/images/noPhoto.png";
import { Link } from "react-router-dom";

const Dog = ({ dogPhotos, dogId, dogName, dogBreed, location }) => {
  let mainDogPhoto = noPhoto;

  if (dogPhotos.length) {
    mainDogPhoto = dogPhotos[0];
  }
  return (
    <Link to={`/dogdetails/${dogId}`} className="">
      <div className="card-results-dogs flex h-[8rem] w-[48.0rem] items-center">
        <div className="float-left ml-[1rem] mr-[1.5rem] h-[5rem] w-[5rem] rounded-full object-cover">
          <img src={mainDogPhoto} alt={dogName} />
        </div>
        <div className="dogs-info">
          <h1 className="text-lightest text-[1.00rem]">
            Name:&nbsp;&nbsp;&nbsp;{dogName}
          </h1>
          <h2 className="text-lightest text-[1.00rem]">
            Breed:&nbsp;&nbsp;&nbsp;{dogBreed}
          </h2>
          <h2 className="text-lightest text-[1.00rem]">
            Location:&nbsp;&nbsp;&nbsp;{location}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Dog;