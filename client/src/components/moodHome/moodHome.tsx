import React, { useState } from "react";
import { Link } from "react-router-dom";

export function MoodHome() {
  const [user, setUser] = useState("User");
  return (
    <div>
      <div>
        <h1>Hello {user}! </h1>
        <Link to="/purple">Purple</Link>
      </div>
    </div>
  );
}
