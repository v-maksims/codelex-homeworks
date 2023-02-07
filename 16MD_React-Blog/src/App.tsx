import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';


function App() {
    return (
        <div className='container'>
            <nav className='navigation'>
                <Navigation 
                    to='/' 
                    label='home'
                    className='navigation__item'
                />
                <Navigation 
                    to='/blogs' 
                    label='blog'
                    className='navigation__item'
                />
            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/blogs' element={<BlogsPage/>} />
                <Route path='/blogs/:id' element={<BlogPage/>} />
            </Routes>
        </div>
    );
}

export default App;
