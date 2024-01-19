import noPhoto from "../../assets/images/noPhoto.png";

const Association = ({
  photo,
  id,
  associationName,
  location,
  contactPhone,
  contactEmail,
}) => {
  let mainAssociationPhoto = noPhoto;

  if (photo.length) {
    mainAssociationPhoto = photo;
  }
  return (
    <div className="card-results-dogs flex h-[9rem] w-[48.0rem] items-center">
      <div className="float-left ml-[1rem] mr-[1.5rem] h-[6rem] w-[6rem] object-cover">
        <img
          src={mainAssociationPhoto}
          alt={associationName}
          className="rounded-full"
        />
      </div>
      <div className="dogs-info">
        <h2 className="text-[1.00rem] text-white">
          Name:&nbsp;&nbsp;&nbsp;{associationName}
        </h2>
        <h2 className="text-[1.00rem] text-white">
          Location:&nbsp;&nbsp;&nbsp;{location}
        </h2>
        <h2 className="text-[1.00rem] text-white">
          Phone:&nbsp;&nbsp;&nbsp;{contactPhone}
        </h2>
        <h2 className="text-[1.00rem] text-white">
          Email:&nbsp;&nbsp;&nbsp;{contactEmail}
        </h2>
      </div>
    </div>
  );
};

export default Association;
