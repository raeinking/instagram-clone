import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login/Login.js'
import Signup from './components/signup/Signup.js'
import Main from './components/main/Main.js'
import Addpost from '../src/components/addpost/Addpost'



ReactDOM.render(
  <div className="div">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='login' element={<Login />}/>
        <Route path='Signup' element={<Signup />}/>
        <Route path='Addpost' element={<Addpost />}/>
      </Routes>
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
