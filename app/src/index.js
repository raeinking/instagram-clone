import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Main from './components/main/Main'

ReactDOM.render(
  <div className="div">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='login' element={<Login />}/>
        <Route path='Signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
