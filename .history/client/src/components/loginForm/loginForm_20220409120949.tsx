import React from "react";
import './loginForm.css';
import {Link, NavLink} from 'react-router-dom';




export function LoginForm() {

   
      
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
                     <label>Email</label>
                     <input type="text" className="form-control" placeholder="Email"></input>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password"></input>
                  </div>
                  <button type="submit" className="btn btn-black">Login</button>
                  <button type="submit" className="btn btn-secondary"><Link className='link-color' to='/signup' >Sign Up</Link></button>
               </form>
            </div>
         </div>
      </div>
      </div>
)}