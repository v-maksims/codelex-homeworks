import { Link } from 'react-router-dom';

import { TEpisode } from '../../types/Episode';

import style from '../../styles/Card.module.scss';

type TEpisodeCardProps = {
    card: TEpisode
}

export default function EpisodeCard({card}:TEpisodeCardProps) {
    return(
        <div className={style.card}>
            <Link to={`/episodes/${card.id}`}>
                <div className={style.propWrap}>
                    <span className={style.title}>name:</span>
                    <span className={style.text}>{card.name}</span>
                </div>
                <div className={style.propWrap}>
                    <span className={style.title}>date:</span>
                    <span className={style.text}>{card.air_date}</span>
                </div>
                <div className={style.propWrap}>
                    <span className={style.title}>episode:</span>
                    <span className={style.text}>{card.episode}</span>
                </div>
            </Link>
        </div>
    );
}