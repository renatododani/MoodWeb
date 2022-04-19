import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../moodHome/moodHome.css";
import axios from "axios";

export function MoodHome() {
  let navigate: any = useNavigate();

  function purpleButton() {
    navigate("/purple");
  }
  function redButton() {
    navigate("/red");
  }
  function blueButton() {
    navigate("/blue");
  }
  function blackButton() {
    navigate("/black");
  }
  function orangeButton() {
    navigate("/orange");
  }
  function yellowButton() {
    navigate("/yellow");
  }
  function greenButton() {
    navigate("/green");
  }

  const [user, setUser] = useState("User");
  return (
    <div className="moodHome">
      <h1 className="header">Hello, User</h1>
      <h2 className="discover">Discover Your Mood</h2>

      <section>
        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-purple">
              <button className="purple-button" onClick={purpleButton}>
                Romantic
              </button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-red">
              <button className="red-button" onClick={redButton}>
                Anger
              </button>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-orange">
              <button className="orange-button" onClick={orangeButton}>
                Annoyed
              </button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-yellow">
              <button className="yellow-button" onClick={yellowButton}>
                Anxious
              </button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-green">
              <button className="green-button" onClick={greenButton}>
                Happy
              </button>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid-blue">
              <button className="blue-button" onClick={blueButton}>
                Calm
              </button>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid-black">
              <button className="black-button" onClick={blackButton}>
                Drained
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
