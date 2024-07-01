import React from 'react'
import axios from './axios'
import { useState, useEffect } from 'react'
import requests from './requests';
import './Banner.css';

function Banner() {

    const [movies, setMovies] = useState();
    const Originals = requests.fetchNetflixOriginals;

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Originals);
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]);
        }
        fetchData();
    }, []);

    function truncate(str,n) {
        // reduce the content size in the banner.......u cant possibly diaplay the whole desciption

        return str?.length > n ? str.substr(0, n - 1) + "....." : str;
    }


    return (
        
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
                backgroundPosition:'center'
            }}
        
        >   
           
            <div className='banner_content' >
                    <h1 className='banner_title'>{movies?.title || movies?.name}</h1>
                    <div>
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                        <h2 className='banner_desc'> {truncate(movies?.overview,150)} </h2>
                    </div>
                
                
            </div>
            <div className='banner_fade_top'/>
            <div className='banner--fadeBottom'/>
    </header>
        
  )
}

export default Banner
