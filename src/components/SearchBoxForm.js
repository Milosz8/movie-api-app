import React from "react";
import styled from "styled-components";

const SearchBoxWrapper = styled.div`
  max-width: 1200px;
  padding: 2rem;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  input {
    background: black;
    color: white;
    border: 2px solid white;
    padding: 1rem;
    transition-duration: 500ms;
    text-align: center;
    font-size: 1.5rem;
  }
  input:focus {
    background-color: black;
    border: 2px solid red;
    color: white;
    transition-duration: 500ms;
  }
`;

export default function SearchBoxForm(props) {
  return (
    <SearchBoxWrapper>
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search"
      ></input>
    </SearchBoxWrapper>
  );
}
