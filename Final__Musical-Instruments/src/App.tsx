import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import InstrumentPage from './pages/InstrumentPage/InstrumentPage';
import NavigationBar from './components/Navigation/NavigationBar/NavigationBar';
import PianoPage from './pages/PianoPage/PianoPage';
import GuitarPage from './pages/GuitarPage/GuitarPage';
import TrianglePage from './pages/TrianglePage/TrianglePage';

const App = () => (
    <>
        <div className='container--fluid'>
            <NavigationBar />
        </div>
        <div className='container'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/instruments' element={<InstrumentPage />} />
                <Route path='/piano' element={<PianoPage />} />
                <Route path='/guitar' element={<GuitarPage />} />
                <Route path='/triangle' element={<TrianglePage />} />
            </Routes>
        </div>
    </>
);

export default App;
