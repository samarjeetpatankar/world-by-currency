import React, { useState, useEffect } from "react";

const ResultBox = ({ country, capital, imageUrl, currencyCode }) => {
  const [currencyData, setCurrencyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/currency/${currencyCode}`
        );
        const data = await response.json();
        setCurrencyData(data[0]);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, [currencyCode]);

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-md overflow-hidden shadow-md md:flex">
    
      <div className="md:w-1/2">
        {currencyData && (
          <img
            className="object-cover w-full h-full"
            src={imageUrl}
            alt={`${country} Image`}
          />
        )}
      </div>

     

      {currencyData && (
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Name : {country}</h2>
          <p className="text-gray-800">
            Capital: {Array.isArray(capital) ? capital[0] : capital}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultBox;


