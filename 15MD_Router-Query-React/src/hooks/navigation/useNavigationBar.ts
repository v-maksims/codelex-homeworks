import style from '../../styles/Navigation.module.scss';
import { useEffect, useState } from 'react';


export default function useNavigationBar(){
    const [current, setCurrent] = useState('1');

    useEffect(() => {
        const currentUrl = document.URL;
        if(currentUrl.includes('character')){
            setCurrent('2');
        } else if (currentUrl.includes('episode')){
            setCurrent('3');
        }else if (currentUrl.includes('about')){
            setCurrent('4');
        } else{
            setCurrent('1');
        }
    });

    const checkByCurrentId = (id:string) => {
        if(id === current){
            return style.navItemActive;
        }
        return style.navItem;
    };

    const clickHandler = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setCurrent(e.currentTarget.id);
    };

    const logoClickHandler = () => {
        setCurrent('1');
    };

    return{
        checkByCurrentId,
        clickHandler,
        logoClickHandler
    };

} 