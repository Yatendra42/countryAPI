
import { createContext, useContext, useState, useEffect } from "react";
import { getAllCountries } from "@/api/countryService";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCountries();
      const sorted = data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setAllCountries(sorted);
      
    })();
  }, []);

  return (
    <CountryContext.Provider value={{ allCountries, setAllCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountries = () => useContext(CountryContext);
