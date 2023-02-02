import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

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
