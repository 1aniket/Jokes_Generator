import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Filter.css";
import { useOutletContext } from "react-router-dom";
import getJoke from "./GetJoke";

const Filter = () => {
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

  useEffect(() => {
    getJoke(checkedValues, avoid, type, setJokes, isLoading, setIsLoading);
  }, [checkedValues, avoid, type]);
  return (
    <form className="filter-container">
      <div className="categories">
        <h6 className="title">Categories</h6>
        <div className="option">
          <label htmlFor="programming">Programming</label>
          <input type="checkbox" id="programming" name="Programming" />
        </div>

        <div className="option">
          <label htmlFor="misc">Misc</label>
          <input type="checkbox" id="misc" />
        </div>

        <div className="option">
          <label htmlFor="dark">Dark</label>
          <input type="checkbox" id="dark" />
        </div>

        <div className="option">
          <label htmlFor="pun">Pun</label>
          <input type="checkbox" id="pun" />
        </div>

        <div className="option">
          <label htmlFor="spooky">Spooky</label>
          <input type="checkbox" id="spooky" />
        </div>
      </div>
      <div className="blacklist">
        <h6 className="title">Avoid</h6>
        <div className="option">
          <label htmlFor="nsfw">NSFW</label>
          <input type="checkbox" id="nsfw" value="nsfw" />
        </div>

        <div className="option">
          <label htmlFor="political">Political</label>
          <input type="checkbox" id="political" />
        </div>

        <div className="option">
          <label htmlFor="sexist">Sexist</label>
          <input type="checkbox" id="sexist" />
        </div>

        <div className="option">
          <label htmlFor="explicit">Explicit</label>
          <input type="checkbox" id="explicit" />
        </div>
      </div>
      <div className="joke-type">
        <h6 className="title">Joke Type</h6>
        <div className="option">
          <label htmlFor="single">Single Line</label>
          <input type="checkbox" id="single" />
        </div>

        <div className="option">
          <label htmlFor="twopart">Two Line</label>
          <input type="checkbox" id="twopart" />
        </div>
      </div>
      <div className="btn">
        <button
          onClick={(e) => {
            e.preventDefault();

            const checkbox = {
              programming: "",
              misc: "",
              dark: "",
              pun: "",
              spooky: "",
            };

            const avoid = {
              nsfw: "",
              political: "",
              sexist: "",
              explicit: "",
            };

            const type = {
              single: "",
              twopart: "",
            };

            const vals = Object.keys(checkbox).filter((a) => {
              if (document.getElementById(a).checked) {
                return document.getElementById(a).id;
              }
            });

            const val1 = Object.keys(avoid).filter((a) => {
              if (document.getElementById(a).checked) {
                return document.getElementById(a).id;
              }
            });

            const val2 = Object.keys(type).filter((a) => {
              if (document.getElementById(a).checked) {
                return document.getElementById(a).id;
              }
            });

            setCheckedValues(vals);
            setAvoid(val1);
            setType(val2);

            //console.log(checkedValues, avoid, type);
          }}
        >
          Get Joke
        </button>
      </div>
    </form>
  );
};

export default Filter;
