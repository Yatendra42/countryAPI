import React from "react";
import "./flags.scss";

function Flags({ countries, loading, error }) {
  return (
    <div>

      <div className="card-container">
        {
          countries && countries.map((country, index) => (
            <div key={index} className="country-card">
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
            </div>
          ))}
        {countries && countries.length === 0 && !loading && !error && (
          <div>No countries found.</div>
        )}
      </div>
    </div>
  );
}

export default Flags;
