import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodYellow/moodYellow.css";
import { getYellowQuote, Quote } from "../../service/getQuotes";

export function YellowMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);

  useEffect(() => {
    getYellowQuote().then((data) => setQuote(data));
    console.log(quote);
  }, []);

  return (
    <div className="moodYellow">
      <h1 className="yellow-header">Bored, Nervous, Anxious</h1>
  <div className="quote">
  <span className="left">❝</span>
  <blockquote>
    {quote?.quote}
  </blockquote>
  <small>{quote?.author}</small>
  <span className="right">❞</span>
  </div>
      <div className="books-container">
        <img className="book-img" src="yellow1.jpg"></img>
        <div className="name-description">
          <li className="book-name">Whatever</li>
          <p>By Michel Houellebecq</p>
          <p className="book-description">
            Just thirty, with a well-paid job. depression and no love life, the
            narrator and anti-hero par excellence of this grim, funny, and
            clever novel smokes four packs of cigarettes a day and writes weird
            animal stories in his spare time. A painfully realistic portrayal of
            the vanishing freedom of a world governed by science and by the
            empty rituals of daily life.
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src="yellow2.jpg"></img>
        <div className="name-description">
          <li className="book-name">The Forgetting Machine</li>
          <p>By Rodrigo Quian Quiroga</p>
          <p className="book-description"></p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src="yellow3.jpg"></img>
        <div className="name-description">
          <li className="book-name">Running Out of Time</li>
          <p>By Margaret Peterson Haddix</p>
          <p className="book-description"></p>
        </div>
      </div>

      <div className="movies-container">
        <img className="img-size" src="yellow1movie.jpg"></img>
        <img className="img-size" src="yellow2movie.jpg"></img>
        <img className="img-size" src="yellow3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
