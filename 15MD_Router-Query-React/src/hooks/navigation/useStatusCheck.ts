import style from '../../styles/Card.module.scss';

export default function useStatusCheck(status: string) {
    if(status === 'Alive'){
        return style.dotA;
    } else if (status === 'Dead'){
        return style.dotD;
    }
    return style.dot;
}
