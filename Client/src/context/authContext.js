import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import axios from "axios";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //   default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    // eslint-disable-next-line
  }, []);

  //   useEffect(() => {
  //     // Update local storage when auth changes
  //     localStorage.setItem("auth", JSON.stringify(auth));
  //   }, [auth]);

  return (
    <authContext.Provider value={[auth, setAuth]}>
      {children}
    </authContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
