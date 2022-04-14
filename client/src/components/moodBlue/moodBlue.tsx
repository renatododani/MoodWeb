import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import '../moodBlue/moodBlue.css'

export function BlueMood() {
  return (
    <div className='moodBlue'>
      <h1 className='header'>Tranquil, Calm, Relaxed</h1>
      <ul className="quotes">
        <li>
          "Lots of people want to ride with you in the limo, but what you want
          is someone who will take the bus with you when the limo breaks down.”
          -Oprah Winfrey
        </li>
      </ul>
      <div className="books-container">
        <img className="book-img" src="blue1.jpg"></img>
        <div className="name-description">
          <li className="book-name">Ikigai</li>
          <p>By Hector Garcia and Francesc Miralles</p>
          <p className="book-description">
          According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world’s longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—where what you love, what you’re good at, what you can get paid for, and what the world needs all overlap—means that each day is infused with meaning. It’s the reason we get up in the morning.
          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src=""></img>
        <div className="name-description">
          <li className="book-name"></li>
          <p></p>
          <p className="book-description">

          </p>
        </div>
      </div>

      <div className="books-container">
        <img className="book-img" src=""></img>
        <div className="name-description">
          <li className="book-name"></li>
          <p></p>
          <p className="book-description">

          </p>
        </div>
      </div>

      <div className="movies-container">
        <img className="img-size" src="blue1movie.jpg"></img>
        <img className="img-size" src="blue2movie.jpg"></img>
        <img className="img-size" src="blue3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
