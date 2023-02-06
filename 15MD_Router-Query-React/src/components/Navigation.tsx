import { Link } from 'react-router-dom';

import useNavigationBar from '../hooks/navigation/useNavigationBar';

import style from '../styles/Navigation.module.scss';

export default function Navigation() {
    const {checkByCurrentId,clickHandler,logoClickHandler} = useNavigationBar();
    return(
        <div className={style.navigation}>
            <span>
                <Link to='/'
                    className={style.text}
                    onClick={logoClickHandler}
                >
                MD15
                </Link>
            </span>
            <nav>
                <span className={style.navList}>
                    <Link to='/' 
                        className={checkByCurrentId('1')} 
                        id='1' 
                        onClick={clickHandler}
                    > 
                    home 
                    </Link>
                    <Link to='/characters' 
                        className={checkByCurrentId('2')} 
                        id='2' 
                        onClick={clickHandler}
                    > 
                    characters 
                    </Link>
                    <Link to='/episodes' 
                        className={checkByCurrentId('3')} 
                        id='3' 
                        onClick={clickHandler}
                    > 
                    episodes 
                    </Link>
                    <Link to='/about' 
                        className={checkByCurrentId('4')} 
                        id='4'
                        onClick={clickHandler}
                    > 
                    about 
                    </Link>
                </span>
            </nav>
        </div>

    );
}