import style from './Navigation.module.scss';

export default function Navigation() {
    return(
        <div className={style.navigation}>
            <span className={style.text}>MD 15</span>
            <nav>
                <ul className={style.navList}>
                    <li className={style.navItem}>home</li>
                    <li className={style.navItem}>character</li>
                    <li className={style.navItem}>about</li>
                </ul>
            </nav>
        </div>

    );
}