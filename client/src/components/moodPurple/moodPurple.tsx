import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodPurple/moodPurple.css";
import { getPurpleQuote, Quote } from "../../service/getQuotes";
import { getPurpleBooks, Book } from "../../service/getBooks";

export function PurpleMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [book, setBook] = useState<Book[]>([]);

  useEffect(() => {
    getPurpleQuote().then((data) => setQuote(data));
    getPurpleBooks().then((data) => setBook(data));
  }, []);

  return (
    <div className="moodPurple">
      <h1 className="purple-header">Romance, Love, Passion</h1>
      <div className="quote">
  <span className="left">❝</span>
  <blockquote>
    {quote?.quote}
  </blockquote>
  <small>{quote?.author}</small>
  <span className="right">❞</span>
  </div>
      <div className="books-container">
        <li>
          <img className="book-img" src={book[0]?.img}></img>
          <div className="name-description">
            <p className="book-name">{book[0]?.title}</p>
            <p>By {book[0]?.author}</p>
            <p className="book-description">
              {book[0]?.description}
            </p>
          </div>
        </li>
      </div>
      <div></div>
      <div className="books-container">
        <img className="book-img" src={book[1]?.img}></img>
        <div className="name-description">
          <li className="book-name">{book[1]?.title}</li>
          <p>By {book[1]?.author}</p>
          <p className="book-description">
            {book[1]?.description}
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src={book[2]?.img}></img>
        <div className="name-description">
          <li className="book-name">{book[2]?.title}</li>
          <p>By {book[2]?.author}</p>
          <p className="book-description">
            {book[2]?.description}
          </p>
        </div>
      </div>

      <div className="movies-container">
        <img className="img-size" src="purple2movie.jpg"></img>
        <img className="img-size" src="purple3movie.jpg"></img>
        <img className="img-size" src="purple4movie.jpg"></img>
        <img className="img-size" src="purple5movie.jpg"></img>
        <img className="img-size" src="The-Notebook.jpeg"></img>
        <img className="img-size" src="purple1movie.jpg"></img>
      </div>
      <div className="musicPlayer">
        <MusicPlayer></MusicPlayer>
      </div>
    </div>
  );
}
