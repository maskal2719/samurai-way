import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            Hello, samurai! Let's go!
            <Technologies/>
        </div>
    );
}
const Header = () => {
    return (
        <div>
            <a href="#s">Home</a>
            <a href="#s">Home</a>
            <a href="#s">Home</a>
        </div>
    );
}
const Technologies = () => {
    return (
        <div>
            <ul>
                <li>JS</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
            </ul>
        </div>
    );
}

export default App;
