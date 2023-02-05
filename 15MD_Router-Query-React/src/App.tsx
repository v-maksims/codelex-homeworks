import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import HomePage from './pages/HomePage';
import EpisodePage from './pages/EpisodesPage';
import EpisodeDetailsPage from './pages/EpisodeDetailPage';

function App() {
    return (
        <>
            <Navigation/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/characters' element={<CharactersPage/>}/>
                    <Route path='/characters/:id' element={<CharacterPage/>}/>
                    <Route path='/episodes' element={<EpisodePage/>}/>
                    <Route path='/episodes/:id' element={<EpisodeDetailsPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
