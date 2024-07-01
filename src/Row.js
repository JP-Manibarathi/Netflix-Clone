import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original" //url differes. check tmbd website for other valid urls

function Row({ title, fetchUrl, isLargeRow }) {

  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    async function fetchData() {
      //alert(fetchUrl)
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.table(movies);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  


  const handleClick = (movie) => {

    console.table(movies)
    
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

    return(
        <div className = "row" >

          <h2 className="row_title">{title}</h2>

        <div className="row_posters">
        
          {movies.map((movie) => (
          
            <img
              
              onClick={() => handleClick(movie)}

              key={movie.id}
              className={`row_poster ${isLargeRow ? "row_posterLarge":"row_posterSmall"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.poster_path
                }`}
              
              alt={movie.name}
            />
        ))}
      </div>

          <div style={{ padding: "5px" }}>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
          
        </div >
    );

}

export default Row;
