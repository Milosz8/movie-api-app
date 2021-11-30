import React from "react";
import styled from "styled-components";

const MovieListWrapper = styled.div`
  transition-duration: 500ms;
  img {
    padding: 2rem 0;
    width: 100%;
    max-width: 400px;
    transition-duration: 500ms;
    border: 2px solid gray;
  }
  hr {
    border-top: 5px solid red;
  }
  img:hover {
    transform: scale(1.02);
    transition-duration: 500ms;
  }

  img {
    padding: 2rem 0;
    width: 100%;
    max-width: 400px;
    transition-duration: 500ms;
    border: 2px solid gray;

    &:hover {
      transform: scale(1.02);
      transition-duration: 500ms;
    }
  }
  hr {
    border-top: 5px solid red;
  }
`;

export default function MovieList(props) {
  return (
    <>
      {props.movies.map((movie, index) => (
        <MovieListWrapper key={index}>
          <div>
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <img src={movie.Poster} alt="mov" />
            <hr />
          </div>
        </MovieListWrapper>
      ))}
    </>
  );
}
