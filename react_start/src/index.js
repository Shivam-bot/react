import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Shiv';
ReactDOM.render(
    <>
      <h1>Hello {name}...!!!</h1>
      <h2>This is react beginning</h2>
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