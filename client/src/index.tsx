import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { LoginForm } from "./components/loginForm/loginForm";
import { SignUpForm } from "./components/signupForm/signupForm";
import { MoodHome } from "./components/moodHome/moodHome";
import { PurpleMood } from "./components/moodPurple/moodPurple";
import { RedMood } from "./components/moodRed/moodPurple";
import { OrangeMood } from "./components/moodOrange/moodOrange";
import { YellowMood } from "./components/moodYellow/moodYellow";
import { GreenMood } from "./components/moodGreen/moodGreen";
import { BlueMood } from "./components/moodBlue/moodBlue";
import { BlackMood } from "./components/moodBlack/moodBlack";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignUpForm />}></Route>
        <Route path="/home" element={<MoodHome />}></Route>
        <Route path="/purple" element={<PurpleMood />}></Route>
        <Route path="/red" element={<RedMood />}></Route>
        <Route path="/orange" element={<OrangeMood />}></Route>
        <Route path="/yellow" element={<YellowMood />}></Route>
        <Route path="/green" element={<GreenMood />}></Route>
        <Route path="/blue" element={<BlueMood />}></Route>
        <Route path="/black" element={<BlackMood />}></Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
