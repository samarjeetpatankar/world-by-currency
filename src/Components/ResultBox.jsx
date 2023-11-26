import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultBox = ({
  country,
  capital,
  imageUrl,
  currencyCode,
  population,
  region,
}) => {
  const [countryData, setCountryData] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!currencyCode) {
          return;
        }

        const lowercaseCode = currencyCode.toLowerCase();
        const response = await axios.get(
          `https://restcountries.com/v3.1/currency/${lowercaseCode}`
        );

        if (!response.data || response.data.length === 0) {
          console.error("No data received from the server");
          return;
        }

        setCountryData(response.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        //  delay of 2 seconds before showing the actual result box
        setTimeout(() => {
          setShowSkeleton(false);
        }, 2000);
      }
    };

    fetchData();
  }, [currencyCode]);

  return (
    <div className="ml-2 mr-2 mb-1">
      {showSkeleton ? (
        <LoadingSkeleton />
      ) : (
        <div className="bg-gray-300 p-4 rounded-md shadow-md border border-gray-400 w-80 h-96">
          <div className="mb-4 h-48 overflow-hidden border-b-2 border-gray-400">
            <img
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={`${country} Image`}
            />
          </div>

          <div className="text-center">
            <p className="text-gray-950 text-xl font-bold">Name: {country}</p>
            <p className="text-gray-950 text-xl font-semibold">
              Capital: {capital}
            </p>
            <p className="text-gray-950 text-xl font-semibold">
              Region: {region}
            </p>
            <p className="text-gray-950 text-xl font-semibold">
              Population: {population}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultBox;

const LoadingSkeleton = () => (
  <div className="bg-gray-300 p-4 rounded-md shadow-md border border-gray-400 w-80 h-96 animate-pulse">
    <div className="mb-4 h-48 bg-gray-400 rounded-md"></div>
    <div className="text-center">
      <div className="bg-gray-400 h-6 w-20 mb-2 mx-auto rounded-md"></div>
      <div className="bg-gray-400 h-4 w-32 mx-auto rounded-md"></div>
    </div>
  </div>
);
