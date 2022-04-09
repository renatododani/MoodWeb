import React from "react";
import './signupForm.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export function SignUpForm() {

function userSignup() {
   return axios.post(`/signup`)
   .then(response => 
      console.log(response.data));
}

   const [firstName, setFirstName] = useState('');
      function setFirstNameValue(firstName:number){
         setFirstName(firstName);
      }
   const [lastName, setLastName] = useState('');
   function setLastNameValue(lastName:string){
      setLastName(lastName);
   }
   const [email, setEmail] = useState('');
   function setEmailValue(email:string){
      setEmail(email);
   }
   const [password, setPassword] = useState('');
   function setPasswordValue(password:string){
      setPassword(password);
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
                     <input type="text" className="form-control" placeholder="First Name" onChange={(firstName) => setFirstNameValue(firstName)}></input>
                  </div>
                  <div className="form-group">
                     <label>Last Name</label>
                     <input type="lastName" className="form-control" placeholder="Last Name"></input>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" className="form-control" placeholder="Email"></input>
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