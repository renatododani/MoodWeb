import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../moodHome/moodHome.css";

export function MoodHome() {
  const [user, setUser] = useState("User");
  return (
    <div>
      <div></div>
      <section>
        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid purple">
              <Link to="/purple">Purple</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid red">
              <Link to="/red">Red</Link>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid orange">
              <Link to="/orange">Orange</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid yellow">
              <Link to="/yellow">Yellow</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid green">
              <Link to="/green">Green</Link>
            </div>
          </div>
        </div>

        <div className="bowl-row">
          <div className="bowl">
            <div className="liquid blue">
              <Link to="/blue">Blue</Link>
            </div>
          </div>
          <div className="bowl">
            <div className="liquid black">
              <Link to="/black">Black</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
