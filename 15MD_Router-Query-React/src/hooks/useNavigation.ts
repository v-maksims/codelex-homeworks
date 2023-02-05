import style from '../styles/Navigation.module.scss';
import { useState } from 'react';


export default function useNavigationBar(){
    const [current, setCurrent] = useState('1');


    const checkByCurrentId = (id:string) => {
        if(id === current){
            return style.navItemActive;
        }
        return style.navItem;
    };

    const clickHandler = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setCurrent(e.currentTarget.id);
    };

    const setCurrentHandler = () => {
        setCurrent('1');
    };
    return{
        checkByCurrentId,
        clickHandler,
        setCurrentHandler
    };

} 