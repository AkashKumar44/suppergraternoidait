import React, {Component} from "react";
import { ReactDOM } from "react-dom";
import './Demo.css';



const Demo = ({name}) =>{
    return <nav className="mainstyle">
    <h1>Hello {name}</h1>
</nav>
}


export default Demo;