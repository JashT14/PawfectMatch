import dog1 from "../assets/dog1.jpg";
//import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section id="hero" className>
        {/* Image with fixed size */}
        <img
          src={dog1}
          alt="img"
          className="z-10 h-[221px] w-[731px] mx-auto"
        />

        <div className="max-w-screen-lg mx-auto p-4 text-center">
          {/* Paragraph */}
          <p className="text-darkest">
            Welcome to PawfectMatch, the ultimate platform for dog lovers!
            Whether you are looking for a furry friend to adopt, or you want to
            help out a dog in need of some exercise, we have you covered.
            PawfectMatch connects you with local associations that rescue and
            care for dogs, as well as volunteers who are willing to walk them.
            You can browse through hundreds of profiles of adorable dogs, filter
            by breed, size, age, and personality, and find your perfect match.
          </p>
          <p className="text-darkest">
            You can also register as a volunteer or an association, and create
            your own profile to showcase your dog or your services. PawfectMatch
            makes it easy and fun to find, adopt, or walk a dog in your area.
            Join us today and discover the joy of dog companionship!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1100px] rounded-lg p-8">
            {/* Left Column */}
            <div className="bg-darkest p-8 rounded-lg">
              {/* Left Column Content */}
              <h6 className="text-white text-center text-base md:text-lg lg:text-lg">
                ADOPT A DOG
              </h6>

              <div className="mt-4">
                <p className="text-white text-center">
                  Browse nearby shelters for dogs that are looking for a new
                  home.
                </p>
              </div>
              <div className="mt-4">
                <button className="text-darkest bg-white px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Find Dogs
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-darkest p-8 rounded-lg">
              {/* Right Column Content */}
              <h6 className="text-white text-center text-base md:text-lg lg:text-lg">
                WALK A DOG
              </h6>

              <div className="mt-4">
                <p className="text-white text-center">
                  Browse nearby shelters for dogs that need a buddy to go on
                  walks together.
                </p>
              </div>
              <div className="mt-4">
                <button className="text-darkest bg-white px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Find Shelters
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h6 className="text-darkest text-center text-base md:text-lg lg:text-lg">
              Are you an association?
            </h6>

            <h6 className="text-darkest text-center text-base md:text-lg lg:text-lg">
              Sign Up or Login to find Volunteers and potential Adopters.
            </h6>
          </div>
        </div>
      </section>
      {/*       <Footer />
       */}
    </>
  );
};

export default Home;
