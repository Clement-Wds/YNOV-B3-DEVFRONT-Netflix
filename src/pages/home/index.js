import { useEffect, useState } from "react";

import MovieSmallCard from "/src/components/MovieSmallCard";
import movieService from "/src/services/movie.service";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService
      .getMovies()
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="home-hero">
        <div className="home-hero-content"></div>
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
            <MovieSmallCard product={movie} key={movie.id}/>
            ))}
      </div>
    </div>
  );
};

export default Home;
