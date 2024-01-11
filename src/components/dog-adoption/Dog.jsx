import noPhoto from "../../assets/images/noPhoto.png";

const Dog = (props) => {
  let mainDogPhoto = noPhoto;

  if (props.dogPhotos.length) {
    mainDogPhoto = props.dogPhotos[0];
  }
  return (
    <a href={`/details/${props.dogId}`} className="">
      <div className="card-results-dogs flex h-[8rem] w-[48.0rem] items-center">
        <div className="float-left ml-[1rem] mr-[1.5rem] h-[5rem] w-[5rem] rounded-full object-cover">
          <img src={mainDogPhoto} alt={props.dogName} />
        </div>
        <div className="dogs-info">
          <h1 className="text-lightest text-[1.00rem]">
            Name:&nbsp;&nbsp;&nbsp;{props.dogName}
          </h1>
          <h2 className="text-lightest text-[1.00rem]">
            Breed:&nbsp;&nbsp;&nbsp;{props.dogBreed}
          </h2>
          <h2 className="text-lightest text-[1.00rem]">
            Location:&nbsp;&nbsp;&nbsp;{props.location}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default Dog;
