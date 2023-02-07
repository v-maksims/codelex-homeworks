import { Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import FormAddPost from './components/FormAddPost';
import Navigation from './components/Navigation';
import useModal from './hooks/useModal';
import BlogPage from './pages/BlogPage';
import BlogsPage from './pages/BlogsPage';
import HomePage from './pages/HomePage';


function App() {
    const {clickHandler,modal} = useModal();
    return (
        <>
            <div className='container'>
                <FormAddPost
                    modal={modal}
                    onClick={clickHandler}
                />
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
                        <Button 
                            label='add'
                            onClick={clickHandler}
                            type='button'
                        />
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/blogs' element={<BlogsPage/>} />
                    <Route path='/blogs/:id' element={<BlogPage/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
