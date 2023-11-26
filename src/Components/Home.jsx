import React from "react";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-start py-8">
      <header className="text-center mt-8">
        <h1 className="text-4xl font-bold text-black mb-4">World By Currency</h1>
        <p className="text-gray-600">Explore countries based on currency</p>
      </header>
      <main >
        <SearchBar />
      </main>
      
    </div>
  );
};

export default Home;
