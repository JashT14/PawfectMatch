import Dogimage2 from "../Assets/Dogimage2.jpg";
import Footer from "./Footer";

const AssociationHome = () => {
  return (
    <>
      <section id="hero" className>
        {/* Image with fixed size */}
        <img
          src={Dogimage2}
          alt="img"
          className="z-10 h-[221px] w-[731px] mx-auto"
        />

        <div className="max-w-screen-lg mx-auto p-4 text-center">
          {/* Paragraph */}
          <p className="text-darkest">Welcome to PawfectMatch!</p>
          <p className="text-darkest">
            As an association you have the opportunity to introduce dogs that
            are looking for a new home to potential Adopters and look for
            Volunteers to walk the dogs you are housing.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1100px] rounded-lg p-8">
            {/* Left Column */}
            <div className="bg-darkest p-8 rounded-lg">
              {/* Left Column Content */}
              <h6 className="text-white text-center text-base md:text-lg lg:text-lg">
                DOG ADOPTION
              </h6>

              <div className="mt-4">
                <p className="text-white text-center">
                  Looking for a new home for your dogs? Post them and add useful
                  information to help them find a pawfect home.
                </p>
              </div>
              <div className="mt-4">
                <button className="text-darkest bg-white px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Add Dog
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-darkest p-8 rounded-lg">
              {/* Right Column Content */}
              <h6 className="text-white text-center text-base md:text-lg lg:text-lg">
                VOLUNTEERS
              </h6>

              <div className="mt-4">
                <p className="text-white text-center pb-5">
                  Find volounteers to take your dogs on walks.
                </p>
              </div>
              <div className="mt-4">
                <button className="text-darkest bg-white px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Find Volunteers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AssociationHome;
