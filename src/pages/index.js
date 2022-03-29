import React from 'react';
import MovieSmallCard from "/src/components/MovieSmallCard";

const Index = () => {
  return (
    <div className="">
        <div className="movies-grid">
            <MovieSmallCard />
            <MovieSmallCard />
            <MovieSmallCard />
            <MovieSmallCard />
        </div>
    </div>
  );
}

export default Index;
