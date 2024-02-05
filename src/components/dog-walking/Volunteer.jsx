import noPhoto from "../../assets/images/noPhoto.png";

const Volunteer = ({ photo, name, location, contactPhone, contactEmail }) => {
  let mainVolunteerPhoto = noPhoto;
  if (photo.length) {
    mainVolunteerPhoto = photo;
  }
  return (
    <div className="card-results-dogs flex h-[9rem] w-[48.0rem] items-center">
      <div className="float-left ml-[1rem] mr-[1.5rem] h-[6rem] w-[6rem] object-cover">
        <img src={mainVolunteerPhoto} alt={name} className="rounded-full" />
      </div>
      <div className="dogs-info">
        <h2 className="text-[1.00rem] text-white">
          Name:&nbsp;&nbsp;&nbsp;{name}
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

export default Volunteer;
