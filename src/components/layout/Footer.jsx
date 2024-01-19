import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-darkest">
      <footer className="mx-auto flex h-[4.0rem] w-[97%] items-center justify-center shadow-inner">
        <ul className="font-customFont flex gap-6 text-[1.0rem] font-semibold text-white md:flex-row md:items-center md:gap-[7vw] ">
          <li>
            <NavLink to="/faq">FAQ</NavLink>{" "}
          </li>
          <li>COPYRIGHT</li>
          <li>
            <NavLink to="/feedback">FEEDBACK</NavLink>{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
