import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const fname = 'Shiv';
const lname = 'Sharma'
const current_date = new Date()
ReactDOM.render(
    <>
      <h1> {` Hello ${fname} ${lname}...!!!`}</h1>
      <h2>{` Today's  date is ${current_date.toLocaleDateString()}`}</h2>
      <h2>{` Time  is ${current_date.toLocaleTimeString()}`}</h2>

      </ >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// var React = require('react');
// var ReactDOM = require('react-dom');

// ReactDOM.render(<h1>Hello World...!!!</h1>, document.getElementById('root'))