import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import "../moodOrange/moodOrange.css";
import { getOrangeQuote, Quote } from "../../service/getQuotes";
import { getOrangeBooks, Book } from "../../service/getBooks";
import { getOrangeMovies, Movie } from "../../service/getMovies";

export function OrangeMood() {
  const [quote, setQuote] = useState<Quote | undefined>(undefined);
  const [book, setBook] = useState<Book[]>([]);
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    getOrangeQuote().then((data) => setQuote(data));
    getOrangeBooks().then((data) => setBook(data));
    getOrangeMovies().then((data) => setMovie(data))
  }, []);

  return (
    <div className="moodOrange">
      <h1 className="orange-header">Annoyed, Frustrated</h1>
    <div className="quote">
      <span className="left">❝</span>
      <blockquote>
        {quote?.quote}
      </blockquote>
      <small>{quote?.author}</small>
      <span className="right">❞</span>
    </div>

    <div className="books-container">
        <img className="book-img" src={book[0]?.img}></img>
        <div className="name-description">
          <p className="book-name">{book[0]?.title}</p>
          <p>By {book[0]?.author}</p>
          <p className="book-description">
            {book[0]?.description}
          </p>
        </div>
    </div>

    <div className="books-container">
      <img className="book-img" src={book[1]?.img}></img>
      <div className="name-description">
        <p className="book-name">{book[1]?.title}</p>
        <p>By {book[1]?.author}</p>
        <p className="book-description">
          {book[1]?.description}
        </p>
      </div>
    </div>

    <div className="books-container">
      <img className="book-img" src={book[2]?.img}></img>
      <div className="name-description">
        <p className="book-name">{book[2]?.title}</p>
        <p>By {book[2]?.author}</p>
        <p className="book-description">
          {book[2]?.description}
        </p>
    </div>
  </div>

      <div className="movies-container">
        <div className='movie'>
          <img className="img-size" src={movie[0]?.img}></img>
          <p>{movie[0]?.title} ({movie[0]?.release_year})</p>
        </div>
        <div className='movie'>
          <img className="img-size" src={movie[1]?.img}></img>
          <p>{movie[1]?.title} ({movie[1]?.release_year})</p>
        </div>
        <div className='movie'>
          <img className="img-size" src={movie[2]?.img}></img>
          <p>{movie[2]?.title} ({movie[2]?.release_year})</p>
        </div>
        <div className='movie'>
          <img className="img-size" src={movie[3]?.img}></img>
          <p>{movie[3]?.title} ({movie[3]?.release_year})</p>
        </div>
        <div className='movie'>
          <img className="img-size" src={movie[4]?.img}></img>
          <p>{movie[4]?.title} ({movie[4]?.release_year}</p>
        </div> 
      </div>
      <div className="musicPlayer">
        <MusicPlayer></MusicPlayer>
      </div>
    </div>
  );
}