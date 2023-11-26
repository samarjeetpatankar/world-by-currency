import React from "react";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-start py-8">
      <header className="text-center mt-4">
        <h1 className="text-4xl font-bold text-black mb-2">
          World By Currency
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Discover countries based on currency. Explore the diverse world with
          ease.
        </p>
      </header>
      <main className="container mx-auto p-4">
        <SearchBar />
      </main>
      <footer className="mt-auto py-4 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} World By Currency. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
