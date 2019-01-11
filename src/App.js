import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import { compose } from "recompose"
import withTextFieldState from "./withTextFieldState"

const SimpleForm = () => (
    <div>
        <input type="text" name="firstname" onChange={onFirstNameChange} />
        <Greetings firstName="John"/>
    </div>
);

const App = () => (
        <div>
            <SimpleForm/>
        </div>

            /**<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>*/
            );


export default App;
