import React, { useState, useEffect } from "react";

const ResultBox = ({ country, capital, imageUrl, currencyCode }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currencyCode) {
          const response = await fetch(
            `https://restcountries.com/v3.1/currency/${currencyCode}`
          );
          const data = await response.json();
          setCountryData(data[0]);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [currencyCode]);

  return (
    <div className="ml-2 mr-2 mb-1">
      {countryData && (
        <div className="bg-gray-300 p-4 rounded-md shadow-md border border-gray-400 w-80 h-80">
          <div className="mb-4 h-48 overflow-hidden border-b-2 border-gray-400">
            <img
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={`${country} Image`}
            />
          </div>

          <div className="text-center">
            <p className="text-gray-950 text-lg">Name: {country}</p>
            <p className="text-gray-950 text-lg">Capital: {capital}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBox;