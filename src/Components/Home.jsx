import React from 'react';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-start pb-7">
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-black ">World By Currency</h1>
      </div>
      <SearchBar className="mt-4" />
    </div>
  );
};

export default Home;


