import { useState, useEffect } from "react";
import SearchBar from "./components/SerachBar/SearchBar";
import Flags from "./components/flags/flags";
import "./App.scss";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [totalLength, setTotalLength] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 


const handleCountry = async (e) => { 
 const value = e.target.value;
 setSearch(value);
if(!value){ setTotalLength(false)};
}


useEffect(() => {

    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch countries");
        return res.json();
      })
      .then(data => {
        setCountries(data.sort((a, b) => (a.name?.common).localeCompare(b.name?.common)));  
         console.log(data);
        setAllCountries(data.sort((a, b) => (a.name?.common).localeCompare(b.name?.common)));
        totalLength(data.length);
       
      })
      .catch(err => {
        setCountries([]);
        
        setError(err.message);
      });
  
 
}, []);


  // Debounce filter when search changes
  useEffect(() => {
 
      if (!search) {
        setCountries(allCountries);
        setError(null);
        return;
      }

   const filtered = allCountries.filter(c =>
  c.name?.common?.toLowerCase().includes(search.toLowerCase()) ||
  c.region?.toLowerCase().includes(search.toLowerCase()) ||
  (Array.isArray(c.capital) ? c.capital.join(" ").toLowerCase().includes(search.toLowerCase()) : c.capital?.toLowerCase().includes(search.toLowerCase()))
);
      setTotalLength(filtered.length);


      setCountries(filtered);
      setError(filtered.length === 0 ? "No country found" : null);
   


  }, [search, allCountries]);


  

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
            <Flags countries={countries} />
          </div>
        </main>
        <footer>
          <p>&copy; 2024 Country API</p>
        </footer>
      </div>
    </>
  );
}

export default App;
          <p>&copy; 2024 Country API</p>
