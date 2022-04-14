import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../moodHome/moodHome.css";
import axios from 'axios';

export function MoodHome() {

  let navigate:any = useNavigate();

  function purpleButton() {
    navigate('/purple');
  }
  function redButton() {
    navigate('/red');
  }
  function blueButton() {
    navigate('/blue');
  }
  function blackButton() {
    navigate('/black');
  }
  function orangeButton() {
    navigate('/orange');
  }
  function yellowButton() {
    navigate('/yellow');
  }
  function greenButton() {
    navigate('/green');
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
            <button onClick={redButton}>Red</button>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-orange">
            <button onClick={orangeButton}>Orange</button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-yellow">
            <button onClick={yellowButton}>Yellow</button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-green">
            <button onClick={greenButton}>Green</button>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-blue">
            <button onClick={blueButton}>Blue</button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-black">
            <button onClick={blackButton}>Black</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
