import React, { useEffect } from "react";
import './signupForm.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export function SignUpForm() {

   let navigate:any = useNavigate();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function validateForm() {
      return firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0;
   }

   function userSignup() {
         return axios.post(`/signup`, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
         })
         .then((response) => {
            console.log(response, response.data)
            return response.data
         })
         .then(navigate('/login'))
         .catch(e => {
            console.log(`Error `, e)
         });
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
                        <input name="firstName" type="firstName" className="form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                     </div>
                     <div className="form-group">
                        <label>Last Name</label>
                        <input type="lastName" className="form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                     </div>
                     <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                     </div>
                     <button type="submit" className="btn btn-black" onClick={userSignup} disabled={!validateForm()}>Register</button>
      
                     <button type="submit" className="btn btn-secondary"><Link className='link-color' to='/login'>Already a Member?</Link></button>
                  </form>
               </div>
            </div>
         </div>
   </div>
)}