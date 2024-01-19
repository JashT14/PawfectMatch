import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //To navigate back to previous pages we will use the React useNavigation Hook.
  const handleLogin = function () {
    navigate("/home");
    // TO DO!!!!!
  };
  return (
    <div className="login-container flex flex-col items-center justify-center pt-[14.00rem]">
      <form className="flex flex-col ">
        <label className="text-darkest pb-[1rem] text-start font-[1.125rem]">
          EMAIL:
          <br />
          <input
            type="text"
            className="user-data-input w-[22.31rem]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="text-darkest text-start">
          PASSWORD:
          <br />
          <input
            type="password"
            className="user-data-input w-[22.31rem]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="mb-[2rem] mt-[0.5rem] self-center">
          <button
            className="custom-button-over-white-bg h-[3.0rem] w-[6.5rem]"
            onClick={() => handleLogin()}
          >
            LOG IN
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center pt-[0rem]">
        <h3 className="text-darkest pr-[2rem]"> New User? </h3>
        <button
          className="custom-button-over-white-bg h-[3.0rem] w-[6.5rem]"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
