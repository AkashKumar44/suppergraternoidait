import logo from './logo.svg';
import React, {Component} from "react";
import { ReactDOM } from "react-dom";
import './Demo.css';



const Demo = ({name}) =>{
    return <nav className="App-header">
    <h1 className='App'>Hello {name}</h1>
    <img src={logo} className="App-logo" alt="logo" />
</nav>
}


export default Demo;