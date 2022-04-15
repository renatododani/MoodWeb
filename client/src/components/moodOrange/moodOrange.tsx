import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodOrange/moodOrange.css";
import { getOrangeQuote, Quote } from "../../service/getQuotes";

export function OrangeMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);

  useEffect(() => {
    getOrangeQuote().then((data) => setQuote(data));
  }, []);

  return (
    <div className="moodOrange">
      <h1 className="orange-header">Annoyed, Frustrated, Irritated</h1>
      <div className="quotes">
        {quote?.quote}
        <div></div>-{quote?.author}
      </div>
      <div className="books-container">
        <img className="book-img" src="orange1.jpg"></img>
        <div className="name-description">
          <li className="book-name">The Art of Thinking Clearly</li>
          <p>By Rolf Dobelli</p>
          <p className="book-description">
            Have you ever: Invested time in something that, with hindsight, just
            wasn’t worth it? Or continued doing something you knew was bad for
            you? These are examples of cognitive biases, simple errors we all
            make in our day-to-day thinking. But by knowing what they are and
            how to spot them, we can avoid them and make better decisions.
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
        <img className="img-size" src="orange1movie.jpg"></img>
        <img className="img-size" src="orange2movie.jpg"></img>
        <img className="img-size" src="orange3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
