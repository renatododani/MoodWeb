import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodBlack/moodBlack.css";
import { getBlackQuote, Quote } from "../../service/getQuotes";

export function BlackMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);

  useEffect(() => {
    getBlackQuote().then((data) => setQuote(data));
    console.log(quote);
  }, []);
  return (
    <div className="moodBlack">
      <h1 className="black-header">Drained, Overworked, Tired</h1>
      <div className="quote">
  <span className="left">❝</span>
  <blockquote>
    {quote?.quote}
  </blockquote>
  <small>{quote?.author}</small>
  <span className="right">❞</span>
  </div>
      <div className="books-container">
        <img className="book-img" src="black1.webp"></img>
        <div className="name-description">
          <li className="book-name">Essentialism</li>
          <p>By Greg McKeown</p>
          <p className="book-description">
            Essentialism is not one more thing—it’s a whole new way of doing
            everything. It’s about doing less, but better, in every area of our
            lives. Essentialism is a movement whose time has come. By forcing us
            to apply more selective criteria for what is Essential, the
            disciplined pursuit of less empowers us to reclaim control of our
            own choices about where to spend our precious time and
            energy—instead of giving others the implicit permission to choose
            for us.
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src=""></img>
        <div className="name-description">
          <li className="book-name"></li>
          <p></p>
          <p className="book-description"></p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src=""></img>
        <div className="name-description">
          <li className="book-name"></li>
          <p></p>
          <p className="book-description"></p>
        </div>
      </div>

      <div className="movies-container">
        <img className="img-size" src="black1movie.jpg"></img>
        <img className="img-size" src="black2movie.jpg"></img>
        <img className="img-size" src="black3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
