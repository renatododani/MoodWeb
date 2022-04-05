import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../moodHome/moodHome.css'

export function MoodHome() {
const [user, setUser] = useState("User");
return (
<div>
  <div>
    <h1>Hello {user}! </h1>
    
  </div>
  <section>
    <div className="bowl-row">
    <div className="bowl" >
      <div className="liquid"><Link to="/purple">Purple</Link></div>
    </div>
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    </div>


    <div className="bowl-row">
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    </div>

    
    <div className="bowl-row">
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    <div className="bowl">
      <div className="liquid"></div>
    </div>
    </div>

  </section>
</div>
);
}