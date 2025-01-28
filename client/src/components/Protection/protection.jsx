import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../../utils/queries";
import Auth from "../../utils/auth";

const GlobalContext = createContext();

 const GlobalProvider = ({ children }) => {
  
  const isAuthenticated = Auth.loggedIn();

  
  const {loading, error, data} = isAuthenticated ? useQuery(ME) : { loading: false, error: null, data: null };
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data.me);
    }
  }, [data]);

  return (
    <GlobalContext.Provider value={{ user, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
