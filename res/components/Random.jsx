import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Filter.css";
import { useOutletContext } from "react-router-dom";
import getJoke from "./GetJoke";

const Random = () => {
  const [
    checkedValues,
    setCheckedValues,
    avoid,
    setAvoid,
    type,
    setType,
    jokes,
    setJokes,
    isLoading,
    setIsLoading,
  ] = useOutletContext();

  return (
    <form className="filter-container">
      <div className="btn">
        <button
          onClick={(e) => {
            e.preventDefault();
            getJoke(
              checkedValues,
              avoid,
              type,
              setJokes,
              isLoading,
              setIsLoading
            );
            //console.log(checkedValues, avoid, type);
          }}
        >
          Get Joke
        </button>
      </div>
    </form>
  );
};

export default Random;
