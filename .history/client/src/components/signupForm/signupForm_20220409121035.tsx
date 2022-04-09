import React from "react";
import './signupForm.css';
import { Link } from "react-router-dom";
import axios from "axios";


export function SignUpForm() {

function userSignup() {

   return axios.post(`http://localhost:3050/signup`)
   .then(response => response.data);
}

return (
  <div>
  <div className="sidenav">
         <div className="login-main-text">
            <h2>MoodWeb</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>First Name</label>
                     <input type="text" className="form-control" placeholder="First Name"></input>
                  </div>
                  <div className="form-group">
                     <label>Last Name</label>
                     <input type="text" className="form-control" placeholder="Last Name"></input>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="text" className="form-control" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-black" onClick={() => userSignup()}>Register</button>
     
                  <button type="submit" className="btn btn-secondary"><Link className='link-color' to='/login'>Already a Member?</Link></button>
               </form>
            </div>
         </div>
      </div>
      </div>
)}