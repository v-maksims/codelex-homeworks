import MainPage from './pages/MainPage/MainPage';
import pageLogo from './assets/logo.png';

const App = () => (
    <div className="container">
        <div className='logoWrap'>
            <img className='logo' src={pageLogo} />
        </div>
        <MainPage/>
    </div>
);

export default App;
