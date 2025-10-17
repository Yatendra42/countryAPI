import React from "react";
import { Link } from "react-router-dom";
import "./Flags.scss";

function Flags({ countries, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!countries?.length) return <p>No countries found.</p>;

  return (
    <div>
      <div className="card-container">
        {countries &&
          countries.map((country) => (
            <Link
              key={country.cca3}
              to={`/country/${country.cca3}`}
              className="country-card"
            >
  
                <img
                  src={country.flags?.png || country.flags?.svg}
                  alt={`Flag of ${country.name?.common}`}
                />
                <h3>{country.name?.common}</h3>
                <p>
                  <strong>Capital:</strong>{" "}
                  {country.capital ? country.capital[0] : "N/A"}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {country.population?.toLocaleString()}
                </p>
             
            </Link>
          ))}
        {countries && countries.length === 0 && !loading && !error && (
          <div>No countries found.</div>
        )}
      </div>
    </div>
  );
}

export default Flags;
