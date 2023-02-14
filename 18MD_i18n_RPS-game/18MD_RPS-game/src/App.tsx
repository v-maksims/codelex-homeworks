import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

function App () {
    return (
        <div className="container">
            <div>
                <NavLink
                    to='/'
                >
                    home
                </NavLink>
                <NavLink
                    to='/game'
                >
                    game
                </NavLink>
            </div>
            <Routes>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/game' element={ <GamePage/> } />
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
