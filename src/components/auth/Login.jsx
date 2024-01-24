import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ================  TO DO: INFO BACKEND =================
  const [error, setError] = useState("");
  const { setCurrentUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/login`,
        { email, password },
      );
      const user = await response.data;
      setCurrentUser(user);
      console.log("user", user);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  // ======================================================

  return (
    <div className="login-container flex flex-col items-center justify-center pt-[12.00rem]">
      <form className="flex flex-col" onSubmit={handleLogin}>
        {error && (
          <p className="bg-darkGrey mb-[1rem] flex justify-center rounded-[20px] p-[0.5rem] text-white shadow-md">
            {error}
          </p>
        )}
        <label htmlFor="email" className="text-darkest pb-[1rem] pt-[1rem]">
          EMAIL:
        </label>
        <input
          type="email"
          id="email"
          className="user-data-input w-[22.31rem]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="text-darkest pb-[1rem] pt-[1rem]">
          PASSWORD:
        </label>
        <input
          type="password"
          id="password"
          className="user-data-input w-[22.31rem]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mb-[2rem] mt-[0.5rem] self-center">
          <button
            className="custom-button-over-white-bg h-[3.0rem] w-[6.5rem]"
            type="submit"
          >
            LOG IN
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center pt-[0rem]">
        <h3 className="text-darkest pr-[2rem]"> New User? </h3>
        <button
          className="text-darkest font-bold underline"
          onClick={() => navigate("/register")}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Login;
