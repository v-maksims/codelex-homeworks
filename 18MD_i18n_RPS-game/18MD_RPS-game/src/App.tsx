import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

function App () {
    const [playerName, setPlayerName] = useState('');
    const playerNameHandler = (name:string) => {
        setPlayerName(name);
    };
    return (
        <div className="container">
            <div className='navigation-wrap'>
                <NavLink
                    to='/'
                    className='navigation'
                >
                    home
                </NavLink>
                <NavLink
                    to='/game'
                    className='navigation'
                >
                    game
                </NavLink>
            </div>
            <Routes>
                <Route path='/' element={ <HomePage playerNameHandler={ playerNameHandler } name={ playerName }/> } />
                <Route path='/game' element={ <GamePage name={ playerName }/> } />
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
