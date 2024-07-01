import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      
      

      <Nav />
      <Banner />
      
      <Row title = "NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/> 
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending} /> 
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated} /> 
      <Row title = "Top Romance" fetchUrl={requests.fetchRomanceMovies} /> 
      <Row title = "Top Comedy" fetchUrl={requests.fetchComedyMovies} /> 
      <Row title = "Top Horror" fetchUrl={requests.fetchHorrorMovies} /> 
      <Row title = "Top Action" fetchUrl={requests.fetchActionMovies} /> 
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
