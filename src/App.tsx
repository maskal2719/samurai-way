import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <section className='main-section'>
                <Navbar/>
                <Profile/>
            </section>
            <Footer/>
        </div>
    );
}


export default App;
