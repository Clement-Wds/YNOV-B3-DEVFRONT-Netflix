import { useEffect, useState } from "react";
import movieService from "/src/services/movie.service";

import axios from "/node_modules/axios";

const Hero = () => {

    // const fetchUrl = `https://api.themoviedb.org/3/movie/2?api_key=b130d867055ff0c09fffec4729292241`;
    // const [movie, setMovie] = useState();

    // useEffect(() => {
    //     async function fetchData(){
    //         const request = await axios.get(fetchUrl);
    //         setMovie(request);
    //         return request;
    //     }
    //     fetchData();
          
    // });
    
    // console.log(movie);


  return (
    <div className="hero-container" style={{ 
            //backgroundImage: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            backgroundImage: `url(https://image.tmdb.org/t/p/original//aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg)`
        }}>

        <div className="hero-content">
            <div className="hero-content-text">
                {/* <h2 className="content-title">{movie.title}</h2>
                <p className="content-description">{movie.overview}</p> */}
                <h2 className="hero-content-title">Sonic</h2>
                <p className="hero-content-description">
                Powered with incredible speed, Sonic The Hedgehog embraces his new home on Earth. That is, until Sonic sparks the attention of super-uncool evil genius Dr. Robotnik. Now it’s super-villain vs. super-sonic in an all-out race across the globe to stop Robotnik from using Sonic’s unique power for world domination.
                </p>
            </div>
            <div className="hero-content-button">
                <div className="button-group">
                    <button type="button" className="button button-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                        Lecture
                    </button>
                    <button type="button" className="button button-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        Plus d'infos
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero