import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <>
            <Navigation/>
            <div className='container'>
                <Routes>
                    <Route path='/'/>
                    <Route path='/some' element={'some'}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
