// import { Link } from "react-router-dom";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div id="footer" name="Feedback" className="bg-darkest p-4 text-white">
      <div className="mx-auto flex  h-full max-w-screen-lg flex-col justify-center">
        <div>
          {/*  <h4 className="text-4xl font-bold pt-10 sm:pt-8 inline border-b-1 border-gray-500">
            Feedback
          </h4> */}
          <p className="pt-3">We appreciate your feedback </p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/329ce23f-b8d3-4c8c-bcf1-fc958f919fc5"
            method="POST"
            className="flex w-full flex-col md:w-1/2"
          >
            <textarea
              name="message"
              placeholder="Enter your Feedback"
              rows="2"
              className="p02 text-darkest rounded-md border-2 bg-transparent focus:outline-none"
              style={{ paddingLeft: "10px" }}
            ></textarea>
            <button className="text-darkest mx-auto my-2 flex items-center rounded-md bg-white px-3 py-1 duration-300 hover:scale-110">
              Submit
            </button>
          </form>
        </div>
        <div className="mx-auto flex h-full max-w-screen-lg flex-row justify-center">
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

// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="bg-darkest">
//       <footer className="mx-auto flex h-[4.0rem] w-[97%] items-center justify-center shadow-inner">
//         <ul className="font-customFont flex gap-6 text-[1.0rem] font-semibold text-white md:flex-row md:items-center md:gap-[7vw] ">
//           <li>
//             <NavLink to="/faq">FAQ</NavLink>{" "}
//           </li>
//           <li>COPYRIGHT</li>
//           <li>
//             <NavLink to="/feedback">FEEDBACK</NavLink>{" "}
//           </li>
//         </ul>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
