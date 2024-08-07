import React, { useEffect, useState } from "react";
import "./JokeWindow.css";
import ReactDOM from "react-dom";
import { HOST_LINK } from "../constants";

const JokeWindow = ({ joke, is, set }) => {
  //console.log(is);

  return is === "true" ? (
    <div className="joke-window-container">
      <p className="display">Joke Is Loading.......</p>
    </div>
  ) : (
    <div className="joke-window-container">
      <p className="display">{joke || joke.setup + "\n" + joke.delivery}</p>
    </div>
  );
};

export default JokeWindow;
