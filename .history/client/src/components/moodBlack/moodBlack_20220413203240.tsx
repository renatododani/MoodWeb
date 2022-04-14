import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import '../moodBlack/moodBlack.css'

export function BlackMood() {
  return (
    <div className='moodBlack'>
      <h1 className='header'>Drained, Overworked</h1>
      <ul className="quotes">
        <li>
        "When the going get tough, the tough get going"
          -Joseph P. Kennedy Sr.
        </li>
      </ul>
      <div className="books-container">
        <img className="book-img" src="black1.webp"></img>
        <div className="name-description">
          <li className="book-name">Essentialism</li>
          <p>By Greg McKeown</p>
          <p className="book-description">
          Essentialism is not one more thing—it’s a whole new way of doing everything. It’s about doing less, but better, in every area of our lives. Essentialism is a movement whose time has come. By forcing us to apply more selective criteria for what is Essential, the disciplined pursuit of less empowers us to reclaim control of our own choices about where to spend our precious time and energy—instead of giving others the implicit permission to choose for us.
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
