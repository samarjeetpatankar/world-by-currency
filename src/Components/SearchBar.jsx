import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ResultBox from "./ResultBox";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/currency/${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 flex-col">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="py-2 pl-10 pr-10 border border-gray-300 rounded-md w-96 focus:outline-none focus:border-blue-500 text-center"
          type="text"
          placeholder="Search by Currency INR, EUR, USD"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-4 flex flex-wrap justify-center">
        {searchResults &&
          searchResults.map &&
          searchResults.map((result) =>
            result.name && result.capital && result.flags ? (
              <div key={result.cca3} className="m-2">
                <ResultBox
                  country={result.name.common}
                  capital={result.capital[0]}
                  imageUrl={result.flags.png}
                  currencyCode={searchQuery}
                />
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default SearchBar;
