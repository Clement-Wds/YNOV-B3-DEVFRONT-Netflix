import { useEffect, useState } from "react";

import Hero from "/src/components/Hero";
import Row from "/src/components/Row";

import movieService from "/src/services/movie.service";

const Home = () => {

  return (
    <div className="home">

      <div className="home-hero">
        <Hero />
      </div>

      {/* TODOUM */}

      <div clasName="home-body">
        <Row name="Les plus populaires" path="popular" />
        <Row name="Les mieux notés" path="top_rated" />
      </div>
    </div>
  );
};

export default Home;
