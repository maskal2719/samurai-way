import React from 'react';
import './App.css';
import Technologies from "./Technologies";
import Header from "./Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            Hello, samurai! Let's go!
            <Technologies/>
        </div>
    );
}


export default App;
