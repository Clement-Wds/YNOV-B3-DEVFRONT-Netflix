import { useEffect, useState } from "react";

import MovieSmallCard from "/src/components/MovieSmallCard";
import Row from "/src/components/Row";

import movieService from "/src/services/movie.service";

const Home = () => {
  

  return (
    <div className="">

      <Row name="Les plus populaires" path="popular" />
      <Row name="Les mieux notés" path="top_rated" />

      
    </div>
  );
};

export default Home;
