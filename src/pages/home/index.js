import React from 'react';
import MovieSmallCard from "/src/components/MovieSmallCard";

const Home = () => {
  return (
    <div className="">
        <div className="home-hero">
          <div className="home-hero-content">
            
          </div>
        </div>
        <div className="movies-grid">
            <MovieSmallCard />
            <MovieSmallCard />
            <MovieSmallCard />
            <MovieSmallCard />
        </div>
    </div>
  );
}

export default Home;
