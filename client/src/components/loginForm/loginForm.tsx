import React, { useState } from "react";
import "./loginForm.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export function LoginForm() {
  let navigate: any = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  function userLogin() {
    return axios
      .post(`https://mood-web-backend.vercel.app/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response, response.data, "login successful");
        return response.data;
      })
      .then(navigate("https://mood-web-backend.vercel.app/home"))
      .catch((e) => {
        console.log(`Error `, e);
      });
  }

  return (
    <div>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>MoodWeb</h2>
          <p className="login">Login or register from here to access.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={(e) => handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-black"
                onClick={() => userLogin()}
                disabled={!validateForm()}
              >
                Login
              </button>
              <button type="submit" className="btn btn-secondary">
                <Link className="link-color" to="/signup">
                  Sign Up
                </Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
