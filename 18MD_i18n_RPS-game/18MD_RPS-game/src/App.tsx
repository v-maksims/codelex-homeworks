import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import Button from './components/Button';
import useTranslateText from './hooks/useTranslateText';
import StaticPage from './pages/StaticPage';

function App () {
    const [playerName, setPlayerName] = useState('');
    const { changeLanguage } = useTranslateText();
    const { t } = useTranslateText();

    const playerNameHandler = (name:string) => {
        setPlayerName(name);
    };

    return (
        <div className="container">
            <div className='header-wrap'>
                <div className='header-item'>
                    <NavLink
                        to='/'
                        className='navigation'
                    >
                        {t('home')}
                    </NavLink>
                    <NavLink
                        to='/game'
                        className='navigation'
                    >
                        {t('game')}
                    </NavLink>
                    <NavLink
                        to='/static'
                        className='navigation'
                    >
                        {t('static')}
                    </NavLink>
                </div>
                <div className='header-item'>
                    <Button
                        type='button'
                        label='LV'
                        onClick={ () => changeLanguage('lv') }
                    />
                    <Button
                        type='button'
                        label='RU'
                        onClick={ () => changeLanguage('ru') }
                    />
                    <Button
                        type='button'
                        label='ENG'
                        onClick={ () => changeLanguage('en') }
                    />
                </div>
            </div>
            <Routes>
                <Route path='/' element={ <HomePage playerNameHandler={ playerNameHandler } name={ playerName }/> } />
                <Route path='/game' element={ <GamePage name={ playerName }/> } />
                <Route path='/static' element={ <StaticPage/> } />
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
