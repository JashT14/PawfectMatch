// import { Link } from "react-router-dom";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import instagram from "../Assets/instagram.png";

const Footer = () => {
  return (
    <div id="footer" name="Feedback" className="bg-darkest p-4 text-white">
      <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
        <div>
          {/*  <h4 className="text-4xl font-bold pt-10 sm:pt-8 inline border-b-1 border-gray-500">
            Feedback
          </h4> */}
          <p className="pt-3">We appreciate your feedback </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/329ce23f-b8d3-4c8c-bcf1-fc958f919fc5"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <textarea
              name="message"
              placeholder="Enter your Feedback"
              rows="2"
              className="p02 bg-transparent border-2 rounded-md text-darkest focus:outline-none"
              style={{ paddingLeft: "10px" }}
            ></textarea>
            <button className="text-darkest bg-white px-3 py-1 my-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-row justify-center max-w-screen-lg mx-auto h-full">
          <a href="/" className="mx-2">
            <img src={twitter} alt="Twitter" className="h-5" />
          </a>
          <a href="/" className="mx-2">
            <img src={facebook} alt="Facebook" className="h-5" />
          </a>
          <a href="/" className="mx-2">
            <img src={instagram} alt="Instagram" className="h-5" />
          </a>
          <a href="/" className="mx-2">
            <img src={linkedin} alt="LinkedIn" className="h-5" />
          </a>
        </div>
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">Images courtesy - Google</p>
          <p className="text-xs text-gray-400">
            © 2024 Pawfetch. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
