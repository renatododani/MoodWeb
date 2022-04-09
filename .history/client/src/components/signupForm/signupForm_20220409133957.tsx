import React, { useEffect } from "react";
import './signupForm.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export function SignUpForm() {

function userSignup() {
      return axios.post(`/signup`, {
         first_name: firstName,
         last_name: lastName,
         email: email,
         password: Hash
      })
      .then(response =>
         // console.log(response, response.data)
         response.data
      ).catch(e => {
         console.log(`Error `, e)
      });
   }
    

   const [firstName, setFirstName] = useState('');
      function setFirstNameValue(e: any){
         setFirstName(e.target.value);
         console.log(firstName, e.target.value)
      }
   const [lastName, setLastName] = useState('');
   function setLastNameValue(e: any){
      setLastName(e.target.value);
   }
   const [email, setEmail] = useState('');
   function setEmailValue(e: any){
      setEmail(e.target.value);
   }
   const [password, setPassword] = useState('');
   function setPasswordValue(e: any){
      setPassword(e.target.value);
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
                     <input name="firstName" type="firstName" className="form-control" placeholder="First Name" onChange={setFirstNameValue}></input>
                  </div>
                  <div className="form-group">
                     <label>Last Name</label>
                     <input type="lastName" className="form-control" placeholder="Last Name" onChange={setLastNameValue}></input>
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <input type="email" className="form-control" placeholder="Email" onChange={setEmailValue}></input>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onChange={setPasswordValue}></input>
                  </div>
                  <button type="submit" className="btn btn-black" onClick={userSignup}>Register</button>
     
                  <button type="submit" className="btn btn-secondary"><Link className='link-color' to='/login'>Already a Member?</Link></button>
               </form>
            </div>
         </div>
      </div>
      </div>
)}