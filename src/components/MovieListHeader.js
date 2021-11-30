import React from "react";
import styled from "styled-components";

const MovieListHeaderWrapper = styled.div`
  h1 {
    margin: 0 auto;
    padding: 3.5rem 0;
    font-size: 5rem;
  }
`;
export default function MovieListHeader(props) {
  return (
    <MovieListHeaderWrapper>
      <h1>{props.heading}</h1>
    </MovieListHeaderWrapper>
  );
}
