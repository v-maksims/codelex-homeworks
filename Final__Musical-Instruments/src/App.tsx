import { NavLink, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import InstrumentPage from './pages/InstrumentPage/InstrumentPage';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';

function App () {
    return (
        <>
            <div className='container--fluid'>
                <NavigationBar/>
            </div>
            <div className='container'>
                <Routes>
                    <Route path='/' element={ <HomePage/> } />
                    <Route path='/instruments' element={ <InstrumentPage/> } />
                </Routes>
            </div>
        </>
    );
}

export default App;
