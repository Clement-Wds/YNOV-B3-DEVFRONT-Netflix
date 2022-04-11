import React, { useEffect, useState } from "react";

const white_list = () => {

    const [movies, setMovies] = useState([]);

    const deleteToList = (element) => {
        const whiteList = [];
        
        const localStorageWhiteListe = JSON.parse(localStorage.getItem("whiteList"));
        localStorageWhiteListe.forEach((movie) => {
            whiteList.push(movie);
        });

        const indexOfExistingMovie = whiteList.findIndex((el) => el.id === element.id);

        if (indexOfExistingMovie !== -1) {
            whiteList.splice(indexOfExistingMovie, 1);
            localStorage.setItem("whiteList", JSON.stringify(whiteList));
            location.reload();
        }
    }

    useEffect(() => {
        setMovies(JSON.parse(localStorage.getItem("whiteList")) || []);
    }, []);

  return (
    <div className="row">
        <h2 className="row-title">Favoris</h2>

        <div className="card">

            {movies ? (
                <>
                {movies.map((movie) => (
                        
                    <div className="card-body">
    
                        <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.image}`} alt={movie.title} />
    
                        <div className="card-button-group">
                            <button type="button" className="card-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                                </svg>
                            </button>
        
                            <button type="button" className="card-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </button>
        
                            <button type="button" className="card-button" onClick={() => deleteToList(movie)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </div>
    
                    </div>
    
                ))}
                </>
            ) : (
                <p>Votre liste de favoris est vide</p>
            )}

        </div>

    </div>
  )
}

export default white_list