import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodPurple/moodPurple.css";
import { getPurpleQuote, Quote } from "../../service/getQuotes";
import { getPurpleBooks, Book } from "../../service/getBooks";

export function PurpleMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [book, setBook] = useState<Book | undefined>(undefined);

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
  <div></div>
      <div className="books-container">
        <img className="book-img" src={book?.img}></img>
        <div className="name-description">
          <p className="book-name">{book?.title}</p>
          <p>By {book?.author}</p>
          <p className="book-description">
            {book?.description}
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src={book?.img}></img>
        <div className="name-description">
          <li className="book-name">Seven Days in June</li>
          <p>By Tia Williams</p>
          <p className="book-description">
            Eva Mercy writes best-selling vampire books, but she's an exhausted
            single mom with no time to “romance a real-life penis.” She channels
            desire into her novels. But then she sees Shane at a conference. He
            stole her heart during a wild week 15 years ago, and now the two
            give it another round. Get ready for laugh-out-loud writing in one
            of the best new steamy romance novels, which also has an engrossing
            story with a true heart.
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src="purple3.jpg"></img>
        <div className="name-description">
          <li className="book-name">The Right Swipe</li>
          <p>By Alisha Rai</p>
          <p className="book-description">
            Meet Rhiannon, the creator of a hot dating app who tries to follow
            her own rules for hooking up. She's ghosted by a hottie, but when he
            reemerges asking for a second chance, she has to revise her own
            rules. Readers love Alisha Rai's latest novel for its modern,
            multicultural romance filled with wit and fire.
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
