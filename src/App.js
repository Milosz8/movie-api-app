import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import MovieListHeader from "./components/MovieListHeader";
import SearchBoxForm from "./components/SearchBoxForm";

const MovieAppWrapper = styled.div`
  background: black;
  color: white;
  text-align: center;
  letter-spacing: 5px;

  .row {
    flex-wrap: wrap;
    align-items: center;
    margin: auto;

    transition-duration: 500ms;
  }
`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=884ec8c7`;
    //dynamic parameter searching movie in form

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

    // async fetch from url
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  // request when the page loads []
  // request when searchValue update [searchValue]

  return (
    <MovieAppWrapper>
      <div className="container-fluid movie-app">
        <div className="row">
          <MovieListHeader heading="Movies" />
          <SearchBoxForm
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </MovieAppWrapper>
  );
}

export default App;
