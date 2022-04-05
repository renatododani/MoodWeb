import React, { useState } from "react";
import { Link } from "react-router-dom";

export function PurpleMood() {
  return (
    <div>
      <h1>Romance, Love, Passion</h1>
      <ul>
        <li>
          "Lots of people want to ride with you in the limo, but what you want
          is someone who will take the bus with you when the limo breaks down.”
          -Oprah Winfrey
        </li>
      </ul>

      <ul>
        <li>Meet Me in Paradise by Libby Hubscher (2021)</li>
        <img src="MeetMe.jpeg"></img>
      </ul>

      <ul>
        <li>The Notebook (2004)</li>

        <img className="img-size" src="The-Notebook.jpeg"></img>
      </ul>
      </div>
  );
}
