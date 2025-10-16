import { useState, useEffect } from "react";
import SearchBar from "@/components/SerachBar/SearchBar";
import Flags from '@/components/Flags/Flags.jsx';
import { getAllCountries } from "@/api/countryService";



import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [totalLength, setTotalLength] = useState(false);
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 

   useEffect(() => {
  const fetchData = async () => {
    const data = await getAllCountries();
    const sorted = data.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
    setCountries(sorted);
    setAllCountries(sorted);
    console.log("Fetched & sorted:", sorted);
  };

  fetchData();
}, []);


  const handleCountry = async (e) => { 
    const value = e.target.value;
    setSearch(value);
   
    console.log("Search input:", value);


   const filtered = allCountries.filter(c =>
  c.name?.common?.toLowerCase().includes(search.toLowerCase()) ||
  c.region?.toLowerCase().includes(search.toLowerCase()) ||
  (Array.isArray(c.capital) ? c.capital.join(" ").toLowerCase().includes(search.toLowerCase()) : c.capital?.toLowerCase().includes(search.toLowerCase()))
);
      setTotalLength(filtered.length);
      setCountries(filtered);
      setError(filtered.length === 0 ? "No country found" : null);
   


    
      if(value.length === 0){
       setTotalLength(0)
      }

  
  }




  return (
    <>
      <div className="wrapper">
        <header>
          <h1>Country API</h1>
        </header>
        <main>
          <div className="main-content">
            <div>
              <h2>Country Information</h2>
              <p>Get information about countries around the world.</p>
            </div>

            {totalLength > 0 && (
              <div className="results-count">
                <p>{totalLength} countries found</p>
              </div>
            )}
            
            <SearchBar value={search} onChange={handleCountry} />
          </div>
          <div className="results">
            <Flags countries={countries}  />
          </div>
        </main>
        <footer>sss
          <p>&copy; 2024 Country API</p>
        </footer>
      </div>
    </>
  );
}

export default App;
          <p>&copy; 2024 Country API</p>
