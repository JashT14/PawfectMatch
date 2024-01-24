import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const useAuthInfo = () => {
  const { currentUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("regular");

  const token = currentUser?.token;

  // If the user is logged in, then we have the token
  const checkLoginState = () => {
    if (token) {
      setIsLoggedIn(true);
    }
  };

  const checkUserType = () => {
    if (currentUser && currentUser.userType) {
      setUserType(currentUser.userType);
    }
  };

  return {
    isLoggedIn,
    userType,
    checkLoginState,
    checkUserType,
  };
};
