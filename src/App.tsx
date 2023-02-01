import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <header className='header'>
                <img className='header-logo'
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/640px-Telegram_Messenger.png"
                     alt=""/>
            </header>
            <section className='main-section'>
                <nav className='nav'>
                    <div><a href="#">Profile</a></div>
                    <div><a href="#">Messages</a></div>
                    <div><a href="#">News</a></div>
                    <div><a href="#">Music</a></div>
                    <div><a href="#">Settings</a></div>
                </nav>
                <div className='main-content'>
                    <div>
                        <img className='fon'
                             src="https://www.rgo.ru/sites/default/files/node/59064/anna-politova-solnechnyy-ushishir-602387.jpg"
                             alt=""/>
                    </div>
                    <div className='profile-info'>
                        <img src="https://avatars.githubusercontent.com/u/11731867?v=4" alt=""/>
                        <div>
                            <h3>Marco Reus</h3>
                            <span>27.07.1996</span>
                        </div>
                    </div>
                    <div className='post'>
                        My posts
                        <div className='new-post'>
                            <input type="text"/>
                        </div>
                        <div className='post'>
                            Post1
                        </div>
                    </div>

                </div>
            </section>
            <footer className='footer'>Footer</footer>
        </div>
    );
}


export default App;
