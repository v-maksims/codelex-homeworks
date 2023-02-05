import useStatusCheck from '../hooks/useStatusCheck';
import { TCharacter } from '../types/Character';
import style from '../styles/Card.module.scss';

type TCharacterCardProps = {
    card: TCharacter
}

export default function CharacterCard({card}:TCharacterCardProps) {
    return(
        <div className={style.card}>
            <img className={style.image} src={card.image} alt={card.name} />
            <div className={style.propWrap}>
                <span className={style.title}>name:</span>
                <span className={style.text}>{card.name}</span>
            </div>
            <div className={style.propWrap}>
                <span className={style.title}>species:</span>
                <span className={style.text}>{card.species}</span>
            </div>
            <div className={style.propWrap}>
                <span className={style.title}>location:</span>
                <span className={style.text}>{card.location.name}</span>
            </div>
            <div className={style.propWrap}>
                <span className={style.title}>status:</span>
                <div className={style.statusWrap}>
                    <div className={useStatusCheck(card.status)}></div>
                    <span className={style.text}>{card.status}</span>
                </div>
            </div>
            <div className={style.propWrap}>
                <span className={style.title}>type:</span>
                <span className={style.text}>{card.type || 'none'}</span>
            </div>
        </div>
    );
}