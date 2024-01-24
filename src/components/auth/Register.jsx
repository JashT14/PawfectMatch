import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [userType, setUserType] = useState("association");
  const navigate = useNavigate();

  // ================  CHECK THIS CODE =================
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/register`,
        { email, password, password2, userType },
      );
      const newUser = await response.data;
      console.log(newUser);
      if (!newUser) {
        setError("Couldn't register user. Please try again.");
      }
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  // ========================================================

  return (
    <div className="login-container flex flex-col items-center justify-center pt-[3rem] ">
      <form onSubmit={handleRegister}>
        {error && (
          <p className="bg-darkGrey mb-[1rem] flex justify-center rounded-[20px] p-[0.5rem] text-white shadow-md">
            {error}
          </p>
        )}
        <h1 className="text-darkest mb-[3rem] text-center font-bold">
          {" "}
          REGISTER AS:{" "}
        </h1>
        <div className="radioButton text-darkest mb-[2rem] flex space-x-[4rem]">
          <label>
            <input
              type="radio"
              value="regular"
              name="userType"
              className="radio-button mr-[1rem]"
              onChange={() => setUserType("regular")}
            />
            Regular User
          </label>
          <label>
            <input
              type="radio"
              value="volunteer"
              name="userType"
              className="radio-button mr-[1rem]"
              onChange={() => setUserType("volunteer")}
            />
            Volunteer
          </label>
          <label>
            <input
              type="radio"
              value="association"
              name="userType"
              className="radio-button mr-[1rem]"
              onChange={() => setUserType("association")}
            />
            Association
          </label>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-[22.31rem] flex-col items-start">
            <label htmlFor="email" className="text-darkest pb-[1rem] pt-[1rem]">
              {" "}
              EMAIL:
            </label>
            <input
              type="email"
              id="email"
              className="user-data-input w-[22.31rem]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="password"
              className="text-darkest pb-[1rem] pt-[1rem]"
            >
              PASSWORD:
            </label>
            <div className="flex flex-col space-y-[1rem]">
              <input
                type="password"
                className="user-data-input w-[22.31rem]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password should have at least 6 characters"
              />
              <input
                type="password"
                className="user-data-input w-[22.31rem]"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div className="mb-[0rem] mt-[0.5rem]">
            <button
              className="custom-button-over-white-bg h-[3.0rem] w-[7.5rem]"
              type="submit"
            >
              REGISTER
            </button>
          </div>
        </div>
      </form>
      <div className="flex items-center justify-center pt-[0rem]">
        <h3 className="text-darkest pr-[2rem]"> Already have an account? </h3>
        <button
          className="text-darkest font-bold underline"
          onClick={() => navigate("/login")}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Register;
