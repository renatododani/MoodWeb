import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../moodHome/moodHome.css";
import axios from 'axios';

export function MoodHome() {

  let navigate:any = useNavigate();

  function purpleButton() {
    navigate('/purple');
  }

  const [user, setUser] = useState("User");
  return (
    <div className='moodHome'>
      <h1 className='header'>
        Hello, User
      </h1>
      <section>
        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-purple">
              <button onClick={purpleButton}>Purple</button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-red">
              <Link to="/red">Red</Link>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-orange">
              <Link to="/orange">Orange</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-yellow">
              <Link to="/yellow">Yellow</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-green">
              <Link to="/green">Green</Link>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-blue">
              <Link to="/blue">Blue</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-black">
              <Link to="/black">Black</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
