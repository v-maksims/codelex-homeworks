import { Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Button from './components/Button';
import Navigation from './components/Navigation';

import BlogNewPage from './pages/BlogNewPage';
import BlogPage from './pages/BlogPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';

import 'react-toastify/dist/ReactToastify.css';

function App () {
    return (
        <>
            <div className='container'>
                <nav className='navigation'>
                    <div className="navigation__items">
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
                    </div>
                    <div className="navigation__btn">
                        <NavLink to='/blogs/new'>
                            <Button
                                label='add'
                                type='button'
                            />
                        </NavLink>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={ <HomePage/> } />
                    <Route path='/blogs' element={ <BlogsPage/> } />
                    <Route path='/blogs/new' element={ <BlogNewPage/> } />
                    <Route path='/blogs/:id' element={ <BlogPage/> } />
                </Routes>
                <ToastContainer/>
            </div>
        </>
    );
}

export default App;
