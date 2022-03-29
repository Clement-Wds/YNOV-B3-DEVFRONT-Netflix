import React from 'react';

import LogoNetflix from '/src/public/assets/images/netflix-logo.png';


const MovieSmallCard = () => {
  return (
    <div className="movie-small-card">
        <div className="card-body">
            <img src={LogoNetflix.src} alt="Netflix" />
        </div>
    </div>
  )
}

export default MovieSmallCard;
