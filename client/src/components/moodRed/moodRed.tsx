import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import '../moodRed/moodRed.css'

export function RedMood() {
  return (
    <div className='moodRed'>
      <h1 className='header'>Anger, Frustration, Passion</h1>
      <ul className="quotes">
        <li>
          "Lots of people want to ride with you in the limo, but what you want
          is someone who will take the bus with you when the limo breaks down.”
          -Oprah Winfrey
        </li>
      </ul>

      <div className="books-container">
        <img className="book-img" src="red1.jpg"></img>
        <div className="name-description">
          <li className="book-name">Things Fall Apart</li>
          <p>By Chinua Achebe</p>
          <p className="book-description">
          A classic narrative about Africa's cataclysmic encounter with Europe as it establishes a colonial presence on the continent. Told through the fictional experiences of Okonkwo, a wealthy and fearless Igbo warrior of Umuofia in the late 1800s.
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
        <img className="img-size" src="red1movie.jpg"></img>
        <img className="img-size" src="red2movie.jpg"></img>
        <img className="img-size" src="red3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
