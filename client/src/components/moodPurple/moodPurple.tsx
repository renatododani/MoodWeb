import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import '../moodPurple/moodPurple.css'
import axios from 'axios';
import { getPurpleQuote } from "../../service/getPurple";
import { Quote } from "../../service/getPurple";

export function PurpleMood() {

  const [quote, setQuote] = useState<Quote>({id: 1, color: 'purple', quote: 'asdfasdf', author: 'asdfasdf'});

  useEffect(() => {
    getPurpleQuote().then(data => setQuote(data));
    console.log(quote)
  }, [])

  return (
    <div className='moodPurple'>
      <h1 className="header">Romance, Love, Passion</h1>
      <div className="quotes">
      {quote.quote}
      <div></div>
      -{quote.author}
      </div>
      <div className="books-container">
        <img className="book-img" src="MeetMe.jpeg"></img>
        <div className="name-description">
          <li className="book-name">Meet Me in Paradise</li>
          <p>By Libby Hubscher</p>
          <p className="book-description">
            Marin's still grieving her mother's passing, so an island spa trip
            with her sister seems like the perfect remedy. When her sister
            misses the flight, she finds herself flying solo. Marin embarks on
            an adventure in paradise in a journey filled with unexpected love
            and self-discovery.
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src="purple2.jpg"></img>
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
      {/* <MusicPlayer></MusicPlayer> */}
    </div>
  );
}
