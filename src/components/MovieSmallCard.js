import React from 'react';

const MovieSmallCard = ({movie}) => {



  return (
    <div className="movie-small-card">
        <div className="card-img">
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
        </div>
        <div className="card-body">
            <h1>{movie.title}</h1>
        </div>
    </div>
  )
}

export default MovieSmallCard;
