import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Navigation from './components/Navigation';
import BlogPage from './pages/BlogPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';


function App() {
    return (
        <div className='container'>
            <nav className='navigation'>
                <Navigation 
                    className='navigation__item'
                    to='/' 
                    label='home'
                />
                <Navigation 
                    className='navigation__item'
                    to='/blogs' 
                    label='blog'
                />
                <Button 
                    label='add'
                    onClick={() => console.log('yes')}
                    type='button'
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
