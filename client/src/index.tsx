import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { LoginForm } from './components/loginForm/loginForm';
import { SignUpForm } from './components/signupForm/signupForm';
import { MoodHome } from './components/moodHome/moodHome';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
      <Routes>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path= '/signup' element={<SignUpForm />}></Route>
        <Route path= '/home' element={<MoodHome/>}></Route>
        <Route path='*' element={<Navigate to='/home'/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
