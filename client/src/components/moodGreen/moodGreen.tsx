import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../musicplayer/musicplayer";
import '../moodGreen/moodGreen.css'

export function GreenMood() {
  return (
    <div className='moodGreen'>
      <h1 className='header'>Happy, Content</h1>
      <ul className="quotes">
        <li>
          "Lots of people want to ride with you in the limo, but what you want
          is someone who will take the bus with you when the limo breaks down.”
          -Oprah Winfrey
        </li>
      </ul>

      <div className="books-container">
        <img className="book-img" src="green1.jpg"></img>
        <div className="name-description">
          <li className="book-name">The Art of Happiness</li>
          <p>By His Holiness Dalai Lama</p>
          <p className="book-description">
          Through conversations, stories, and meditations, the Dalai Lama shows us how to defeat day-to-day anxiety, insecurity, anger, and discouragement. Together with Dr. Howard Cutler, he explores many facets of everyday life, including relationships, loss, and the pursuit of wealth, to illustrate how to ride through life's obstacles on a deep and abiding source of inner peace.
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
        <img className="img-size" src="green1movie.jpg"></img>
        <img className="img-size" src="green2movie.jpg"></img>
        <img className="img-size" src="green3movie.jpg"></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
        <img className="img-size" src=""></img>
      </div>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}
