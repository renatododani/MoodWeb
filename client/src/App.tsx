import React from 'react';
import { SignUpForm } from './components/signupForm/signupForm';
import './App.css';
import { LoginForm } from './components/loginForm/loginForm';
import {Link, Outlet, NavLink} from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to='/login' >Login</Link>
      <Link to='/signup' >Sign Up</Link>
    </div>
  );
}

export default App;
